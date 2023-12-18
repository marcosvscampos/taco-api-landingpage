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
                data = xhr.responseJSON
                $.toast({
                    heading: 'Erro',
                    text: data.detail,
                    allowToastClose: true,
                    hideAfter: 3000,
                    loader: false,
                    position: 'bottom-right',
                    bgColor: '#D30606',
                    textColor: '#F4F4F8',
                    icon: 'warning',
                    stack: 3
                })
            }
        })
    }
});