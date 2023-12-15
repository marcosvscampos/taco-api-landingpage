from flask import Flask

from app.views import main_view, signup_view

app = Flask(__name__)

app.register_blueprint(main_view.bp)
app.register_blueprint(signup_view.bp)

if(__name__ == "__main__"):
    app.run(debug=True)

