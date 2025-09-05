//This code is to make things easier and smaller
const bodyHTML = document.querySelector('body').innerHTML
const rightHTML = document.querySelector('.right-section-header').innerHTML

//This array is all of the games on the website
const games = [{
    name: 'Boredom Button',
    image: 'images/games/button.png',
    class: 'boredom-button',
    shortcutHTML: '<a href="games/boredom button.html"><img class="bored-button-shortcut-icon game-shortcut-icon" src="images/games/button.png"></a>',
    href: 'games/boredom button.html',
    price: 'Free'
}, {
    name: 'Rock Paper Scissors',
    image: 'games/images/Rock-Paper-Scissors-Logo.webp',
    class: 'rock-paper-scissors',
    shortcutHTML: '<a href="games/rock-paper-scissors.html"><img class="rps-shortcut-icon game-shortcut-icon" src="games/images/Rock-Paper-Scissors-Logo.webp"></a>',
    href: 'games/rock-paper-scissors.html',
    price: 'Free'
}, {
    name: 'Escaping the Prison',
    image: 'games/images/henry-etp-logo.jpg',
    class: 'escaping-the-prison',
    shortcutHTML: '<a href="games/stickminescapingprison.html"><img class="henry-etp-shortcut-icon game-shortcut-icon" src="games/images/henry-etp-logo.jpg"></a>',
    href: 'games/stickminescapingprison.html',
    price: 1
}, {
    name: 'Escape 40 Times',
    image: 'games/images/40xescape.jpg',
    class: 'escape-40x',
    shortcutHTML: '<a href="games/40exescape.html"><img class="40x-escape-shortcut-icon game-shortcut-icon" src="games/images/40xescape.jpg"></a>',
    href: 'games/40exescape.html',
    price: 0.34
}, {
    name: 'Abandoned',
    image: 'games/images/abandoned.jpg',
    class: 'abandoned',
    shortcutHTML: '<a href="games/abandoned.html"><img class="abandoned-shortcut-icon game-shortcut-icon" src="games/images/abandoned.jpg"></a>',
    href: 'games/abandoned.html',
    price: 0.5
}, {
    name: 'Angry Birds',
    image: 'games/images/angry birds.png',
    class: 'angry-birds',
    shortcutHTML: '<a href="games/Angrybirds.html"><img class="angry-birds-shortcut-icon game-shortcut-icon" src="games/images/angry birds.png"></a>',
    href: 'games/Angrybirds.html',
    price: 1
}, {
    name: 'Black Jack Battle',
    image: 'games/images/blackjackbattle.webp',
    class: 'black-jack-battle',
    shortcutHTML: '<a href="games/blackjackbattle.html"><img class="bjb-shortcut-icon game-shortcut-icon" src="games/images/blackjackbattle.webp"></a>',
    href: 'games/blackjackbattle.html',
    price: 'Free'
}, {
    name: 'Castle Wars Modern',
    image: 'games/images/castlewars.jpg',
    class: 'castle-wars',
    shortcutHTML: '<a href="games/castlewarsmodern.html"><img class="castle-shortcut-icon game-shortcut-icon" src="games/images/castlewars.jpg"></a>',
    href: 'games/castlewarsmodern.html',
    price: 'Free'
}, {
    name: 'Cookie Clicker',
    image: 'games/images/cookieclicker',
    class: 'cookie-clicker',
    shortcutHTML: '<a href="games/cookieclickercool.html"><img class="cc-shortcut-icon game-shortcut-icon" src="games/images/cookieclicker"></a>',
    href: 'games/cookieclickercool.html',
    price: 'Free'
}, {
    name: 'Need For Speed',
    image: 'games/images/needforspeed',
    class: 'need-for-speed',
    shortcutHTML: '<a href="games/nfsmostwanted.html"><img class="nfs-shortcut-icon game-shortcut-icon" src="games/images/needforspeed"></a>',
    href: 'games/nfsmostwanted.html',
    price: 1.25
}, {
    name: 'Obby Robby',
    image: 'games/images/obbyrobby',
    class: 'obby-robby',
    shortcutHTML: '<a href="games/obbyonlyup.html"><img class="or-shortcut-icon game-shortcut-icon" src="games/images/obbyrobby"></a>',
    href: 'games/obbyonlyup.html',
    price: 0.78
}, {
    name: 'Kitten Cannon',
    image: 'games/images/kittencannon',
    class: 'kitten-cannon',
    shortcutHTML: '<a href="games/simplePlanes.html"><img class="kc-shortcut-icon game-shortcut-icon" src="games/images/kittencannon"></a>',
    href: 'games/simplePlanes.html',
    price: 0.43
}, {
    name: '1v1 Lol',
    image: 'games/images/1v1lol',
    class: 'lol-1v1',
    shortcutHTML: '<a href="games/1v1maybeidk.html"><img class="1v1-shortcut-icon game-shortcut-icon" src="games/images/1v1lol"></a>',
    href: 'games/1v1maybeidk.html',
    price: 1.2
}, {
    name: '12 Mini Battles',
    image: 'games/images/minibattles',
    class: 'mini-battles',
    shortcutHTML: '<a href="games/12minibattles.html"><img class="12mb-shortcut-icon game-shortcut-icon" src="games/images/minibattles"></a>',
    href: 'games/12minibattles.html',
    price: 1.68
}, {
    name: 'Banjo and Kazooie',
    image: 'games/images/banjokazooie',
    class: 'banjo-kazooie',
    shortcutHTML: '<a href="games/banjokazooie.html"><img class="bk-shortcut-icon game-shortcut-icon" src="games/images/banjokazooie"></a>',
    href: 'games/banjokazooie.html',
    price: 1.47
}, {
    name: 'Bit Planes',
    image: 'games/images/bitplanes',
    class: 'bit-planes',
    shortcutHTML: '<a href="games/bitplanes.html"><img class="bp-shortcut-icon game-shortcut-icon" src="games/images/bitplanes"></a>',
    href: 'games/bitplanes.html',
    price: 0.45
}, {
    name: 'Block Blast',
    image: 'games/images/blockblast',
    class: 'block-blast',
    shortcutHTML: '<a href="games/blockblast.html"><img class="blbl-shortcut-icon game-shortcut-icon" src="games/images/blockblast"></a>',
    href: 'games/blockblast.html',
    price: 0.89
}, {
    name: 'Burrito Bison Launcha Libre',
    image: 'games/images/burritobison',
    class: 'burrito-bison',
    shortcutHTML: '<a href="games/burritobisonlaunchalibre.html"><img class="bbll-shortcut-icon game-shortcut-icon" src="games/images/burritobison"></a>',
    href: 'games/burritobisonlaunchalibre.html',
    price: 1.23
}, {
    name: 'Diddy Kong Racing',
    image: 'games/images/kongracing',
    class: 'kong-racing',
    shortcutHTML: '<a href="games/diddykongracing.html"><img class="dkr-shortcut-icon game-shortcut-icon" src="games/images/kongracing"></a>',
    href: 'games/diddykongracing.html',
    price: 0.93
}, {
    name: 'Doge Miner',
    image: 'games/images/dogeminer',
    class: 'doge-miner',
    shortcutHTML: '<a href="games/dogeminer.html"><img class="dm-shortcut-icon game-shortcut-icon" src="games/images/dogeminer"></a>',
    href: 'games/dogeminer.html',
    price: 0.76
}, {
    name: 'Escape Road',
    image: 'games/images/escaperoad',
    class: 'escape-road',
    shortcutHTML: '<a href="games/escaperoad.html"><img class="er-shortcut-icon game-shortcut-icon" src="games/images/escaperoad"></a>',
    href: 'games/escaperoad.html',
    price: 0.69
}, {
    name: 'Feed Us 3',
    image: 'games/images/feedus',
    class: 'feed-us',
    shortcutHTML: '<a href="games/feedus3.html"><img class="fu3-shortcut-icon game-shortcut-icon" src="games/images/feedus"></a>',
    href: 'games/feedus3.html',
    price: 0.16
}]


