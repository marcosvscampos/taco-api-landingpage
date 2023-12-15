$(function(){
    $("#btn-register").on("click", registerUser)

    function registerUser(event){
        var url = "http://localhost:8000/api/users";
        
        event.preventDefault();

        var user = {
            name : $("#user-name-field").val(),
            email: $("#user-email-field").val()
        }

        var body = JSON.stringify(user)

        $.post({
            url: url,
            data: body,
            headers: {
                'Content-Type': 'application/json'
            },
            success: function(response){
                alert("Resposta do servidor: " + response.uri)
            },
            error: function(xhr, status, err){
                alert("Erro na chamada: " + err.responseText())
            }
        })
    }
});