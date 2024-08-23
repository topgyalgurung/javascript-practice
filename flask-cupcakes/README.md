# REST AND JSON APIs

### Build a JSON API, test it using Insomnia, write integration tests, and build a HTML/JS frontend.

## SETTING ENVIRONMENT AND INSTALL DEPENDENCIES 
- create virtual env:
  -  $python3 -m venv env
- activate virtual en:  
  - $source env/bin/activate
- Install new libraries:
  - $pip install library_name
- View installed library alternative, you can generate a text file listing all project dependencies 
  - $pip freeze > requirements.txt
- Requirement file make easier for your developer friend to install dependencies without needing to install one by one. They can simply run: 
  - $pip install -r requirements.txt

# Problem encountered notes:
1. without app_context: it gives runtime error. need to include app.app_context() before running db.drop_all() in seed.py
2.  For POST method: flavor = data.get['flavor'], KeyError: 'flavor'. This was due to accesing a key in the data dictionary incorrect way. was using data['flavor'] instead of data.get('flavor') - to access a value safely from a dictionary


#### Steps:
- $ source env/bin/activate
- make a database called cupcakes inside postgresql. you can use postico or postgres gui 
- run $ python3 seed.py to add a few sample cupcakes to your database.
- Test that these routes work in Insomnia.
  - flask --app app run
  - Test: 
    - [x] GET http://127.0.0.1:5000/
    - [x] GET http://127.0.0.1:5000/api/cupcakes
    - [x] GET http://127.0.0.1:5000/api/cupcakes/1
    - [x] POST http://127.0.0.1:5000/api/cupcakes/

#### Export Settings:
export FLASK_APP=app
FLASK_DEBUG=True