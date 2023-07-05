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
    const signUpForm = document.getElementById('signUpForm')

    // FRONT
    inputs.forEach(function (input, index) {
        input.addEventListener('click', function () {
            if (index == 0) {
                this.value = ''
                warningEmailRegister.innerHTML = ''
            } else if (index == 1) {
                this.value = ''
                warningFirstNameRegister.innerHTML = ''
            } else if (index == 2) {
                this.value = ''
                warningLastNameRegister.innerHTML = ''
            } else if (index == 3) {
                this.value = ''
                warningUsernameRegister.innerHTML = ''
            } else if (index == 4) {
                this.value = ''
                warningPasswordRegister.innerHTML = ''
            } else if (index == 5) {
                this.value = ''
                warningRepeatPasswordRegister.innerHTML = ''
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

/*     nextStepButton.addEventListener('click', function () {
        firstPartForm.style.display = 'none'
        secondPartForm.style.display = 'block'
        this.style.display = 'none'
        signIn.style.display = 'block'
        backStep.disabled = false
        backStep.style.cursor = 'pointer'
    }) */ // next step button



    // BACK

    // import Validations from './validations'

    const warningEmailRegister = document.getElementById('warningEmailRegister')
    const warningFirstNameRegister = document.getElementById('warningFirstNameRegister')
    const warningLastNameRegister = document.getElementById('warningLastNameRegister')
    const warningUsernameRegister = document.getElementById('warningUsernameRegister')
    const warningPasswordRegister = document.getElementById('warningPasswordRegister')
    const warningRepeatPasswordRegister = document.getElementById('warningRepeatPasswordRegister')

    nextStepButton.addEventListener('click', function () {
        if (emailInput.value == '') {
            warningEmailRegister.innerHTML = 'Empty email'
        }
        if (firstNameInput.value == '') {
            warningFirstNameRegister.innerHTML = 'Empty first name'
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(firstNameInput.value)) {
            warningFirstNameRegister.innerHTML = 'Invalid value, only letters'
        }
        if (lastNameInput.value == '') {
            warningLastNameRegister.innerHTML = 'Empty last name'
        } else if (!/^([a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(lastNameInput.value)) {
            warningLastNameRegister.innerHTML = 'Invalid value, only letters'
            return
        } else {
                firstPartForm.style.display = 'none'
                secondPartForm.style.display = 'block'
                this.style.display = 'none'
                signIn.style.display = 'block'
                backStep.disabled = false
                backStep.style.cursor = 'pointer'
        }
    })


    // validar formulario
    signInButton.addEventListener('click', function (event) {
        event.preventDefault()



        const password = passwordInput.value
        if (password.length < 6 || password.length > 12) {
            alert('La contraseña debe tener entre 6 y 12 caracteres.');
            return;
        } else if (!/[A-Z]/.test(password)) {
            alert('La contraseña debe contener al menos una letra mayúscula.');
            return;
        } else if (!/\d/.test(password)) {
            alert('La contraseña debe contener al menos un dígito.');
            return;
        } else if (!/[^a-zA-Z0-9]/.test(password)) {
            alert('La contraseña debe contener al menos un carácter especial.');
            return;
        }

        // agregar otras validaciones

        signUpForm.submit();
    })

})
