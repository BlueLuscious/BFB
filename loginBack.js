import { Validations } from "./loginValidations.js"
const validator = new Validations

window.addEventListener('DOMContentLoaded', function () {

        // inputs
        const emailInput = document.getElementById('emailInputLogin')
        const passwordInput = document.getElementById('passwordInputLogin')
    
        // buttons
        const loginButton = document.getElementById('loginButton')
    
        // form
        const loginForm = document.getElementById('loginForm')
        const userData = JSON.parse(localStorage.getItem('userData'))
    
        // warnings
        const warningUserData = document.getElementById('warningUserData')
    
        loginButton.addEventListener('click', function (event) {
            event.preventDefault()
    
            const validatedEmail = validator.validateEmail(emailInput)
            const validatedPassword = validator.validatePassword(passwordInput)
    
            if (validatedEmail && validatedPassword) {
                if (emailInput.value == userData.email && passwordInput.value == userData.password) {
                    loginForm.submit()
                } else {
                    warningUserData.innerHTML = 'The user is not registered or the user data is invalid'
                }
            }
        }) // validate form and login
})
