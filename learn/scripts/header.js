function openOptions() {
    document.querySelector('.left-section-header').innerHTML += `
        <div class="options-page">
            <button onclick="window.location.href = 'index.html'" class="home-page option">HOME</button>
            <button onclick="window.location.href = 'quizzes.html'" class="quizzes-page option">Quizzes</button>
        </div>
    `
    document.querySelector('.options-page').style.bottom = `-${screen.height}px`
    document.querySelector('.hamburger-menu-icon').onclick = function () {
        document.querySelector('.options-page').remove()
        document.querySelector('.hamburger-menu-icon').onclick = function () {
            openOptions()
        }
    }
}

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

function signOut() {
    localStorage.removeItem('currentUser')
    window.location.reload()
}