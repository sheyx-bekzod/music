from app import *


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/singerinfo')
def singer():
    return render_template('singer_info.html')