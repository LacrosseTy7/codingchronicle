//This code is to make things easier and smaller
const bodyHTML = document.querySelector('body').innerHTML
const rightHTML = document.querySelector('.right-section-header').innerHTML

//This array is all of the games on the website
const games = [{
    name: 'Boredom Button',
    image: 'images/ebd3jso5iogfsjh25lsdklj/button.png',
    class: 'boredom-button',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/boredom button.html"><img class="bored-button-shortcut-icon game-shortcut-icon" src="images/ebd3jso5iogfsjh25lsdklj/button.png"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/boredom button.html',
    price: 'Free'
}, {
    name: 'Rock Paper Scissors',
    image: 'ebd3jso5iogfsjh25lsdklj/images/Rock-Paper-Scissors-Logo.webp',
    class: 'rock-paper-scissors',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/rock-paper-scissors.html"><img class="rps-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/Rock-Paper-Scissors-Logo.webp"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/rock-paper-scissors.html',
    price: 'Free'
}, {
    name: 'Escaping the Prison',
    image: 'ebd3jso5iogfsjh25lsdklj/images/henry-etp-logo.jpg',
    class: 'escaping-the-prison',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/stickminescapingprison.html"><img class="henry-etp-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/henry-etp-logo.jpg"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/stickminescapingprison.html',
    price: 1
}, {
    name: 'Escape 40 Times',
    image: 'ebd3jso5iogfsjh25lsdklj/images/40xescape.jpg',
    class: 'escape-40x',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/40exescape.html"><img class="40x-escape-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/40xescape.jpg"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/40exescape.html',
    price: 0.34
}, {
    name: 'Abandoned',
    image: 'ebd3jso5iogfsjh25lsdklj/images/abandoned.jpg',
    class: 'abandoned',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/abandoned.html"><img class="abandoned-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/abandoned.jpg"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/abandoned.html',
    price: 0.5
}, {
    name: 'Angry Birds',
    image: 'ebd3jso5iogfsjh25lsdklj/images/angry birds.png',
    class: 'angry-birds',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/Angrybirds.html"><img class="angry-birds-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/angry birds.png"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/Angrybirds.html',
    price: 1
}, {
    name: 'Black Jack Battle',
    image: 'ebd3jso5iogfsjh25lsdklj/images/blackjackbattle.webp',
    class: 'black-jack-battle',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/blackjackbattle.html"><img class="bjb-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/blackjackbattle.webp"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/blackjackbattle.html',
    price: 'Free'
}, {
    name: 'Castle Wars Modern',
    image: 'ebd3jso5iogfsjh25lsdklj/images/castlewars.jpg',
    class: 'castle-wars',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/castlewarsmodern.html"><img class="castle-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/castlewars.jpg"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/castlewarsmodern.html',
    price: 'Free'
}, {
    name: 'Cookie Clicker',
    image: 'ebd3jso5iogfsjh25lsdklj/images/cookieclicker',
    class: 'cookie-clicker',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/cookieclickercool.html"><img class="cc-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/cookieclicker"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/cookieclickercool.html',
    price: 'Free'
}, {
    name: 'Need For Speed',
    image: 'ebd3jso5iogfsjh25lsdklj/images/needforspeed',
    class: 'need-for-speed',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/nfsmostwanted.html"><img class="nfs-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/needforspeed"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/nfsmostwanted.html',
    price: 1.25
}, {
    name: 'Obby Robby',
    image: 'ebd3jso5iogfsjh25lsdklj/images/obbyrobby',
    class: 'obby-robby',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/obbyonlyup.html"><img class="or-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/obbyrobby"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/obbyonlyup.html',
    price: 0.78
}, {
    name: 'Kitten Cannon',
    image: 'ebd3jso5iogfsjh25lsdklj/images/kittencannon',
    class: 'kitten-cannon',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/simplePlanes.html"><img class="kc-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/kittencannon"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/simplePlanes.html',
    price: 0.43
}, {
    name: '1v1 Lol',
    image: 'ebd3jso5iogfsjh25lsdklj/images/1v1lol',
    class: 'lol-1v1',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/1v1maybeidk.html"><img class="1v1-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/1v1lol"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/1v1maybeidk.html',
    price: 1.2
}, {
    name: '12 Mini Battles',
    image: 'ebd3jso5iogfsjh25lsdklj/images/minibattles',
    class: 'mini-battles',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/12minibattles.html"><img class="12mb-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/minibattles"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/12minibattles.html',
    price: 1.68
}, {
    name: 'Banjo and Kazooie',
    image: 'ebd3jso5iogfsjh25lsdklj/images/banjokazooie',
    class: 'banjo-kazooie',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/banjokazooie.html"><img class="bk-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/banjokazooie"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/banjokazooie.html',
    price: 1.47
}, {
    name: 'Bit Planes',
    image: 'ebd3jso5iogfsjh25lsdklj/images/bitplanes',
    class: 'bit-planes',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/bitplanes.html"><img class="bp-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/bitplanes"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/bitplanes.html',
    price: 0.45
}, {
    name: 'Block Blast',
    image: 'ebd3jso5iogfsjh25lsdklj/images/blockblast',
    class: 'block-blast',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/blockblast.html"><img class="blbl-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/blockblast"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/blockblast.html',
    price: 0.89
}, {
    name: 'Burrito Bison Launcha Libre',
    image: 'ebd3jso5iogfsjh25lsdklj/images/burritobison',
    class: 'burrito-bison',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/burritobisonlaunchalibre.html"><img class="bbll-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/burritobison"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/burritobisonlaunchalibre.html',
    price: 1.23
}, {
    name: 'Diddy Kong Racing',
    image: 'ebd3jso5iogfsjh25lsdklj/images/kongracing',
    class: 'kong-racing',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/diddykongracing.html"><img class="dkr-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/kongracing"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/diddykongracing.html',
    price: 0.93
}, {
    name: 'Doge Miner',
    image: 'ebd3jso5iogfsjh25lsdklj/images/dogeminer',
    class: 'doge-miner',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/dogeminer.html"><img class="dm-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/dogeminer"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/dogeminer.html',
    price: 0.76
}, {
    name: 'Escape Road',
    image: 'ebd3jso5iogfsjh25lsdklj/images/escaperoad',
    class: 'escape-road',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/escaperoad.html"><img class="er-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/escaperoad"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/escaperoad.html',
    price: 0.69
}, {
    name: 'Feed Us 3',
    image: 'ebd3jso5iogfsjh25lsdklj/images/feedus',
    class: 'feed-us',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/feedus3.html"><img class="fu3-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/feedus"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/feedus3.html',
    price: 0.16
}, {
    name: 'PolyTrack',
    image: 'ebd3jso5iogfsjh25lsdklj/images/polytrack',
    class: 'poly-track',
    shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/polytrack.html"><img class="poly-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/polytrack"></a>',
    href: 'ebd3jso5iogfsjh25lsdklj/polytrack.html',
    price: 2.46
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
        gamesOwned: ""
    },
    {
        username: "Newt12",
        email: "eriktwilles@gmail.com",
        password: "erikdagoat",
        shortcuts: "Boredom Button, Rock Paper Scissors",
        favorites: " Boredom Button Rock Paper Scissors",
        gamesOwned: ""
    },
    {
        username: "jackjack",
        email: "30jsutton@go.dsdmail.net",
        password: "2735",
        shortcuts: "Angry Birds Escape Road Doge Miner Escaping the Prison",
        favorites: "Angry Birds Escape Road Doge Miner Escaping the Prison PolyTrack",
        gamesOwned: "Angry Birds Escape Road Doge Miner Escaping the Prison"
    }, {
        username: "Drewstructo",
        email: "30abradshaw@go.dsdmail.net",
        password: "",
        shortcuts: "Angry Birds Escape Road Doge Miner Escaping the Prison",
        favorites: "Angry Birds Escape Road Doge Miner Escaping the Prison PolyTrack",
        gamesOwned: "Angry Birds Escape Road Doge Miner Escaping the Prison"
    }, {
        username: "dinomax312",
        email: "barnettmax12@gmail.com",
        password: "M@xwell13",
        shortcuts: "Angry Birds Need For Speed Burrito Bison Launcha Libre PolyTrack",
        favorites: "Angry Birds Need For Speed Burrito Bison Launcha Libre PolyTrack Rock Paper Scissors",
        gamesOwned: "Angry Birds Need For Speed Burrito Bison Launcha Libre PolyTrack Rock Paper Scissors"
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
        <button onclick="setToDefault()">DEFAULT</button>
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
    <input class="admin-input" type="password" placeholder="Password...">
    <button onclick="adminPasswordCheck()">Continue</button>
    </div>
    `
}


//This code checks to see if the admin password is correct and if yes brings you to the admin page
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
    <button>CHANGE WEB PASSWORD</button>
    <button>CHANGE ADMIN PASSWORD</button>
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