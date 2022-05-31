from app import *
from app import app


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/singer_info')
def singer():
    return render_template('singer_info.html')
