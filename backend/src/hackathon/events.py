from flask_socketio import join_room
from hackathon import socketio

@socketio.on("video")
def video():