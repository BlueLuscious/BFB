window.addEventListener('DOMContentLoaded', function () {

    const emailInput = document.getElementById('emailInput')
    const passwordInput = document.getElementById('passwordInput')
    const inputs = [emailInput, passwordInput]
    const showPasswordButton = document.getElementById('showPasswordButton')
    const popUpText = document.getElementById('popUpText')
    let clickCount = 0
    const contentPopUpText = ['Show Password', 'Hide Password']
    const logInButton = document.getElementById('logInButton')
    const signUpButton = document.getElementById('signUpButton')

    // FRONT
    signUpButton.addEventListener('click', function () {
        window.location.href = 'register.html'
    }) // sign up bottom redirects to register.html

    inputs.forEach(function (input, index) {
        input.addEventListener('click', function () {
            if (index == 0) {
                this.value = ''
            } else if (index == 1) {
                this.value = ''
            }
        }) // change input's value to blank
        input.addEventListener('focus', function () {
            if (index == 0) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            } else if (index == 1) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            }
        }) // change input's outline color
    }) 

    showPasswordButton.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'
            $('.icon').removeClass('bi bi-eye-fill').addClass('bi bi-eye-slash-fill')
        } else {
            passwordInput.type = 'password'
            $('.icon').removeClass('bi bi-eye-slash-fill').addClass('bi bi-eye-fill')
        }
    }) // eye bottom show/hide password

    showPasswordButton.addEventListener('mouseover', function () {
        popUpText.style.visibility = 'visible'
        popUpText.style.opacity = 1
    }) // show show/hide-password popup by mouseover

    showPasswordButton.addEventListener('mouseout', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0
    }) // hide show/hide password popup by mouseout

    showPasswordButton.addEventListener('click', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0
        clickCount++
        let contentIndex = clickCount % contentPopUpText.length
        popUpText.innerHTML = contentPopUpText[contentIndex]
    }) // hide show/hide-password popup by click

    // BACK
    // mediante logInButton validar si los datos existen en el servidor
})
