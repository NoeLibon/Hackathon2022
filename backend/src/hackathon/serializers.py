from hackathon.validators import data_required
from marshmallow import Schema, fields
from marshmallow import validate

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
    re_password = fields.Str(required=True, validate=validate.Equal(password))

class CallSerializer(Schema):
    """This type represents a call serializer."""

    sector = fields.Str(required=True, validate=data_required)
    proximity = fields.Float(required=True, validate=data_required)
    position = fields.Str(required=True, validate=data_required)