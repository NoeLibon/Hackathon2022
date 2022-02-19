from __future__ import annotations
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from hackathon import db, login_manager, jwt

class User(UserMixin, db.Model):
    """This type represents a user."""

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    lastName = db.Column(db.String(80), nullable=False)
    firstName = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(64), nullable=False)
    contacts = db.relationship('User', secondary='contact', primaryjoin="User.id == Contact.first", secondaryjoin="Contact.second == User.id")

    def set_password(self, password: str):
        """Sets the password for `self`.

        Args:
        -----
            pwd (str): the password.
        """
        self.password = generate_password_hash(password)
        db.session.commit()

    def check_password(self, password: str) -> bool:
        """Checks if `password` matches the password in `self`. 

        Args:
        -----
            pwd (str): the password to check.

        Returns:
        --------
            bool: True if password matches, False otherwise.
        """
        return check_password_hash(self.password, password)

    @staticmethod
    def add_new(username: str, firstName: str, lastName: str, pwd: str) -> User | None:
        """Adds a new user.

        Args:
        -----
            username (str): the user username.
            firstName (str): the user first name. 
            lastName (str): the user last name.
            pwd (str): the user's password
        
        Raises:
        -------
            ValueError: if the username is already taken.

        Returns:
        --------
            User: the new user
            None: if the user wasn't created (because the username is already taken)
        """
        if User.query.filter_by(username=username).first() is not None:
            raise ValueError(f"username {username} is already taken.")
        
        user = User(
            username=username,
            firstName=firstName,
            lastName=lastName,
            password=generate_password_hash(pwd)
        )

        db.session.add(user)
        db.session.commit()
        
        return user

    @staticmethod
    def get_by_id(id: int) -> User | None:
        """Gets a user by its id.

        Args:
        -----
            id (int): the user's id.

        Returns:
        -------
            User: the user.
            None: if the user doesn't exist.
        """
        return User.query.filter_by(id=id).first()

    @staticmethod
    def get_by_username(username: str) -> User | None:
        """Gets a user by its username.

        Args:
        -----
            username (str): the user's username 

        Returns:
        -------
            User: the user queried
            None: if the user doesn't exists
        """
        return User.query.filter_by(username=username).first()

class Message(db.Model):
    """This type represents a message."""

    sender = db.Column(db.Integer(), db.ForeignKey(User.id), primary_key=True)
    receiver = db.Column(db.Integer(), db.ForeignKey(User.id), primary_key=True)
    date = db.Column(db.DateTime(), nullable=False)

class Contact(db.Model):
    """This type represents a Contact."""

    first = db.Column(db.Integer(), db.ForeignKey(User.id), primary_key=True)
    second = db.Column(db.Integer(), db.ForeignKey(User.id), primary_key=True)

login_manager.user_loader(lambda id: User.get_by_id(int(id)))