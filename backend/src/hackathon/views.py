from flask import request, jsonify, Response
from flask_restful import Resource
from flask_jwt_extended import create_access_token, get_jwt_identity
from marshmallow import ValidationError
from hackathon.models import User
from hackathon.serializers import LoginSerializer

class Login(Resource):
    """This type represents the login view."""

    def post(self) -> tuple[Response, int]:
        """This function allows the user to login.

        Returns:
        --------
            Response: the response.
        """
        serializer = LoginSerializer()
        try:
            data = serializer.load(request.json)
        except ValidationError:
            return jsonify({"msg": "Invalid data."}), 400

        user = User.get_by_username(data.username)
        if user is None or not User.check_password(data.password):
            return jsonify({"msg": "Invalid credentials."}), 401
        
        return jsonify(
            access_token=create_access_token(identity=data.username)
        ), 200

class Register(Resource):
    """This type represents the register view."""

    def post(self) -> tuple[Response, int]:
        """This function allows the user to register.

        Returns:
        --------
            Response: the response.
        """

class UserMe(Resource):
    """This type represents the user/me view."""

    def get(self) -> tuple[Response, int]:
        """This function allows the user to get his informations.

        Returns:
        --------
            Response: the response.
        """
        user = get_jwt_identity()

    def post(self) -> tuple[Response, int]:
        """This function allows the user to update his informations.

        Returns:
        --------
            Response: the response.
        """

class UserContact(Resource):
    """This type represents the user/contact view."""

    def get(self) -> tuple[Response, int]:
        """This function allows the user to get his contacts.

        Returns:
        --------
            Response: the response.
        """

class CallLearn(Resource):
    """This type represents the call/learn view."""

    def post(self) -> tuple[Response, int]:
        """This function allows the user to join the learner queue.

        Returns:
        --------
            Response: the response.
        """

class CallTeach(Resource):
    """This type represents the call/learn view."""

    def post(self) -> tuple[Response, int]:
        """This function allows the user to join the teacher queue.

        Returns:
        --------
            Response: the response.
        """

class CallNext(Resource):
    """This type represents the call/next view."""

    def post(self) -> tuple[Response, int]:
        """This function allows the user to change the user match.

        Returns:
        --------
            Response: the response.
        """

class CallStop(Resource):
    """This type represents the call/stop view."""

    def post(self) -> tuple[Response, int]:
        """This function allows the user to remove the user from the queue.

        Returns:
        --------
            Response: the response.
        """