from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from packages.models import *

app = Flask(__name__)
db = setup(app)
migrate = Migrate(app, db)

from packages.routes import *
from packages.config import *
from packages.models import *
from packages.request import *

if __name__ == 'main':
    app.run()
