from hackathon import socketio, friend_requests, rooms, db
from hackathon.models import Contact, Message, User
from flask_socketio import join_room, leave_room, disconnect as socketio_disconnect
from flask_login import current_user
from datetime import datetime

@socketio.on('connect')
def connect(message: dict) -> None:
    """This function represents a connection event."""
    if not current_user.is_authenticated:
        socketio_disconnect("Not authentificated")
        return
    
    socketio.emit("online-status", "ONLINE")
    for user in current_user.contacts:
        join_room(user.id)
    
    for (sender_id, _) in friend_requests:
        sender = User.get_by_id(sender_id)
        socketio.emit("friend-request", {
            "user_id": sender_id,
            "first_name": sender.firstName,
            "last_name": sender.lastName
        })


@socketio.on('disconnect')
def disconnect() -> None:
    """This function represents a disconnect event."""
    print("disconnected")
    if not current_user.is_authenticated:
        socketio_disconnect("Not authentificated")
        return
    socketio.emit("online-status", "OFFLINE")
    for user in current_user.contacts:
        leave_room(user.id)

@socketio.on("video")
def video(message: dict) -> None:
    """This function represents a video message reception event."""
    print(len(message))
    socketio.emit('video', message, broadcast=True)

@socketio.on("chat")
def chat(message: dict) -> None:
    """This function represents a video message reception event."""
    print("chat")
    receiver_sid, receiver_id = rooms[current_user.id]

    msg = Message(
        sender=current_user,
        receiver=User.get_by_id(receiver_id),
        date=datetime.now()
    )
    db.session.commit()

    socketio.emit("chat", {"date": str(msg.date), "message": message["message"]}, to=receiver_sid)


@socketio.on("friend-request")
def friend_request(message: dict):
    """This function represents a friend request reception event."""
    print("request")
    friend_requests.add((current_user.id, message["user_id"]))
    socketio.emit("friend-request", {
        "user_id": current_user.id,
        "first_name": current_user.firstName,
        "last_name": current_user.lastName
    })

@socketio.on("friend-validation")
def friend_validation(message: dict):
    """This function represents a friend request validation reception event."""
    print("validation")
    if (current_user.id, message["user_id"]) not in friend_requests:
        return
    
    friend_requests.remove((current_user.id, message["user_id"]))
    
    if not message["user_id"]:
        return
    
    Contact(first=current_user.id, second=User.get_by_id(message["user_id"]))
    Contact(first=User.get_by_id(message["user_id"]), second=current_user.id)
    db.session.commit()

    socketio.emit("friend-validation", {
        "user_id": current_user.id,
        "first_name": current_user.firstName,
        "last_name": current_user.lastName
    })