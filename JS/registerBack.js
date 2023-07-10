import { Validations } from './formValidations.js'
const validator = new Validations()

window.addEventListener('DOMContentLoaded', function () {

    // inputs
    const emailInput = document.getElementById('emailInputRegister')
    const firstNameInput = document.getElementById('firstNameInputRegister')
    const lastNameInput = document.getElementById('lastNameInputRegister')
    const usernameInput = document.getElementById('usernameInputRegister')
    const passwordInput = document.getElementById('passwordInputRegister')
    const repeatPasswordInput = document.getElementById('repeatPasswordInputRegister')

    // form parts
    const firstPartForm = document.getElementById('firstPartForm')
    const secondPartForm = document.getElementById('secondPartForm')
    const signUpForm = document.getElementById('signUpForm')

    // buttons
    const backStepButtton = document.getElementById('backStepButton')
    const nextStepButton = document.getElementById('nextStepButton')
    const signInButton = document.getElementById('signInButton')

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
            backStepButtton.style.cursor = 'pointer'
        }

        const userData = {
            email: emailInput.value,
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
        }
        localStorage.setItem('userData', JSON.stringify(userData))

    }) // validate form's first part

    signInButton.addEventListener('click', function (event) {
        event.preventDefault()

        const validatedUsername = validator.validateUsername(usernameInput)
        const validatedPassword = validator.validatePassword(passwordInput)
        const validatedRepeatPassword = validator.validateRepeatPassword(repeatPasswordInput, passwordInput)

        if (validatedUsername && validatedPassword && validatedRepeatPassword) {

            // Save data to localStorage
            const userData = JSON.parse(localStorage.getItem('userData'))
            userData.username = usernameInput.value
            localStorage.setItem('userData', JSON.stringify(userData))

            // Set the success message in sessionStorage
            sessionStorage.setItem('registrationMessage', 'The registration was successful')
            // Redirect to login.html
            window.location.href = 'login.html'
        }
    }) // validate form's second part & send register
})
