/*index.html*/
window.addEventListener('DOMContentLoaded', function () {

    let signUpButton = document.getElementById('signUpButton')
    let passwordInput = document.getElementById('passwordInput')
    let showPasswordButton = document.getElementById('showPasswordButton')
    let logInButton = document.getElementById('logInButton')
    let popUpText = document.getElementById('popUpText')
    let clickCount = 0
    let contentPopUpText = ['Show Password', 'Hide Password']

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

    // validar formulario
    logInButton.addEventListener('click', function (event) {
        event.preventDefault()
        let password = passwordInput.value
        if (password.length < 6 || password.length > 12) {
            alert('La contraseña debe tener entre 6 y 12 caracteres.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            alert('La contraseña debe contener al menos una letra mayúscula.');
            return;
        }
        if (!/\d/.test(password)) {
            alert('La contraseña debe contener al menos un dígito.');
            return;
        }
        if (!/[^a-zA-Z0-9]/.test(password)) {
            alert('La contraseña debe contener al menos un carácter especial.');
            return;
        }

        // agregar otras validaciones

        document.getElementById('loginForm').submit();
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




    /*register.html*/
    function redirectToRegister2() {
        window.location.href = "register2.html";
    }
})



