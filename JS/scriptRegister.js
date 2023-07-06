window.addEventListener('DOMContentLoaded', function () {

    // inputs
    const emailInput = document.getElementById('emailInput')
    const firstNameInput = document.getElementById('firstNameInput')
    const lastNameInput = document.getElementById('lastNameInput')
    const usernameInput = document.getElementById('usernameInput')
    const passwordInput = document.getElementById('passwordInput')
    const repeatPasswordInput = document.getElementById('repeatPasswordInput')
    const inputs = [emailInput, firstNameInput, lastNameInput, usernameInput, passwordInput, repeatPasswordInput]

    // pop-up
    const returnToLogin = document.getElementById('returnToLogin')
    const popUpText = document.getElementById('popUpText')

    //form parts
    const firstPartForm = document.getElementById('firstPartForm')
    const secondPartForm = document.getElementById('secondPartForm')

    // buttons
    const backStepButtton = document.getElementById('backStep')
    const nextStepButton = document.getElementById('nextStep')
    const signInButton = document.getElementById('signIn')
    const signUpForm = document.getElementById('signUpForm')

    // warnings
    const warningEmailRegister = document.getElementById('warningEmailRegister')
    const warningFirstNameRegister = document.getElementById('warningFirstNameRegister')
    const warningLastNameRegister = document.getElementById('warningLastNameRegister')
    const warningUsernameRegister = document.getElementById('warningUsernameRegister')
    const warningPasswordRegister = document.getElementById('warningPasswordRegister')
    const warningRepeatPasswordRegister = document.getElementById('warningRepeatPasswordRegister')

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

    // BACK
    nextStepButton.addEventListener('click', function () {
        if (emailInput.value == '') {
            warningEmailRegister.innerHTML = 'The email is empty'
            emailInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!emailInput.value.endsWith('@gmail.com')) {
            warningEmailRegister.innerHTML = 'The email is invalid'
            emailInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        }

        // validate email

        if (firstNameInput.value == '') {
            warningFirstNameRegister.innerHTML = 'The first name empty'
            firstNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(firstNameInput.value)) {
            warningFirstNameRegister.innerHTML = 'Invalid value, only letters'
            firstNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } // validate first name

        if (lastNameInput.value == '') {
            warningLastNameRegister.innerHTML = 'The last name empty'
            lastNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/^([a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(lastNameInput.value)) {
            warningLastNameRegister.innerHTML = 'Invalid value, only letters'
            lastNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else {
            firstPartForm.style.display = 'none'
            secondPartForm.style.display = 'block'
            this.style.display = 'none'
            signInButton.style.display = 'block'
            backStepButtton.disabled = false
            backStepButtton.style.cursor = 'pointer'
        } // validate last name & display form's second part
    }) // validate form's first part

    signInButton.addEventListener('click', function (event) {
        event.preventDefault()

        if (usernameInput.value == '') {
            warningUsernameRegister.innerHTML = 'The username is empty'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (usernameInput.value.length < 10 || usernameInput.value.length > 20) {
            warningUsernameRegister.innerHTML = 'The username must have between 10 to 20 characters'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/^[A-Z]/.test(usernameInput.value)) {
            warningUsernameRegister.innerHTML = 'The username must start with a capital letter'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/^[A-Za-z0-9]*$/.test(usernameInput.value)) {
            warningUsernameRegister.innerHTML = 'The username must not have a special character'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } // validate username

        if (passwordInput.value == '') {
            warningPasswordRegister.innerHTML = 'The password is empty'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (passwordInput.value.length < 6 || passwordInput.value.length > 12) {
            warningPasswordRegister.innerHTML = 'The Password must have between 6 to 12 characters'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/[A-Z]/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one capital letter'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/\d/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one number'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/[^a-zA-Z0-9]/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one special character'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } // validate password

        if (repeatPasswordInput.value == '') {
            warningRepeatPasswordRegister.innerHTML = 'The repeated password is empty'
            repeatPasswordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (repeatPasswordInput.value != passwordInput.value) {
            warningRepeatPasswordRegister.innerHTML = 'The passwords do not match'
            repeatPasswordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } // validate repeated password

        signUpForm.submit()
    }) // validate form's second part & send register

})
