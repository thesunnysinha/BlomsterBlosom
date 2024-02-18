from db import db
from sqlalchemy import Enum

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    role = db.Column(Enum('Forest Owner', 'Botanical Owner', name='user_roles'), nullable=False)
    subscription_type = db.Column(Enum('Free', 'Premium', name='subscription_types'), nullable=False)

class ForestOwner(db.Model):
    owner_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    owner_name = db.Column(db.String(100), nullable=False)
    contact_number = db.Column(db.String(20), nullable=True)
    address = db.Column(db.String(200), nullable=True)
    forest = db.relationship('Forest', backref='owner', uselist=False)

class Forest(db.Model):
    forest_id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('forest_owner.owner_id'), nullable=False)
    forest_name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    soil_type = db.Column(db.String(50), nullable=False)
    
class BotanicalOwner(db.Model):
    botanical_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    owner_name = db.Column(db.String(100), nullable=False)
    botanical_name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    contact_number = db.Column(db.String(20), nullable=True)
    address = db.Column(db.String(200), nullable=True)
    
class Tender(db.Model):
    tender_id = db.Column(db.Integer, primary_key=True)
    forest_id = db.Column(db.Integer, db.ForeignKey('forest_owner.owner_id'), nullable=False)
    tender_type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.Date, nullable=False)
    
class TenderApplication(db.Model):
    application_id = db.Column(db.Integer, primary_key=True)
    botanical_id = db.Column(db.Integer, db.ForeignKey('botanical_owner.botanical_id'), nullable=False)
    tender_id = db.Column(db.Integer, db.ForeignKey('tender.tender_id'), nullable=False)
    application_date = db.Column(db.Date, nullable=False)
