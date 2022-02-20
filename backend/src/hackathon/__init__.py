from __future__ import annotations
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO
from flask_jwt_extended import JWTManager
from flask_login import LoginManager
from flask_restful import Api
from flask_cors import CORS
from config import BaseConfig
import eventlet

eventlet.monkey_patch()

app = Flask(__name__)
app.config.from_object(BaseConfig)

db = SQLAlchemy(app)

jwt = JWTManager(app)

api = Api(app)

socketio = SocketIO(app, cors_allowed_origins="*")

login_manager = LoginManager(app)

user_status = {}

teaching = {}

learning = {}

friend_requests = set()

call_requests = set()

rooms = {}

sids = {}

CORS(app)

from hackathon import models, urls, events