//This will be the code for the code below when testing is done
//let users = JSON.parse(localStorage.getItem('users'))

//This code is temporary and is used for adding new users and changing things for now
let users = [
    {
        username: "LacrosseGamer",
        email: "30twilson@go.dsdmail.net",
        password: "um???",
        shortcuts: "Boredom Button, Castle Wars Modern, Bit Planes, Escape 40 Times",
        favorites: " Boredom Button",
        gamesOwned: "All"

    },
    {
        username: "WaffleKing966",
        email: "waffledogeur@gmail.com",
        password: "Waffledogsyeah",
        shortcuts: "Boredom Button, Rock Paper Scissors",
        favorites: " Boredom Button Rock Paper Scissors",
        gamesOwned: "All"
    },
    {
        username: "Jahames12",
        email: "jimmerstripple@gmail.com",
        password: "trackkid",
        shortcuts: "Boredom Button, Rock Paper Scissors",
        favorites: " Boredom Button Rock Paper Scissors",
        gamesOwned: " Boredom Button Rock Paper Scissors"
    },
    {
        username: "Newt12",
        email: "eriktwilles@gmail.com",
        password: "erikdagoat",
        shortcuts: "Boredom Button, Rock Paper Scissors",
        favorites: " Boredom Button Rock Paper Scissors",
        gamesOwned: "All"
    }
];


