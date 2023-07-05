export class Validations {

    validatePassword(passwordInput) {
        if (passwordInput.value == '') {
            warningPasswordRegister.innerHTML = 'The password is empty'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
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
    }

}