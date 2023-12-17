$(function(){
    $("#btn-register").on("click", registerUser)

    function redirectToWelcomePage(callbackURI) {
        var parts = callbackURI.split("/")
        var id = parts[parts.length - 1]
        redirectURI = "/sign-up/success?user=" + id;
        window.location.href = redirectURI;
    }

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
                redirectToWelcomePage(response.uri)
            },
            error: function(xhr, status, err){
                alert("Erro na chamada: " + err.responseText())
            }
        })
    }
});