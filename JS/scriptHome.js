window.addEventListener('DOMContentLoaded', function () {

    const firstNameHome = document.getElementById('firstNameHome')
    const userData = JSON.parse(localStorage.getItem('userData'))

    firstNameHome.innerHTML = `Welcome ${userData.firstName}`

})