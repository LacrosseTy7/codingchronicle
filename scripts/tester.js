function startRock() {
    const randomNumber = Math.random();
    let computerMove='';
         
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors'
    }

    let result = '';

    if (computerMove === 'rock') {
        result = 'Tie.';
    } else if (computerMove === 'paper') {
        result = 'You lose.';
    } else if (computerMove === 'scissors') {
        result = 'You win.';
    }

    alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
}

function startPaper() {
    const randomNumber = Math.random();
    let computerMove='';
         
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors'
    }

    let result = '';

    if (computerMove === 'rock') {
        result = 'You win.';
    } else if (computerMove === 'paper') {
        result = 'Tie.';
    } else if (computerMove === 'scissors') {
        result = 'You lose.';
    }

    alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
}

function startScissors() {
    const randomNumber = Math.random();
    let computerMove='';
         
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors'
    }

    let result = '';

    if (computerMove === 'rock') {
        result = 'You lose.';
    } else if (computerMove === 'paper') {
        result = 'You win.';
    } else if (computerMove === 'scissors') {
        result = 'Tie.';
    }

    alert(`You picked scissors. Computer picked ${computerMove}. ${result}`);
}

function secretButton() {
    const result = prompt("You thought you could get the secret super easily. Well there's one more step. What's the password?")
    if (result === 'ummmmmmmmmm?????') {
        window.location.replace('secret.html')
    } else {
        alert('WRONG!!! YOU LOSE!')
        document.querySelector('.all-html').innerHTML = `
        <head><title>LOSER!!!!</title> <link rel="icon" href="images/mad.png"></head>
        <body><p><i><u><b>YOU LOSE BIG TIME LOSER</b></u></i></p></body>
        `
    }
}