//This code is to test for notifications and show how many in the corner of the symbol
let notificationCount = 0;
updateNotifications(notificationCount);
function updateNotifications(notificationCount) {
    if (notificationCount > 0) {
        document.querySelector('.notifications-icon-container').innerHTML += `
        <div class="notifications-count"></div>
        `
        document.querySelector('.notifications-count').innerHTML = notificationCount
    }
};


//This code gets the current user who was logged in last
let userInPlay = '';
userInPlay = localStorage.getItem('currentUser')



function checkForInput(users) {
    const inputValue = document.querySelector('.email-input').value;
    if (!inputValue) {
        document.querySelector('.empty-words').innerHTML = 'Enter a valid email address, phone number, or Skype name.'
        document.querySelector('.forgot-password').classList.add('invalid')
    } else if (inputValue.length < 8) {
        document.querySelector('.empty-words').innerHTML = 'Must be 8 characters or more.'
        document.querySelector('.forgot-password').classList.add('invalid')
    }else{
        let usernameFound;
        document.querySelector('.empty-words').innerHTML = ''
        document.querySelector('.forgot-password').classList.remove('invalid')
        if (!usernameFound) {
            document.querySelector('.empty-words').innerHTML = "That account doesn't exist! Please contact the Admin to get an account at 30twilson@go.dsdmail.net."
        document.querySelector('.forgot-password').classList.add('invalid')
        };
        users.forEach((item)=>{
            if (item.username === inputValue) {
                document.querySelector('body').innerHTML = `
                <div>
                <img class="gradient-background" src="images/gradient.webp">
                <div class="sign-in-container">
                    <img class="dsd-icon" src="images/dsd-icon">
                    <p class="sign-in-text">Enter password</p>
                    <p class="empty-words"></p>
                    <input onkeydown="if (event.key === 'Enter') {checkForCorrectPassword(users)}" class="email-input" type="password" placeholder="Password">
                    <a onclick="alert('Welcome to the instructions. This page is for your Password. Enter it into the password spot. Then press sign in.')" class="forgot-password">Forgot your password?</a>
                    <button onclick="checkForCorrectPassword(users)" class="next-button">Sign in</button>
                </div>
                </div>
                `;
            };
        });
    };
}

