import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions
from werkzeug.security import check_password_hash, generate_password_hash
import datetime
from pytz import timezone
from helpers import apology, standings
import array

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
# db = SQL("sqlite:///nbastats.db")


@app.route("/")
def index():

    return render_template("index.html")

@app.route("/nick")
def nick():
    return render_template("index.html")

@app.route("/brandon")
def brandon():
    return render_template("index.html")

@app.route("/mike", methods=["GET"])
def mike():
    return render_template("index.html")


@app.route("/bill", methods=["GET"])
def bill():
    return render_template("index.html")


@app.route("/kippy", methods=["GET"])
def kippy():
    return render_template("index.html")


def errorhandler(e):
    """Handle error"""
    return apology(e.name, e.code)


# listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
