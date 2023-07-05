import { Validations } from './validations'

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
    validator.validateEmail(emailInput, warningEmailRegister)
    validator.validateFirstName(firstNameInput, warningFirstNameRegister)
    validator.validateLastName(lastNameInput, warningLastNameRegister)
})

signInButton.addEventListener('click', function () {
    validator.validateUsername(usernameInput, warningUsernameRegister)
    validator.validatePassword(passwordInput, warningPasswordRegister)
    validator.validateRepeatPassword(repeatPasswordInput, warningRepeatPasswordRegister)

    signUpForm.submit()
})




