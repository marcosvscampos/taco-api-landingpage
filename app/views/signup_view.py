from flask import Blueprint, render_template

bp = Blueprint('signup', __name__)

@bp.route("/sign-up")
def signup():
    return render_template("signup.html")

