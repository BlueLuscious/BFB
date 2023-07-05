import { Validations } from './validations.js'

const emailInput = document.getElementById('emailInput')
const firstNameInput = document.getElementById('firstNameInput')
const lastNameInput = document.getElementById('lastNameInput')
const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const repeatPasswordInput = document.getElementById('repeatPasswordInput')

const nextStepButton = document.getElementById('nextStep')
const signInButton = document.getElementById('signIn')
const signUpForm = document.getElementById('signUpForm')

const validator = new Validations()

nextStepButton.addEventListener('click', function () {
    validator.validateEmail(emailInput)
    validator.validateFirstName(firstNameInput)
    validator.validateLastName(lastNameInput)
})

signInButton.addEventListener('click', function (event) {
    event.preventDefault()

    validator.validateUsername(usernameInput)
    validator.validatePassword(passwordInput)
    validator.validateRepeatPassword(repeatPasswordInput, passwordInput)

    signUpForm.submit()
})
