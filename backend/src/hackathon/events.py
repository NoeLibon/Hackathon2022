from flask_socketio import join_room
from hackathon import socketio

user_status = {}

@socketio.on("online-status")
def online_status(message: dict[str, object]) -> None:
    """This function represents a online status reception."""

@socketio.on("video")
def video(message: dict[str, object]) -> None:
    """This function represents a video message reception."""

@socketio.on("video")
def chat(message: dict[str, object]) -> None:
    """This function represents a video message reception."""

@socketio.on("friend-request")
def friend_request(message: dict[str, object]):
    """This function represents a friend request reception."""

@socketio.on("friend-validation")
def friend_validation(message: dict[str, object]):
    """This function represents a friend request validation reception."""