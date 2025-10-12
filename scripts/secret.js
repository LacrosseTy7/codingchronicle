//This code is to make things easier and smaller
const bodyHTML = document.querySelector('body').innerHTML
const rightHTML = document.querySelector('.right-section-header').innerHTML


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


function searchFor() {
    gameHTML = '';
    const value = document.querySelector('.search-bar').value;
    games.forEach((game) => {
        users.forEach((user) => {
            if (user.username === userInPlay) {
                if (game.name.toLowerCase().includes(value.toLowerCase())) {
                    if (user.gamesOwned.includes(game.name) || user.gamesOwned === 'All') {
                        gameHTML += `
                            <div class="game-box">
                                    <a href="${game.href}" class="${game.class}-top-section top-section">
                                        <div><img class="${game.class}-icon game-icon" src="${game.image}"></div>
                                        <div class="${game.class}-title game-title">${game.name}</div>
                                    </a>
                                    <div class="${game.class}-bottom-section">
                                        <button class="${game.class}-price-button price-button">OWNED</button>
                                        <button onclick="favoritesToggle('${game.name}', '${game.class}')" class="favorite-button"><img src="images/non-favorited-game-icon.png" class="${game.class}-favorited favorited-icon"></button>
                                    </div>
                                </div>
                    `
                    } else if (game.price !== 'Free') {
                        gameHTML += `
                            <div class="game-box">
                                    <a class="${game.class}-top-section top-section">
                                        <div><img class="${game.class}-icon game-icon" src="${game.image}"></div>
                                        <div class="${game.class}-title game-title">${game.name}</div>
                                    </a>
                                    <div class="${game.class}-bottom-section">
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
                                    <div class="${game.class}-bottom-section">
                                        <button onclick="buyGame('${game.name}', '${game.class}')" class="${game.class}-price-button price-button">Free</button>
                                        <button onclick="favoritesToggle('${game.name}', '${game.class}')" class="favorite-button"><img src="images/non-favorited-game-icon.png" class="${game.class}-favorited favorited-icon"></button>
                                    </div>
                                </div>
                    `
                    }
                }
            }
        })
    })
    if (gameHTML === '') {
        gameHTML = '<h2 style="margin-top: 100px; text-align: center; width: 100%;">No games found!</h2>'
    } else {gameHTML = gameHTML}
    document.querySelector('.games-container').innerHTML = gameHTML
}
//This code brings you to the login page where you put your username
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


//This code checks for the correct username inputted into the login page and if correct goes to the password page
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


//This code checks that the person logging in inputted the correct password for the username and logs them into their account
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
                            <a class="home-container" href='../tester website/index.html'>
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


//This code opens the profile sidebar when the profile is clicked
function openProfile() {
    if(userInPlay === 'LacrosseGamer') {
        document.querySelector('.right-section-header').innerHTML += `
        <div class="profile-page">
        <button class="profile-button">My Profile</button>
        <button class="profile-button">My Account</button>
        <button onclick="ADMIN()" class="admin-button">ADMIN Manage</button>
        <button class="contact-button"><b>Contact Us</b></button>
        <button class="sign-out-button" onclick="localStorage.removeItem('currentUser'); window.location.replace('rdthddhfgrdhtjyrjyrd.html')">Sign Out</button>
        </div>
    `
    } else {
    document.querySelector('.right-section-header').innerHTML += `
        <div class="profile-page">
        <button class="profile-button">My Profile</button>
        <button class="profile-button">My Account</button>
        <button class="contact-button"><b>Contact Us</b></button>
        <button class="sign-out-button" onclick="localStorage.removeItem('currentUser'); window.location.replace('rdthddhfgrdhtjyrjyrd.html')">Sign Out</button>
        </div>
    `
    }
    document.querySelector('.login-container').onclick = function() {
        closeProfile()
    }
}


//This code closes the profile sidebar if it is open
function closeProfile() {
    document.querySelector('.profile-page').remove();
    document.querySelector('.login-container').onclick = function() {
        openProfile()
    }
}


//This code shows the admin password input and continue button to get into the admin page
function ADMIN() {
    document.querySelector('.profile-page').innerHTML += `
    <div class="admin-container">
    <input onkeydown="if (event.key === 'Enter') {adminPasswordCheck()}" class="admin-input" type="password" placeholder="Password...">
    </div>
    `
}

let adminPassword = localStorage.getItem('admin-password')

//This code checks to see if the admin password is correct and if yes brings you to the admin page
function adminPasswordCheck() {
    if (document.querySelector('.admin-input').value === adminPassword) {
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


//This brings you to the period selector which will name the tab to the period your in
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
    <button onclick="webPassword = prompt('Insert new password:'); localStorage.setItem('web-password', webPassword)">CHANGE WEB PASSWORD</button>
    <button onclick="adminPassword = prompt('Insert new password:'); localStorage.setItem('admin-password', adminPassword)">CHANGE ADMIN PASSWORD</button>
    <button>ADD GAME</button>
    <button>DELETE PROFILES</button>
    <button>CHECK INBOX</button>
    <button onclick="document.querySelector('.users-paragraph').innerHTML = JSON.stringify(users)">SHOW USERS</button>
    <p class="users-paragraph"></p>
    `
}

//This code puts the games into the body of the page
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
                    <div class="${game.class}-bottom-section">
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
                    <div class="${game.class}-bottom-section">
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


//This toggles if the game you clicked on is favorited or not
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


//This will buy the game that you clicked on or take you to the checkout page
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


function addShortcuts() {
    games.forEach((game) => {
        users.forEach((user) => {
            if (user.username === userInPlay) {
                if (user.shortcuts.includes(game.name)) {
                    document.querySelector(`.${game.class}-bottom-section`).innerHTML += `
                        <button class="shortcut-selector-hidden"><img class="shortcut-selector-icon" src="images/Checked Box.png"></button>
                    `
                } else {
                    document.querySelector(`.${game.class}-bottom-section`).innerHTML += `
                        <button class="shortcut-selector-hidden"><img class="shortcut-selector-icon" src="images/Unchecked Box.png"></button>
                    `
                }
                document.querySelector('.add-shortcut-icon').src = 'images/exit-shortcut-icon'
                document.querySelector('.add-shortcut-icon').onclick = function() {
                    closeShortcuts()
                }
            }
        })
    })
}


function closeShortcuts() {
    document.querySelector('.add-shortcut-icon').src = 'images/add-shortcut-icon.png'
    document.querySelector('.add-shortcut-icon').onclick = function() {
        addShortcuts()
    }
    games.forEach((game) => {
        document.querySelector(`.shortcut-selector-hidden`).remove()
    })
}


//This code tests for if your logged in and sets up the whole website when you get back into it. It also loads all of your saves
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