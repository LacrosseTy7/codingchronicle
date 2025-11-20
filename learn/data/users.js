let currentUser;


let users = localStorage.getItem('users')
if (!users) {
    users = [
        {
            name: 'LacrosseGamer',
            password: 'hihihi',
            email: '30twilson@go.dsdmail.net'
        }, {
            name: 'WaffleKing966',
            password: 'Waffledogsyeah',
            email: 'waffledogeur@gmail.com'
        }, {
            name: 'MasterNogue',
            password: '5594935',
            email: 'noahnhulse@gmail.com'
        }
    ]  
}

currentUser = JSON.parse(localStorage.getItem('currentUser'))
if (!currentUser) {
    currentUser = ''
}
console.log(currentUser)

users.forEach((user) => {
    if (currentUser === user.name) {
        document.querySelector('.right-section-header').classList.add('user-logged-in')
        document.querySelector('.login-button').classList.add('logged-in')
        document.querySelector('.logged-in').innerHTML = currentUser
        document.querySelector('.logged-in').onclick = function () {
            openProfile()
        }
    }
})