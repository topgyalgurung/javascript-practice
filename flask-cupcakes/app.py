"""Flask app for Cupcakes"""

from flask import Flask, jsonify, request, render_template
from models import db, Cupcake, connect_db
from flask_cors import CORS

# configure extension
app = Flask(__name__)
#CORS(app)
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5500"}})

# basedir = os.path.abspath(os.path.dirname(__file__))
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///' + os.path.join(basedir, 'cupcakes.db')

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://topgyal:Topgyal*123@localhost/cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SECRET_KEY'] = "random-secret-key"

connect_db(app)


@app.route('/')
def root():
    message = "hello, world"
    return render_template("/templates/index.html", message = message)

@app.route('/api/cupcakes', methods=['GET'])
def get_all_cupcakes():
    #search_term = request.args.get('term', '')
    #query = Cupcake.query
    #if search_term:
     #   query = query.filter(Cupcake.flavor.ilike(f'%{search_term}%'))
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
        flavor=data.get('flavor'),
        rating=data.get('rating'),
        size=data.get('size'),
        image=data.get('image') or None
    )
    
    # staging
   # adds the new cupcake object to the current database session. It’s now staged to be inserted into the database.
    db.session.add(cupcake)

    # saves all the changes made during the session
    db.session.commit()
    # return HTTP status 201 created 
    return (jsonify(cupcake=cupcake.to_dict()),201)

# PART 3: Update & Delete Cupcakes 
@app.route('/api/cupcakes/<int:cupcake_id>', methods=['PATCH'])
def update_cupcake(cupcake_id):

    data= request.json
    # query the database using sqlalchemy 
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    cupcake.flavor = data['flavor']
    cupcake.rating = data['rating']
    cupcake.size = data['size']
    cupcake.image = data['image']

    db.session.add(cupcake)
    db.session.commit()

    return jsonify(cupcake=cupcake.to_dict())

@app.route('/api/cupcakes/<int:cupcake_id>',methods=['DELETE'])
def delete_cupcake(cupcake_id):
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    
    db.session.delete(cupcake)
    db.session.commit()

    return jsonify(message="Deleted"),200

if __name__ == "__main__":
    app.run(debug=True)