function goToLogin() {
    document.querySelector('html').innerHTML = `
    <head>
        <title>Sign in to your account</title>
        <link rel="icon" href="https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico">
        <link rel="stylesheet" href="styles/login.css">
        <style class="style"></style>
    </head>
    <body>
        <div>
        <img class="gradient-background" src="images/gradient.webp">
        <div class="sign-in-container">
            <img class="dsd-icon" src="images/dsd-icon">
            <p class="sign-in-text">Sign in</p>
            <p class="empty-words"></p>
            <input onkeydown="if (event.key === 'Enter') {checkForInput(users)}" class="email-input" type="text" placeholder="Email, phone, or Skype">
            <a onclick="alert("Welcome to the instructions. This page is for your Username. Enter it into the email spot. Then press next. If you are new, it will take you to a sign up page. Otherwise it will just sign you right in.")" class="forgot-password">Can't access your account?</a>
            <button onclick="checkForInput(users)" class="next-button">Next</button>
        </div>
        </div>

        <script src="scripts/secret.js"></script>
    </body>
    `
}

function checkForCorrectPassword(users) {
    const inputValue = document.querySelector('.email-input').value;
    if (!inputValue) {
        document.querySelector('.empty-words').innerHTML = 'Please enter your password.'
        document.querySelector('.forgot-password').classList.add('invalid')
    } else{
        let passwordFound;
        if (!passwordFound) {
            document.querySelector('.empty-words').innerHTML = 'Your account or password is incorrect.'
            document.querySelector('.forgot-password').classList.add('invalid')
        };
        users.forEach((item)=>{
            if (item.password === inputValue) {
                document.querySelector('.empty-words').innerHTML = ''
                document.querySelector('.forgot-password').classList.remove('invalid')
                userInPlay = item.username
                document.querySelector('html').innerHTML = `
                <head>
                    <link rel='stylesheet' href=styles/secret.css>
                    <link rel='icon' href=https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico>
                    <link rel="stylesheet" href="styles/login.css">
                    <link rel="stylesheet" href="styles/games.css">
                    <title>Home</title>
                </head>
                <body>
                    <div class="header">
                        <div class="left-section-header">
                            <img class="hamburger-menu-icon" src="images/hamburger-menu">
                            <a class="home-container" href='../tester website/tester.html'>
                            <img class="tester-icon" src="images/test1.png">
                            TEST
                            </a>
                            <div class="shortcut-container"></div>
                        </div>
                        <div class="middle-section-header">
                            <input class='search-bar' type='text' placeholder='Search'>
                            <button class="search-button">
                                <img class="search-icon" src="images/search.svg">
                            </button>
                            <button class="voice-search-button">
                                <img class="voice-search-icon" src="images/voice-search-icon.svg">
                            </button>
                        </div>
                        <div class="right-section-header">
                            <img class="add-shortcut-icon" src="images/add-shortcut-icon.png">
                            <div class="notifications-icon-container">
                            <img class="notifications-icon" src="images/notifications-icon.png">
                            <div class="notifications-count"></div>
                            </div>
                            <button class="login-container" onclick="goToLogin()"><img class="login-icon" src="images/login-icon.png"></button>
                        </div>
                    </div>

                    <div class="games-container"></div>

                    <script src="scripts/secret.js"></script>
                </body>
                `
                updateNotifications(notificationCount)
                document.querySelector('.login-container').innerHTML = userInPlay
                localStorage.setItem('currentUser', userInPlay)
                document.querySelector('.login-container').classList.add('logged-in')
                document.querySelector('.login-container').onclick = function() {
                    openProfile()
                }
                games.forEach((game) => {
                    if (item.shortcuts.includes(game.name)) {
                        document.querySelector('.shortcut-container').innerHTML += game.shortcutHTML
                    }
                })
            };
        });
    };
}

