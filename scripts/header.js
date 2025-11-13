function openOptions() {
    document.querySelector('.right-section-header').innerHTML += `
        <div class="options-page">
            <button onclick="window.location.href = 'index.html'" class="home-page option">HOME</button>
            <button onclick="window.location.href = 'quizzes.html'" class="quizzes-page option">Quizzes</button>
        </div>
    `
    document.querySelector('.options-page').style.bottom = `-${screen.height}px`
}
