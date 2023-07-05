import { Validations } from './validations'
const validator = new Validations()

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


    nextStepButton.addEventListener('click', function () {
        validator.validateEmail(emailInput.value)
        validator.validateFirstName(firstNameInput.value)
        validator.validateLastName(lastNameInput.value)
    })

    signInButton.addEventListener('click', function () {
        validator.validateUsername(usernameInput.value)
        validator.validatePassword(passwordInput.value)
        validator.validateRepeatPassword(repeatPasswordInput.value)
        
        signUpForm.submit()
    })

})



