$(document).ready(function () {
    $('.entrar').click(function () {
        let nome = $("#usuario").val();
        let email = $("#email").val();
        let senha = $("#senha").val();

        if (nome.trim() == "" || email.trim() == "" || senha.trim() == "") {
            $(".mensagem").text("Por favor, preencha todos os campos!");
        } else {
            $('.mensagem').text("Obrigado!")
        }
    })
});