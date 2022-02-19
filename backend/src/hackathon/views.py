from flask import request, jsonify, Response
from flask_restful import Resource
from flask_jwt_extended import create_access_token, get_jwt_identity
from marshmallow import ValidationError
from hackathon.models import User
from hackathon.serializers import LoginSerializer, RegisterSerializer

class Login(Resource):
    """This type represents the login view."""

    def post(self):
        """This function allows the user to login.

        Returns:
        --------
            Response: the response.
        """
        serializer = LoginSerializer()
        try:
            data = serializer.load(request.json)
        except ValidationError:
            return {"msg":"Invalid data."}, 400
        
        user = User.get_by_username(data['username'])
        if user is None or not User.check_password(data['password']):
            return {"msg":"Invalid credentials."}, 401
        
        return {
            "access_token":create_access_token(identity=user.id)
        }, 200

class Register(Resource):
    """This type represents the register view."""

    def post(self):
        """This function allows the user to register.

        Returns:
        --------
            Response: the response.
        """
        register = RegisterSerializer()
        try:
            data = register.load(request.json)
        except ValidationError:
            return{"msg" : "Invalid data."}, 400
        
        try:
            user =  User.add_new(data['username'],data["first_name"],data["last_name"],data["password"],data["re_password"])
        except ValueError:
            return{"msg" : "Invalid data."}, 400
        return "" , 200

class UserMe(Resource):
    """This type represents the user/me view."""

    def get(self):
        """This function allows the user to get his informations.

        Returns:
        --------
            Response: the response.
        """
        user = get_jwt_identity()
        return {"first_name": user.firstName, "last_name": user.lastName}

    def post(self):
        """This function allows the user to update his informations.

        Returns:
        --------
            Response: the response.
        """

class UserContact(Resource):
    """This type represents the user/contact view."""

    def get(self):
        """This function allows the user to get his contacts.

        Returns:
        --------
            Response: the response.
        """

class CallLearn(Resource):
    """This type represents the call/learn view."""

    def post(self):
        """This function allows the user to join the learner queue.

        Returns:
        --------
            Response: the response.
        """

class CallTeach(Resource):
    """This type represents the call/learn view."""

    def post(self):
        """This function allows the user to join the teacher queue.

        Returns:
        --------
            Response: the response.
        """

class CallNext(Resource):
    """This type represents the call/next view."""

    def post(self):
        """This function allows the user to change the user match.

        Returns:
        --------
            Response: the response.
        """

class CallStop(Resource):
    """This type represents the call/stop view."""

    def post(self):
        """This function allows the user to remove the user from the queue.

        Returns:
        --------
            Response: the response.
        """