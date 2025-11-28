let currentUser;


let users = localStorage.getItem('users')
if (!users) {
    users = [
        {
            name: 'LacrosseGamer',
            password: 'hihihi',
            email: '30twilson@go.dsdmail.net',
            friendCode: 'aEjosdiu98',
            friends: 'MasterNogue WaffleKing966 Jahames12 Shwibble Electrobuzzzz3'
        }, {
            name: 'WaffleKing966',
            password: 'Waffledogsyeah',
            email: 'waffledogeur@gmail.com',
            friendCode: 'aEjojkoi99'
        }, {
            name: 'MasterNogue',
            password: '5594935',
            email: 'noahnhulse@gmail.com',
            friendCode: 'aEjowert100'
        }, {
            name: 'Shwibble',
            password: 'Shwibble_Dibble',
            email: 'dibbleshwibble@gmail.com',
            friendCode: 'aEjopoli101'
        }, {
            name: 'Electrobuzzzz3',
            password: 'imaginedragondeeznutz',
            email: 'ewanmcgee33@outlook.com',
            friendCode: 'aEjomjlo102'
        }, {
            name: 'Jahames12',
            password: 'trackkid',
            email: 'jimmerstripple@gmail.com',
            friendCode: 'aEjostri103'
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