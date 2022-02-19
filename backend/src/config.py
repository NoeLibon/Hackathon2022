import os
basedir = os.path.abspath(os.path.dirname(__file__))


class BaseConfig():
    DEBUG = True
    ENV = 'development'
    SECRET_KEY = '086035264d1272e19c8e5dcdd465ff4ed59c3d85f4bc3cd2d925254b99f7ef211a509b6cd75863dbf0357b452088d79401254fb0581286e2020ee7cb9da2eafc'
    JWT_SECRET_KEY = SECRET_KEY
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False