import { Validations } from './validations'

window.addEventListener('DOMContentLoaded', function () {

    const emailInput = document.getElementById('emailInput')
    const firstNameInput = document.getElementById('firstNameInput')
    const lastNameInput = document.getElementById('lastNameInput')
    const usernameInput = document.getElementById('usernameInput')
    const passwordInput = document.getElementById('passwordInput')
    const repeatPasswordInput = document.getElementById('repeatPasswordInput')

    const nextStepButton = document.getElementById('nextStep')
    const signInButton = document.getElementById('signIn')
    const signUpForm = document.getElementById('signUpForm')

    const warningEmailRegister = document.getElementById('warningEmailRegister')
    const warningFirstNameRegister = document.getElementById('warningFirstNameRegister')
    const warningLastNameRegister = document.getElementById('warningLastNameRegister')
    const warningUsernameRegister = document.getElementById('warningUsernameRegister')
    const warningPasswordRegister = document.getElementById('warningPasswordRegister')
    const warningRepeatPasswordRegister = document.getElementById('warningRepeatPasswordRegister')

    const validator = new Validations()

    nextStepButton.addEventListener('click', function () {
        validator.validateEmail(emailInput.value, warningEmailRegister)
        validator.validateFirstName(firstNameInput.value, warningFirstNameRegister)
        validator.validateLastName(lastNameInput.value, warningLastNameRegister)
    })

    signInButton.addEventListener('click', function (event) {
        event.preventDefault()

        validator.validateUsername(usernameInput.value, warningUsernameRegister)
        validator.validatePassword(passwordInput.value, warningPasswordRegister)
        validator.validateRepeatPassword(repeatPasswordInput.value, warningRepeatPasswordRegister)

        signUpForm.submit()
    })

})
