from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flasgger import Swagger

app = Flask(__name__)
api = Api(app)
swagger = Swagger(app)

# Your database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/trail'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from main import urls

if __name__ == '__main__':
    with app.app_context():
        # Create the database tables
        db.create_all()

        # Register API endpoints
        urls.register_urls(api)

    # Run the Flask application in debug mode
    app.run(debug=True)

