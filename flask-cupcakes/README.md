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
3.  Page Errors: Ensure CORS response header values are valid. 
4.  in cupcakes.js I had to change basse_url link "localhost" to "127.0.0.1" const BASE_URL = "http://127.0.0.1:5000/api";


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
      - body: {
          "flavor": "apple",
          "size": "Medium",
          "rating": 4.5,
          "image": "https://example.com/apple-cupcake.jpg"
        }
    - [x] PATCH http://127.0.0.1:5000/api/cupcakes/5
        - {
            "flavor": "vanilla",
            "size": "small",
            "rating": 5,
            "image": "https://example.com/vanilla-cupcake.jpg"
          }
    - [x] DELETE http://127.0.0.1:5000/api/cupcakes/1
  - [ ] python3 -m unittest -v tests // need more fix

#### Export Settings:
export FLASK_APP=app
FLASK_DEBUG=True


##### TODO:
- [ ] Add tests to make sure that the GET/PATCH/DELETE routes return a 404 when the cupcake cannot be found.
- [ ] Add functionality for searching for cupcakes where you can type in a search term, submit to the backend and see a newly filtered list of cupcakes.
- [ ] Refactor your front-end code to be object-oriented using class methods to fetchAllCupcakes and createCupcakes and instance methods for updating and deleting cupcakes as well as searching for cupcakes.
- [ ] Refactor your HTML page to render a form created by WTForms.
- [ ] Enhance your search functionality so that you do not need to wait to submit to filter by flavors.
- [ ] Add functionality on the front-end to update a cupcake.
- [ ] Then add another table for ingredients. When you add or edit a cupcake, you can identify what ingredients you need for that cupcake. You should also have a page where you can add or edit ingredients.