function openProfile() {
    if(userInPlay === 'LacrosseGamer') {
        document.querySelector('.right-section-header').innerHTML += `
        <div class="profile-page">
        <button class="profile-button">My Profile</button>
        <button class="profile-button">My Account</button>
        <button onclick="ADMIN()" class="admin-button">ADMIN Manage</button>
        <button class="contact-button"><b>Contact Us</b></button>
        <button class="sign-out-button" onclick="localStorage.removeItem('currentUser'); window.location.replace('secret.html')">Sign Out</button>
        <button onclick="setToDefault()">DEFAULT</button>
        </div>
    `
    } else {
    document.querySelector('.right-section-header').innerHTML += `
        <div class="profile-page">
        <button class="profile-button">My Profile</button>
        <button class="profile-button">My Account</button>
        <button class="contact-button"><b>Contact Us</b></button>
        <button class="sign-out-button" onclick="localStorage.removeItem('currentUser'); window.location.replace('secret.html')">Sign Out</button>
        </div>
    `
    }
    document.querySelector('.login-container').onclick = function() {
        closeProfile()
    }
}

function closeProfile() {
    document.querySelector('.profile-page').remove();
    document.querySelector('.login-container').onclick = function() {
        openProfile()
    }
}

function ADMIN() {
    document.querySelector('.profile-page').innerHTML += `
    <div class="admin-container">
    <input class="admin-input" type="password" placeholder="Password...">
    <button onclick="adminPasswordCheck()">Continue</button>
    </div>
    `
}

function adminPasswordCheck() {
    if (document.querySelector('.admin-input').value === 'manageUMM???') {
        document.querySelector('.admin-container').remove()
        document.querySelector('body').classList.add('period-selector')
        document.querySelector('body').innerHTML = `
        <p style="font-size: 50px;">Which period are you in?</p>
        <div class="day-container">
        <p>A Day</p>
        <button onclick="adminPage(1)" class="period-button">1st</button>
        <button onclick="adminPage(2)" class="period-button">2nd</button>
        <button onclick="adminPage(3)" class="period-button">3rd</button>
        <button onclick="adminPage(4)" class="period-button">4th</button>
        <button onclick="adminPage(0)" class="period-button">Shark Time</button>
        </div>
        <div class="day-container">
        <p>B Day</p>
        <button onclick="adminPage(6)" class="period-button">6th</button>
        <button onclick="adminPage(7)" class="period-button">7th</button>
        <button onclick="adminPage(8)" class="period-button">8th</button>
        <button onclick="adminPage(9)" class="period-button">9th</button>
        <button onclick="adminPage(0)" class="period-button">Shark Time</button>
        </div>

        <script src="scripts/secret.js"></script>
        `
    }
}

function adminPage(period) {
    document.querySelector('body').classList.remove('period-selector')
    let className = '';
    if (period === 0) {
        className = 'Advisory Shark Time'
    } else if (period === 1) {
        className = 'HONORS INTG SCIENCE 8'
    } else if (period === 2) {
        className = 'CREATIVE CODING 1'
    } else if (period === 3) {
        className = 'HONORS ENGLISH 8'
    } else if (period === 4) {
        className = 'US HISTORY 1'
    } else if (period === 6) {
        className = 'BAND 2'
    } else if (period === 7) {
        className = 'Home'
    } else if (period === 8) {
        className = 'Honors Math 8'
    } else if (period === 9) {
        className = 'STEM Explorations ROBOTICS'
    }
    document.querySelector('title').innerHTML = className
    document.querySelector('body').innerHTML = `
    <button>SEND OUT NOTIFICATIONS</button>
    <button>CHANGE WEB PASSWORD</button>
    <button>CHANGE ADMIN PASSWORD</button>
    <button>ADD GAME</button>
    <button>DELETE PROFILES</button>
    <button>CHECK INBOX</button>
    <button onclick="document.querySelector('.users-paragraph').innerHTML = JSON.stringify(users)">SHOW USERS</button>
    <p class="users-paragraph"></p>
    `
}

