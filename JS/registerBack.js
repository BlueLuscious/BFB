import { Validations } from './formValidations.js'
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

const firstPartForm = document.getElementById('firstPartForm')
const secondPartForm = document.getElementById('secondPartForm')
const backStepButtton = document.getElementById('backStep')

nextStepButton.addEventListener('click', function () {
    if (emailInput, firstNameInput, lastNameInput){
        validator.validateEmail(emailInput)
        validator.validateFirstName(firstNameInput)
        validator.validateLastName(lastNameInput)
    } else {
        firstPartForm.style.display = 'none'
        secondPartForm.style.display = 'block'
        nextStepButton.style.display = 'none'
        signInButton.style.display = 'block'
        backStepButtton.disabled = false
        backStepButtton.style.cursor = 'pointer'
    }
}) // validate form's first part

signInButton.addEventListener('click', function (event) {
    event.preventDefault()

    validator.validateUsername(usernameInput)
    validator.validatePassword(passwordInput)
    validator.validateRepeatPassword(repeatPasswordInput, passwordInput)

    signUpForm.submit()
}) // validate form's second part & send register
