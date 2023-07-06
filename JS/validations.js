export class Validations {
    validateEmail(emailInput) {
        if (emailInput.value == '') {
            warningEmailRegister.innerHTML = 'The email is empty'
            emailInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (emailInput.value) {
            const domains = ['@gmail.com', '@yahoo.com', '@outlook.com']
            let isValid = false

            domains.forEach(function (domain) {
                if (emailInput.value.endsWith(domain)) {
                    isValid = true
                }
            })

            if (!isValid) {
                warningEmailRegister.innerHTML = 'The email is invalid'
                emailInput.style.borderBottomColor = 'rgb(195, 20, 20)'
                return
            }
        }
    } // validate email function

    validateFirstName(firstNameInput) {
        if (firstNameInput.value == '') {
            warningFirstNameRegister.innerHTML = 'The first name empty'
            firstNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(firstNameInput.value)) {
            warningFirstNameRegister.innerHTML = 'Invalid value, only letters'
            firstNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        }
    } // validate firstname function

    validateLastName(lastNameInput) {
        const firstPartForm = document.getElementById('firstPartForm')
        const secondPartForm = document.getElementById('secondPartForm')
        const backStepButtton = document.getElementById('backStep')
        const nextStepButton = document.getElementById('nextStep')
        const signInButton = document.getElementById('signIn')
        if (lastNameInput.value == '') {
            warningLastNameRegister.innerHTML = 'The last name empty'
            lastNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/^([a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(lastNameInput.value)) {
            warningLastNameRegister.innerHTML = 'Invalid value, only letters'
            lastNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else {
            firstPartForm.style.display = 'none'
            secondPartForm.style.display = 'block'
            nextStepButton.style.display = 'none'
            signInButton.style.display = 'block'
            backStepButtton.disabled = false
            backStepButtton.style.cursor = 'pointer'
        }
    } // validate lastname function & display form's second part

    validateUsername(usernameInput) {
        if (usernameInput.value == '') {
            warningUsernameRegister.innerHTML = 'The username is empty'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (usernameInput.value.length < 10 || usernameInput.value.length > 20) {
            warningUsernameRegister.innerHTML = 'The username must have between 10 to 20 characters'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return 
        } else if (!/^[A-Z]/.test(usernameInput.value)) {
            warningUsernameRegister.innerHTML = 'The username must start with a capital letter'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/^[A-Za-z0-9]*$/.test(usernameInput.value)) {
            warningUsernameRegister.innerHTML = 'The username must not have a special character'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        }
    } // validate username function

    validatePassword(passwordInput) {
        if (passwordInput.value == '') {
            warningPasswordRegister.innerHTML = 'The password is empty'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (passwordInput.value.length < 6 || passwordInput.value.length > 12) {
            warningPasswordRegister.innerHTML = 'The Password must have between 6 to 12 characters'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/[A-Z]/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one capital letter'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/\d/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one number'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        } else if (!/[^a-zA-Z0-9]/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'The password must have at least one special character'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return
        }
    } // validate password function

    validateRepeatPassword(repeatPasswordInput, passwordInput, event) {
        if (repeatPasswordInput.value == '') {
            warningRepeatPasswordRegister.innerHTML = 'The repeated password is empty'
            repeatPasswordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            event.preventDefault()
            return
        } else if (repeatPasswordInput.value != passwordInput.value) {
            warningRepeatPasswordRegister.innerHTML = 'The passwords do not match'
            repeatPasswordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            event.preventDefault()
            return
        }
    } // validate repeated password function
}
