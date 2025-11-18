// This creates a new element to hold the header.
const template = document.createElement('template')
// This tells it what to put in the header.
template.innerHTML = `
    <header class="header">
        <div class="left-section-header">
            <img onclick="openOptions()" class="hamburger-menu-icon" src="../images/hamburger-menu">
            <div class="home-container" onclick="window.location.href = 'https://www.codingchronicle.space'"><img class="home-logo" src="../images/cc-square-logo"><span class="home-words">Coding Chronicle</span></div>
        </div>
        <div class="middle-section-header"></div>
        <div class="right-section-header">
            <button onclick="window.location.href = '../login'" class="login-button"><img class="login-icon" src="../images/login-logo"></button>
        </div>
    </header>
`
// This puts the header into the page.
document.body.appendChild(template.content);


// This opens the options page on the left.
function openOptions() {
    // This adds the element of the options and the content inside.
    document.querySelector('.left-section-header').innerHTML += `
        <div class="options-page">
            <button onclick="window.location.href = '../home'" class="home-page option">HOME</button>
            <button onclick="window.location.href = '../quizzes'" class="quizzes-page option">Quizzes</button>
            <button onclick="window.location.href = '../games'" class="games-page option">Games</button>
        </div>
    `
    // This makes the options page reach the bottom of the screen.
    document.querySelector('.options-page').style.bottom = `-${screen.height}px`
    // This changes the onclick of the icon to close it instead of opening it again.
    document.querySelector('.hamburger-menu-icon').onclick = function () {
        // This removes the element.
        document.querySelector('.options-page').remove()
        // This changes the onclick to make it open the page again.
        document.querySelector('.hamburger-menu-icon').onclick = function () {
            openOptions()
        }
    }
}


// This opens the profile page. It does the exact same thing as the one above just on the right and different content in the page.
function openProfile() {
    document.querySelector('.right-section-header').innerHTML += `
        <div class="profile-page">
            <button class="my-profile-button profile-button">My Profile</button>
            <button class="sign-out-button profile-button" onclick="signOut()">Sign Out</button>
        </div>
    `
    document.querySelector('.profile-page').style.bottom = `-${screen.height}px`
    document.querySelector('.login-button').onclick = function () {
        document.querySelector('.profile-page').remove()
        document.querySelector('.login-button').onclick = function () {
            openProfile()
        }
    }
}


// This signs you out of the page.
function signOut() {
    // This removes the current user from localStorage.
    localStorage.removeItem('currentUser')
    // This refreshes the page for you.
    window.location.reload()
}