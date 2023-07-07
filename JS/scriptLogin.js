window.addEventListener('DOMContentLoaded', function () {

    // inputs
    const emailInput = document.getElementById('emailInputLogin')
    const passwordInput = document.getElementById('passwordInputLogin')
    const inputs = [emailInput, passwordInput]

    // pop-up
    const showPasswordButton = document.getElementById('showPasswordButton')
    const popUpText = document.getElementById('showPasswordPopUp')
    let clickCount = 0
    const contentPopUpText = ['Show Password', 'Hide Password']

    // buttons
    const loginButton = document.getElementById('loginButton')
    const signUpButton = document.getElementById('signUpButton')

    // warnings
    const successfulRegister = document.getElementById('successfulRegister')


    // FRONT
    signUpButton.addEventListener('click', function () {
        window.location.href = 'register.html'
    }) // sign up bottom redirects to register.html

    inputs.forEach(function (input, index) {
        input.addEventListener('click', function () {
            if (index == 0) {
                this.value = ''
                successfulRegister.innerHTML = ''
            } else if (index == 1) {
                this.value = ''
                successfulRegister.innerHTML = ''
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
    // mediante loginButton validar si los datos existen en el servidor



/*     // Get the message from sessionStorage
    const message = sessionStorage.getItem('registrationMessage');

    // Write the message in the div if it exists
    if (message) {
        successfulRegister.innerHTML = message;
        console.log('Message:', message)
    }

    // Clear the message from sessionStorage
    sessionStorage.removeItem('registrationMessage')



    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if user data exists
    if (userData) {
        console.log('User Data:', userData);
    } */


})
