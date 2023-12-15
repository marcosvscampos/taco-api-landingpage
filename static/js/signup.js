$(function(){
    $("#btn-register").on("click", registerUser)

    function registerUser(event){
        var url = "https://httpbin.org/anything";
        
        event.preventDefault();

        var user = {
            name : $("#user-name-field").val(),
            email: $("#user-email-field").val()
        }

        $.post(url, user)
            .done(function(data) {
                alert("Resposta do servidor: " + data.url)
            })
            .fail(function(error){
                alert("Erro na chamada: " + error)
            })
    }
});