"""Flask app for Cupcakes"""

from flask import Flask, jsonify, request, render_template
from models import db, Cupcake, connect_db

# configure extension
app = Flask(__name__)

# basedir = os.path.abspath(os.path.dirname(__file__))
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///' + os.path.join(basedir, 'cupcakes.db')

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://topgyal:Topgyal*123@localhost/cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SECRET_KEY'] = "random-secret-key"

connect_db(app)

## PART 2: Listing, Getting & Creating Cupcakes 

@app.route('/')
def root():
    return render_template("index.html")

@app.route('/api/cupcakes')
def get_all_cupcakes():
    cupcakes = Cupcake.query.all()
    serialized_cupcakes = [cupcake.to_dict() for cupcake in cupcakes]
    return jsonify(cupcakes = serialized_cupcakes)

@app.route('/api/cupcakes/<int:cupcake_id>')
def get_a_cupcake(cupcake_id):
    # get_or_404(entity)
    # Like session.get() but aborts with a 404 Not Found error instead of returning None.
    # queries the database to retrieve a cupcake object whose id matches cupcake_id
    #  If no such cupcake exists, Flask automatically returns a 404 error (meaning “Not Found”).
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    return jsonify(cupcake = cupcake.to_dict()) # raps the dictionary in a JSON response, making it ready to be sent back to the client. 

@app.route('/api/cupcakes', methods=['POST'])
def create_cupcake():
    # retrieves json data sent in the POST request body 
    # request.json is a flask object that parses incoming json data from the request
    data = request.json
    # create new object 
    cupcake = Cupcake(
        flavor = data['flavor'],
        rating= data['rating'],
        size = data['size'],
        image = data['image'] or None)
    
    # staging
   # adds the new cupcake object to the current database session. It’s now staged to be inserted into the database.
    db.session.add(cupcake)

    # saves all the changes made during the session
    db.session.commit()
    # return HTTP status 201 created 
    return (jsonify(cupcake = cupcake.to_dict()),201)

# PART 3: Update & Delete Cupcakes 
@app.route('/api/cupcakes/<int:cupcake_id>', methods=['PATCH'])
def update_cupcake(cupcake_id):
    data= request.json

    cupcake = Cupcake.query.get_or_404(cupcake_id)
    cupcake.flavor = data['flavor']
    cupcake.rating = data['rating']
    cupcake.size = data['size']
    cupcake.image = data['image']

    db.session.add(cupcake)
    db.session.commit()

    return jsonify(cupcake=cupcake.to_dict())

@app.route('/api/routes/<int:cupcake_id>',methods=['DELETE'])
def delete_cupcake(cupcake_id):
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    
    db.session.delete(cupcake)
    db.session.commit()

    return jsonify(message="Deleted")

# if __name__ == "__main__":
#     app.run(debug=True)