export class Validations {

    validateEmail(emailInput) {
        if (emailInput.value == '') {
            warningEmailLogin.innerHTML = 'The email is empty'
            emailInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        }
        return true
    } // validate email function

    validatePassword(passwordInput) {
        if (passwordInput.value == '') {
            warningPasswordLogin.innerHTML = 'The password is empty'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        }
        return true
    } // validate password function
}