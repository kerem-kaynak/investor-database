import json
import requests
from helpers import transform_visible_data
from flask_cors import CORS

from flask import Flask, render_template

app = Flask(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/api/investors")
def get_investors():
    investors = transform_visible_data()
    data = json.dumps(investors)
    return data

if __name__ == "__main__":
    app.run(debug=True)
