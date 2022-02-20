from hackathon.validators import data_required
from marshmallow import Schema, fields

class LoginSerializer(Schema):
    """This type represents a login serializer."""

    username = fields.Str(required=True, validate=data_required)
    password = fields.Str(required=True, validate=data_required)

class RegisterSerializer(Schema):
    """This type represents a register serializer."""

    username = fields.Str(required=True, validate=data_required)
    first_name = fields.Str(required=True, validate=data_required)
    last_name = fields.Str(required=True, validate=data_required)
    password = fields.Str(required=True, validate=data_required)

class UpdateSerializer(Schema):
    """This type represents an update serializer."""

    first_name = fields.Str(required=True, validate=data_required)
    last_name = fields.Str(required=True, validate=data_required)

class CallSerializer(Schema):
    """This type represents a call serializer."""

    sector = fields.Str(required=True, validate=data_required)
    proximity = fields.Float(required=True, validate=data_required)
    position = fields.Str(required=True, validate=data_required)

class UserSerializer(Schema):
    """This type represents a user serializer."""

    id = fields.Integer(required=True, data_key="user_id", validate=data_required)
    firstName = fields.Str(required=True, data_key="first_name", validate=data_required)
    lastName = fields.Str(required=True, data_key="last_name", validate=data_required)