let gameHTML = '';
function updateGames() {
    games.forEach((game) => {
        if (game.price !== 'Free') {
        gameHTML += `
            <div class="game-box">
                    <a class="${game.class}-top-section top-section">
                        <div><img class="${game.class}-icon game-icon" src="${game.image}"></div>
                        <div class="${game.class}-title game-title">${game.name}</div>
                    </a>
                    <div class="bottom-section">
                        <button onclick="buyGame('${game.name}', '${game.class}')" class="${game.class}-price-button price-button">$${game.price.toFixed(2)}</button>
                        <button onclick="favoritesToggle('${game.name}', '${game.class}')" class="favorite-button"><img src="images/non-favorited-game-icon.png" class="${game.class}-favorited favorited-icon"></button>
                    </div>
                </div>
        `
    } else {
        gameHTML += `
            <div class="game-box">
                    <a class="${game.class}-top-section top-section">
                        <div><img class="${game.class}-icon game-icon" src="${game.image}"></div>
                        <div class="${game.class}-title game-title">${game.name}</div>
                    </a>
                    <div class="bottom-section">
                        <button onclick="buyGame('${game.name}', '${game.class}')" class="${game.class}-price-button price-button">Free</button>
                        <button onclick="favoritesToggle('${game.name}', '${game.class}')" class="favorite-button"><img src="images/non-favorited-game-icon.png" class="${game.class}-favorited favorited-icon"></button>
                    </div>
                </div>
        `
    }})
    console.log('{GAMES UPLOADED}')
    document.querySelector('.games-container').innerHTML = gameHTML
}

updateGames()

function favoritesToggle(gameName, gameClass) {
    users.forEach((user) => {
        if (user.username === userInPlay) {
            if (!user.favorites.includes(gameName)) {
                const imageClass = `.${gameClass}-favorited`
                document.querySelector(imageClass).src = 'images/favorited-game-icon.png'
                user.favorites += ` ${gameName}`
                localStorage.setItem('users', JSON.stringify(users))
            } else {
                const imageClass = `.${gameClass}-favorited`
                document.querySelector(imageClass).src = 'images/non-favorited-game-icon.png'
                user.favorites = user.favorites.replaceAll(` ${gameName}`, '')
                localStorage.setItem('users', JSON.stringify(users))
            }
        }
    })
}

function buyGame(gameName, gameClass) {
    users.forEach((user) => {
        if (user.username === userInPlay) {
            if (!user.gamesOwned.includes(gameName)) {
                games.forEach((game) => {
                    if (gameName === game.name) {
                        if (game.price === 'Free') {
                            document.querySelector(`.${gameClass}-price-button`).innerHTML = 'OWNED'
                            user.gamesOwned += ` ${gameName}`
                            document.querySelector(`.${gameClass}-top-section`).href = game.href
                            localStorage.setItem('users', JSON.stringify(users))
                        }
                    }
                })
            }
        }
    })
}


if (userInPlay) {
users.forEach((item) => {
    if (item.username === userInPlay) {
        document.querySelector('.login-container').innerHTML = userInPlay
        document.querySelector('.login-container').classList.add('logged-in')
        document.querySelector('.login-container').onclick = function() {
            openProfile()
        }
        games.forEach((game) => {
            if (item.shortcuts.includes(game.name)) {
                document.querySelector('.shortcut-container').innerHTML += game.shortcutHTML
            }
        })
    }
})}

localStorage.setItem('users', JSON.stringify(users))


games.forEach((game) => {
    gameName = game.name
    gameClass = game.class
    users.forEach((user) => {
        if (user.username === userInPlay) {
            if (user.favorites.includes(gameName)) {
                const imageClass = `.${gameClass}-favorited`
                document.querySelector(imageClass).src = 'images/favorited-game-icon.png'
            };
            if (user.gamesOwned.includes(gameName)) {
                const buttonClass = `.${gameClass}-price-button`
                const topClass = `.${gameClass}-top-section`
                document.querySelector(buttonClass).innerHTML = 'OWNED'
                document.querySelector(topClass).href = game.href
            } else if (user.gamesOwned === 'All') {
                const buttonClass = `.${gameClass}-price-button`
                const topClass = `.${gameClass}-top-section`
                document.querySelector(buttonClass).innerHTML = 'OWNED'
                document.querySelector(topClass).href = game.href
            }
        }
    })
})

localStorage.setItem('users', JSON.stringify(users))