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
        window.location.replace('rdthddhfgrdhtjyrjyrd.html')
    } else {
        alert('WRONG!!! YOU LOSE!')
        document.querySelector('.all-html').innerHTML = `
        <head><title>LOSER!!!!</title> <link rel="icon" href="images/mad.png"></head>
        <body><p><i><u><b>YOU LOSE BIG TIME LOSER</b></u></i></p></body>
        `
    }
}

function addHeader() {
    document.querySelector('.heading-1').innerHTML = '^ MAKE SURE TO WAIT UNTIL THE BUTTON IS UNPRESSED BEFORE PRESSING IT AGAIN!!'
    document.querySelector('.left-section-header').classList.add('left-section')
    document.querySelector('.left-section').innerHTML = `
        <button onclick='laterUse()' class='puzzlebutton'><img class='puzzlebutton-icon' src='images/PuzzleButton-NotPressed'></button>
        <span class='puzzle1-span'>This will be used for later.</span>
    `
    document.querySelector('.middle-section-header').classList.add('middle-section')
    document.querySelector('.middle-section').innerHTML = `
        <input class='search-bar' type='text' placeholder='Search'>
        <button onclick="puzzle1_1()" class="search-button">
            <img class="search-icon" src="images/search.svg">
        </button>
        <button class="voice-search-button">
            <img class="voice-search-icon" src="images/voice-search-icon.svg">
        </button>
    `
    document.querySelector('.header-adder').remove()
}

let puzzleNumber = 0;
let puzzlePressed = 0;
function laterUse() {
    if (puzzlePressed === 0) {
        puzzlePressed ++;
        document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-Pressed'
        document.querySelector('.puzzle1-span').innerHTML = "It's supposed to be used for LATER!"
        setTimeout(() => {
            document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-NotPressed'
            document.querySelector('.puzzle1-span').innerHTML = "This will be used for LATER."
        }, 3000)
    } else if (puzzlePressed === 1) {
        puzzlePressed ++;
        document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-Pressed'
        document.querySelector('.puzzle1-span').innerHTML = "I said LATER!!"
        setTimeout(() => {
            document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-NotPressed'
            document.querySelector('.puzzle1-span').innerHTML = "You will use this LATER, not now."
        }, 3000)
    } else if (puzzlePressed === 2) {
        puzzlePressed ++;
        document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-Pressed'
        document.querySelector('.puzzle1-span').innerHTML = "CAN YOU NOT HEAR ME?!?!"
        setTimeout(() => {
            document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-NotPressed'
            document.querySelector('.puzzle1-span').innerHTML = "DON'T PRESS ME"
        }, 3000)
    } else if (puzzlePressed === 3) {
        puzzlePressed ++;
        document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-Pressed'
        document.querySelector('.puzzle1-span').innerHTML = "STOOOOOPPPPP PRESSING ME!!!!!!!!!"
        setTimeout(() => {
            document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-NotPressed'
            document.querySelector('.puzzle1-span').innerHTML = "I SWEAR IF YOU PRESS ME AGAIN..."
        }, 3000)
    } else if (puzzlePressed === 4) {
        puzzlePressed ++;
        document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-Pressed'
        document.querySelector('.puzzle1-span').innerHTML = "OK YOUR GETTING IT NOW!!"
        setTimeout(() => {
            document.querySelector('.rps-container').remove()
            document.querySelector('.game-adder').remove()
            document.querySelector('.puzzle1-span').innerHTML = "Let's do this."
            setTimeout(() => {
                document.querySelector('.html-head').innerHTML = `
                <title>YOU SUCK!!</title>
                <link rel='stylesheet' href='styles/tester.css'>
                <link rel='icon' href='images/mad.png'>
                `
                document.querySelector('.puzzle1-span').innerHTML = "And this."
                setTimeout(() => {
                    document.querySelector('.html-head').innerHTML = `
                    <title>YOU SUCK!!</title>
                    `
                    document.querySelector('.puzzle1-span').innerHTML = "Ooh and this."
                    setTimeout(() => {
                        document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-NotPressed'
                        document.querySelector('.puzzle1-span').innerHTML = "I'M LEAVING AND THEN YOU GET NO FUN IF YOU PRESS ME AGAIN."
                    }, 3000)
                }, 3000)
            }, 3000)
        }, 3000)
    } else {
        document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-Pressed'
        document.querySelector('.puzzle1-span').innerHTML = "FINE, I'LL DO IT I'LL DO IT!"
        setTimeout(() => {
            document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-NotPressed'
            document.querySelector('.puzzle1-span').innerHTML = "Press me and then type 'INITIATE' into the search box."
        }, 3000)
        document.querySelector('.puzzlebutton').onclick = function() {
            puzzle1()
        }
    }
}

let puzzle1Counter = 0
function puzzle1() {
    if (puzzle1Counter === 0) {
        puzzle1Counter ++;
        document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-Pressed'
        document.querySelector('.puzzle1-span').innerHTML = "Now do the next step."
    }
}

function puzzle1_1() {
    if (puzzle1Counter === 1) {
        if (document.querySelector('.search-bar').value === 'INITIATE') {
            puzzle1Counter ++;
            document.querySelector('.html-head').innerHTML = `
            <title>PUZZLEZ</title>
            <link rel='icon' href='images/puzzlez-icon'>
            <link rel='stylesheet' href='styles/tester.css'>
            `
            document.querySelector('.search-bar').value = ''
            document.querySelector('.puzzle1-span').innerHTML = "Good, now the puzzle has started, good luck."
            puzzleNumber ++;
            setTimeout(() => {
                document.querySelector('.puzzle1-span').remove()
                document.querySelector('.puzzlebutton-icon').src = 'images/PuzzleButton-NotPressed'
                document.querySelector('.puzzlebutton').onclick = function() {
                    puzzle2()
                }
            }, 2000)
        }
    }
}

function puzzle2() {}