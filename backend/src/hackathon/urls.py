from hackathon.views import Login, Register, UserMe, CallTeach, CallLearn, CallNext, CallStop
from hackathon import api

api.add_resource(Login, '/api/login')
api.add_resource(Register, '/api/register')
api.add_resource(UserMe, '/api/user/me')
api.add_resource(Login, '/api/user/me')
api.add_resource(CallLearn, '/api/call/learn')
api.add_resource(CallTeach, '/api/call/teach')
api.add_resource(CallNext, '/api/call/next')
api.add_resource(CallStop, '/api/call/stop')