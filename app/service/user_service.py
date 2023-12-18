from app.dto.user_client_dto import UserClientDTO

import requests

def get_user_by_id(user_id: str) -> UserClientDTO:
    url = f"http://localhost:8000/api/users/{user_id}"
    
    user_data = requests.get(url)
    response = user_data.json()
    
    if("detail" in response):
        return None

    return UserClientDTO(id=response["id"], name=response["name"], email=response["email"])