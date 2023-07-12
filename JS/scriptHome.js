window.addEventListener('DOMContentLoaded', function () {

    const firstNameHome = document.getElementById('firstNameHome')
    const usernameHome = document.getElementById('usernameHome')
    const userData = JSON.parse(localStorage.getItem('userData'))

    firstNameHome.innerHTML = `Welcome ${userData.firstName}, start learning with El Barba!`
    usernameHome.innerHTML = userData.username

})
