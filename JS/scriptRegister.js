window.addEventListener('DOMContentLoaded', function () {

    const emailInput = document.getElementById('emailInput')
    const firstNameInput = document.getElementById('firstNameInput')
    const lastNameInput = document.getElementById('lastNameInput')
    const inputs = [emailInput, firstNameInput, lastNameInput]
    const backStep = document.getElementById('backStep')
    const nextStep = document.getElementById('nextStep')

    inputs.forEach(function(input, index) {
        input.addEventListener('click', function () {
            if (index == 0) {
                emailInput.value = ''
            } else if (index == 1) {
                firstNameInput.value = ''
            } else if (index == 2) {
                lastNameInput.value = ''
            }
       })
       input.addEventListener('focus', function () {
            if (index == 0) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            } else if (index == 1) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            } else if (index == 2) {
                this.style.outlineColor = 'rgb(29, 186, 186)'
            }
       })
    })


    // validar formulario
    logInButton.addEventListener('click', function (event) {
        event.preventDefault()



/*         let password = passwordInput.value
        if (password.length < 6 || password.length > 12) {
            alert('La contraseña debe tener entre 6 y 12 caracteres.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            alert('La contraseña debe contener al menos una letra mayúscula.');
            return;
        }
        if (!/\d/.test(password)) {
            alert('La contraseña debe contener al menos un dígito.');
            return;
        }
        if (!/[^a-zA-Z0-9]/.test(password)) {
            alert('La contraseña debe contener al menos un carácter especial.');
            return;
        } */

        // agregar otras validaciones

        document.getElementById('sugnUpForm').submit();
    })

})