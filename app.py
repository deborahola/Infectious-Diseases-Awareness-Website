# ---- YOUR APP STARTS HERE ----
# -- Import section --
from flask import Flask
from flask import render_template
# from flask import request

# -- Initialization section --
app = Flask(__name__)

# -- Routes section --
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/immunization')
def immunization():
    return render_template("immunization.html")

@app.route('/action')
def action():
    return render_template("action.html")

@app.route('/quiz')
def quiz():
    return render_template("quiz.html")

@app.route('/about')
def about():
    return render_template("about.html")

app.run(host='0.0.0.0', port=81, debug=True)