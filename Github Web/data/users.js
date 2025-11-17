let currentUser;

let users = [
    {
        name: 'LacrosseGamer',
        password: 'hihihi'
    }, {
        name: 'WaffleKing966',
        password: 'Waffledogsyeah'
    }
]

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