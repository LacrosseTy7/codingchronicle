function function2() {
    document.querySelector('title').innerText = 'Searching for game...again.'
    document.querySelector('link').href = 'images/button-pressed.png'
    document.querySelector('body').innerHTML = `
    <img>
    <p class='finding' style='color: red; font-size: 32px;'>Fine I'll try again...</p>
    `
    document.querySelector('img').src = 'images/button-pressed.png'
    setTimeout(() => {
        document.querySelector('body').innerHTML = `
        <button style="background-color: white; border: none;"><img style="cursor: pointer><img></button>
        <p class='finding' style='color: red; font-size: 32px;'></p>
        `
        document.querySelector('.finding').innerHTML = `AHHH STILL BORED!!! WHY IS IT TAKING FOREVER?!?!?!`
        document.querySelector('link').href = 'images/ZZZ.webp'
        document.querySelector('img').src = 'images/button.png'
    }, 15000)
}