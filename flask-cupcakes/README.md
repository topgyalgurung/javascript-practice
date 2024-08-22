# REST AND JSON APIs

### build a JSON API, test it using Insomnia, write integration tests, and build a HTML/JS frontend.

## Python env
- python3 -m venv env
- source env/bin/activate
- Install new libraries:
  - pip install library_name
- View installed library alternative, you can generate a text file listing all project dependencies 
  - pip freeze > requirements.txt
- Requirement file make easier for your developer friend to install dependencies without needing to install one by one. They can simply run: 
  - ~ pip install -r requirements.txt

# problem encountered:
without app_context: it gives runtime error. need to include app.app_context() before running db.drop_all() in seed.py


Execute:
- python3 seed.py

Export Settings:
export FLASK_APP=app
FLASK_DEBUG=True