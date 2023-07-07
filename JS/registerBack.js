import { Validations } from './formValidations.js'
const validator = new Validations()

window.addEventListener('DOMContentLoaded', function () {

    // inputs
    const emailInput = document.getElementById('emailInput')
    const firstNameInput = document.getElementById('firstNameInput')
    const lastNameInput = document.getElementById('lastNameInput')
    const usernameInput = document.getElementById('usernameInput')
    const passwordInput = document.getElementById('passwordInput')
    const repeatPasswordInput = document.getElementById('repeatPasswordInput')

    // form parts
    const firstPartForm = document.getElementById('firstPartForm')
    const secondPartForm = document.getElementById('secondPartForm')
    const signUpForm = document.getElementById('signUpForm')

    // buttons
    const backStepButtton = document.getElementById('backStep')
    const nextStepButton = document.getElementById('nextStep')
    const signInButton = document.getElementById('signIn')

    nextStepButton.addEventListener('click', function () {
        const validatedEmail = validator.validateEmail(emailInput)
        const validatedFirstName = validator.validateFirstName(firstNameInput)
        const validatedLastName = validator.validateLastName(lastNameInput)

        if (validatedEmail && validatedFirstName && validatedLastName) {
            firstPartForm.style.display = 'none'
            secondPartForm.style.display = 'block'
            nextStepButton.style.display = 'none'
            signInButton.style.display = 'block'
            backStepButtton.disabled = false
            backStepButtton.style.cursor = 'pointer's
        }
    }) // validate form's first part

    signInButton.addEventListener('click', function (event) {
        event.preventDefault()

        const validatedUsername = validator.validateUsername(usernameInput)
        const validatedPassword = validator.validatePassword(passwordInput)
        const validatedRepeatPassword = validator.validateRepeatPassword(repeatPasswordInput, passwordInput)

        if (validatedUsername && validatedPassword && validatedRepeatPassword) {
            signUpForm.submit()
        }
    }) // validate form's second part & send register
})
