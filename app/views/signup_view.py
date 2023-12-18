from flask import Blueprint, render_template, request
from app.service import user_service
from app.dto.user_client_dto import UserClientDTO


bp = Blueprint('signup', __name__)

@bp.route("/sign-up")
def signup():
    return render_template("signup.html")

@bp.route("/sign-up/success", methods=["GET"])
def signup_success():
    error_message:str = ""
    user_id:str = request.args.get("user")
    if (user_id is None):
        error_message = "Parâmetros obrigatórios não informados ou inválidos"
        return render_template("error.html", message=error_message)

    response:UserClientDTO = user_service.get_user_by_id(user_id=user_id)

    if(response is None):
        error_message = f"Acesso não autorizado - Usuário não encontrado"
        return render_template("error.html", message=error_message)

    return render_template("welcome.html", name=response.name, email=response.email)