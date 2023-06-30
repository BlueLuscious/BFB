window.addEventListener('DOMContentLoaded', function () {

    const signUpButton = document.getElementById('signUpButton')
    const passwordInput = document.getElementById('passwordInput')
    const showPasswordButton = document.getElementById('showPasswordButton')
    const logInButton = document.getElementById('logInButton')
    const popUpText = document.getElementById('popUpText')
    let clickCount = 0
    const contentPopUpText = ['Show Password', 'Hide Password']

    // redireccion a pag. de registro
    signUpButton.addEventListener('click', function () {
        window.location.href = 'register.html'
    })

    // ojo/boton mostrar contraseña
    showPasswordButton.addEventListener('click', function () {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text'
            $('.icon').removeClass('bi bi-eye-fill').addClass('bi bi-eye-slash-fill')
        } else {
            passwordInput.type = 'password'
            $('.icon').removeClass('bi bi-eye-slash-fill').addClass('bi bi-eye-fill')
        }
    })


    // mostrar ventana emergente
    showPasswordButton.addEventListener('mouseover', function () {
        popUpText.style.visibility = 'visible'
        popUpText.style.opacity = 1
    })

    // ocultar ventana emergente
    showPasswordButton.addEventListener('mouseout', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0
    })

    // ocultar ventana emergente mediante click
    showPasswordButton.addEventListener('click', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0;
        clickCount++
        let contentIndex = clickCount % contentPopUpText.length
        popUpText.innerHTML = contentPopUpText[contentIndex]
    })





})

/*register.html*/
/* function redirectToRegister2() {
    window.location.href = "register2.html";
} */



