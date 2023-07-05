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
    const backStepButtton = document.getElementById('backStep')
    const nextStepButton = document.getElementById('nextStep')
    const signInButton = document.getElementById('signIn')

    // FRONT
    inputs.forEach(function (input, index) {
        input.addEventListener('click', function () {
            if (index == 0) {
                this.value = ''
                this.style.borderBottomColor = ''
                warningEmailRegister.innerHTML = ''
            } else if (index == 1) {
                this.value = ''
                this.style.borderBottomColor = ''
                warningFirstNameRegister.innerHTML = ''
            } else if (index == 2) {
                this.value = ''
                this.style.borderBottomColor = ''
                warningLastNameRegister.innerHTML = ''
            } else if (index == 3) {
                this.value = ''
                this.style.borderBottomColor = ''
                warningUsernameRegister.innerHTML = ''
            } else if (index == 4) {
                this.value = ''
                this.style.borderBottomColor = ''
                warningPasswordRegister.innerHTML = ''
            } else if (index == 5) {
                this.value = ''
                this.style.borderBottomColor = ''
                warningRepeatPasswordRegister.innerHTML = ''
            }
        }) // change warning's content & input's value to blank

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

    returnToLogin.addEventListener('click', function () {
        window.location.href = 'login.html'
    }) // return login-button redirects to login.html

    returnToLogin.addEventListener('mouseover', function () {
        popUpText.style.visibility = 'visible'
        popUpText.style.opacity = 1
    }) // show return-login popup by mouseover

    returnToLogin.addEventListener('mouseout', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0
    }) // hide return-login popup by mouseout

    backStepButtton.addEventListener('click', function () {
        firstPartForm.style.display = 'block'
        secondPartForm.style.display = 'none'
        nextStepButton.style.display = 'block'
        signInButton.style.display = 'none'
        this.disabled = true
        this.style.cursor = 'not-allowed'
    }) // back step button
})
