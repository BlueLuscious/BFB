import validator from 'validator'

window.addEventListener('DOMContentLoaded', function () {

    const validEmail = document.getElementById('validateButton')
    const emailInput = document.getElementById('emailInput')

    validEmail.addEventListener('click', function () {

            if (validator.isEmail(emailInput.value)) {
                document.getElementById('result').textContent = 'Email is valid';
            } else {
                document.getElementById('result').textContent = 'Email is invalid';
            }
    })

})



