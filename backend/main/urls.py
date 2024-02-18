from main.views import ForestOwnerResource

def register_urls(api):
    api.add_resource(ForestOwnerResource, '/api/forest_owner')
