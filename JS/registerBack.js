import { Validations } from './validations.js'
const validator = new Validations()

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
    validator.validateEmail(emailInput)
    validator.validateFirstName(firstNameInput)
    validator.validateLastName(lastNameInput)
}) // validate form's first part

signInButton.addEventListener('click', function () {
    validator.validateUsername(usernameInput)
    validator.validatePassword(passwordInput)
    validator.validateRepeatPassword(repeatPasswordInput, passwordInput)

    signUpForm.submit()
}) // validate form's second part & send register
