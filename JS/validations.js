const email = document.getElementById('emailInput')
const firstName = document.getElementById('firstNameInput')
const lastName = document.getElementById('lastNameInput')
const username = document.getElementById('usernameInput')
const password = document.getElementById('passwordInput')
const repeatPassword = document.getElementById('repeatPasswordInput')

const firstPartForm = document.getElementById('firstPartForm')
const secondPartForm = document.getElementById('secondPartForm')
const backStepButtton = document.getElementById('backStep')
const nextStepButton = document.getElementById('nextStep')
const signInButton = document.getElementById('signIn')

const warningEmailRegister = document.getElementById('warningEmailRegister')
const warningFirstNameRegister = document.getElementById('warningFirstNameRegister')
const warningLastNameRegister = document.getElementById('warningLastNameRegister')
const warningUsernameRegister = document.getElementById('warningUsernameRegister')
const warningPasswordRegister = document.getElementById('warningPasswordRegister')
const warningRepeatPasswordRegister = document.getElementById('warningRepeatPasswordRegister')

export class Validations {

    validateEmail(emailInput) {
        if (emailInput.value == '') {
            warningEmailRegister.innerHTML = 'The email is empty'
            email.style.borderBottomColor = 'rgb(195, 20, 20)'
        }
    } // validate email function

    validateFirstName(firstNameInput) {
        if (firstNameInput.value == '') {
            warningFirstNameRegister.innerHTML = 'The first name empty'
            firstName.style.borderBottomColor = 'rgb(195, 20, 20)'
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(firstNameInput.value)) {
            warningFirstNameRegister.innerHTML = 'Invalid value, only letters'
            firstName.style.borderBottomColor = 'rgb(195, 20, 20)'
        }
    } // validate firstname function

    validateLastName(lastNameInput) {
        if (lastNameInput.value == '') {
            warningLastNameRegister.innerHTML = 'The last name empty'
            lastName.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/^([a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(lastNameInput.value)) {
            warningLastNameRegister.innerHTML = 'Invalid value, only letters'
            lastName.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else {
            firstPartForm.style.display = 'none'
            secondPartForm.style.display = 'block'
            nextStepButton.style.display = 'none'
            signInButton.style.display = 'block'
            backStepButtton.disabled = false
            backStepButtton.style.cursor = 'pointer'
        }
    } // // validate lastname function & display form's second part

    validateUsername(usernameInput) {
        if (usernameInput.value == '') {
            warningUsernameRegister.innerHTML = 'The password is empty'
            username.style.borderBottomColor = 'rgb(195, 20, 20)'
        }
    } // validate username function

    validatePassword(passwordInput) {
        if (passwordInput.value == '') {
            warningPasswordRegister.innerHTML = 'The password is empty'
            password.style.borderBottomColor = 'rgb(195, 20, 20)'
        } else if (passwordInput.value.length < 6 || passwordInput.value.length > 12) {
            warningPasswordRegister.innerHTML = 'The Password must have between 6 to 12 characters'
            password.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/[A-Z]/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one capital letter'
            password.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/\d/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one number'
            password.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/[^a-zA-Z0-9]/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one special character'
            password.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        }
    } // validate password function

    validateRepeatPassword(repeatPasswordInput) {
        if (repeatPasswordInput.value == '') {
            warningRepeatPasswordRegister.innerHTML = 'The repeated password is empty'
            repeatPassword.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (repeatPasswordInput.value != passwordInput.value) {
            warningRepeatPasswordRegister.innerHTML = 'The passwords do not match'
            repeatPassword.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        }
    } // validate repeated password function

}