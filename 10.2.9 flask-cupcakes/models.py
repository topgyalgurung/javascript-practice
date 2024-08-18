"""Models for Cupcake app."""

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Integer, Text, Float

db = SQLAlchemy()

DEFAULT_IMAGE = "https://tinyurl.com/demo-cupcake"

class Cupcake(db.Model):
    """ Cupcake """

    __tablename__ = "cupcakes"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.Text, nullable=False)
    size = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    image = db.Column(db.Text, nullable=False, default=DEFAULT_IMAGE)

    def __repr__(self):
        return f"<Cupcake id={self.id} flavor={self.flavor} size={self.size} rating={self.rating}>"
    
    def to_dict(self):
        """Serialize a Cupcake instance to a dictionary."""
        return {
            "id": self.id,
            "flavor": self.flavor,
            "size": self.size,
            "rating": self.rating,
            "image": self.image
        }


def connect_db(app):
    """ connect to the database """
    # create db object using constructor to have access to db.Model class to define models and db.s
    db.app = app
    # Initialize the database with the app
    db.init_app(app)