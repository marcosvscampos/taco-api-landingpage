from flask import Blueprint, render_template, request
from app.service import user_service
from app.dto.user_client_dto import UserClientDTO


bp = Blueprint('signup', __name__)

@bp.route("/sign-up")
def signup():
    return render_template("signup.html")

@bp.route("/sign-up/success", methods=["GET"])
def signup_success():
    user_id:str = request.args.get("user")
    if (user_id is None):
        return "<h1>Acesso não autorizado</h1>"

    response:UserClientDTO = user_service.get_user_by_id(user_id=user_id)

    if(response is None):
        return f"<h1>Accesso não autorizado - Usuário ID {user_id} não encontrado</h1>"

    return render_template("welcome.html", name=response.name, email=response.email)