from .views import ForestOwnerResource,LoginResource

def register_urls(api):
    api.add_resource(ForestOwnerResource, '/api/forest_owner')
    api.add_resource(LoginResource, '/api/login')
