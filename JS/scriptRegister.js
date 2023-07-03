window.addEventListener('DOMContentLoaded', function () {

    const emailInput = document.getElementById('emailInput')
    const firstNameInput = document.getElementById('firstNameInput')
    const lastNameInput = document.getElementById('lastNameInput')
    const usernameInput = document.getElementById('usernameInput')
    const passwordInput = document.getElementById('passwordInput')
    const repeatPasswordInput = document.getElementById('repeatPasswordInput')
    const inputs = [emailInput, firstNameInput, lastNameInput, usernameInput, passwordInput, repeatPasswordInput]
    const returnToLogin = document.getElementById('returnToLogin')
    const popUpText = document.getElementById('popUpText')
    const firstPartForm = document.getElementById('firstPartForm')
    const secondPartForm = document.getElementById('secondPartForm')
    const backStep = document.getElementById('backStep')
    const nextStep = document.getElementById('nextStep')
    const signIn = document.getElementById('signIn')

    // FRONT
    inputs.forEach(function(input, index) {
        input.addEventListener('click', function () {
            if (index == 0) {
                this.value = ''
            } else if (index == 1) {
                this.value = ''
            } else if (index == 2) {
                this.value = ''
            } else if (index == 3) {
                this.value = ''
            } else if (index == 4) {
                this.value = ''
            } else if (index == 5) {
                this.value = ''
            }
       }) // change input's value to blank
       input.addEventListener('focus', function () {
            if (index == 0) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            } else if (index == 1) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            } else if (index == 2) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            } else if (index == 3) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            } else if (index == 4) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            } else if (index == 5) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            }
       }) // change input's outline color
    })

    returnToLogin.addEventListener('click' , function () {
        window.location.href = 'login.html'
    }) // return login-button redirects to login.html

    returnToLogin.addEventListener('mouseover', function () {
        popUpText.style.visibility = 'visible'
        popUpText.style.opacity = 1
    }) // show popup by mouseover

    returnToLogin.addEventListener('mouseout', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0
    }) // hide popup by mouseout

    nextStep.addEventListener('click', function () {
        firstPartForm.style.display = 'none'
        secondPartForm.style.display = 'block'
        this.style.display = 'none'
        signIn.style.display = 'block'
        backStep.disabled = false
        backStep.style.cursor = 'pointer'
    }) // next step button

    backStep.addEventListener('click', function () {
        firstPartForm.style.display = 'block'
        secondPartForm.style.display = 'none'
        nextStep.style.display = 'block'
        signIn.style.display = 'none'
        this.disabled = true
        this.style.cursor = 'not-allowed'
    }) // back step button








    // BACK
/*     // validar formulario
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

        document.getElementById('sugnUpForm').submit();
    }) */

})
