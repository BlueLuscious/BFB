import { Validations } from './validations'
const validator = new Validations()

const emailInput = document.getElementById('emailInput')
const firstNameInput = document.getElementById('firstNameInput')
const lastNameInput = document.getElementById('lastNameInput')
const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const repeatPasswordInput = document.getElementById('repeatPasswordInput')
const returnToLogin = document.getElementById('returnToLogin')
const popUpText = document.getElementById('popUpText')
const firstPartForm = document.getElementById('firstPartForm')
const secondPartForm = document.getElementById('secondPartForm')
const backStepButtton = document.getElementById('backStep')
const nextStepButton = document.getElementById('nextStep')
const signInButton = document.getElementById('signIn')
const signUpForm = document.getElementById('signUpForm')


nextStepButton.addEventListener('click', function () {
    validator.validateEmail(emailInput)
    validator.validateFirstName(firstNameInput)
})

validator.validatePassword(passwordInput)
