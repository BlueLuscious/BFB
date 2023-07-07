window.addEventListener('DOMContentLoaded', function () {

    // inputs
    const emailInput = document.getElementById('emailInputRegister')
    const firstNameInput = document.getElementById('firstNameInputRegister')
    const lastNameInput = document.getElementById('lastNameInputRegister')
    const usernameInput = document.getElementById('usernameInputRegister')
    const passwordInput = document.getElementById('passwordInputRegister')
    const repeatPasswordInput = document.getElementById('repeatPasswordInputRegister')
    const inputs = [emailInput, firstNameInput, lastNameInput, usernameInput, passwordInput, repeatPasswordInput]

    // pop-up
    const returnToLogin = document.getElementById('returnToLogin')
    const popUpText = document.getElementById('returnLoginPopUp')

    // form parts
    const firstPartForm = document.getElementById('firstPartForm')
    const secondPartForm = document.getElementById('secondPartForm')

    // buttons
    const backStepButtton = document.getElementById('backStepButton')
    const nextStepButton = document.getElementById('nextStepButton')
    const signInButton = document.getElementById('signInButton')

    // warnings
    const warningEmailRegister = document.getElementById('warningEmailRegister')
    const warningFirstNameRegister = document.getElementById('warningFirstNameRegister')
    const warningLastNameRegister = document.getElementById('warningLastNameRegister')
    const warningUsernameRegister = document.getElementById('warningUsernameRegister')
    const warningPasswordRegister = document.getElementById('warningPasswordRegister')
    const warningRepeatPasswordRegister = document.getElementById('warningRepeatPasswordRegister')

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
