from hackathon import socketio, app, db

if __name__ == "__main__":
    db.create_all()
    socketio.run(app)