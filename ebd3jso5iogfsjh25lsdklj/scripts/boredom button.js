function getRandomInteger(min, max) {
  min = Math.ceil(min); // Ensure min is rounded up to the nearest integer
  max = Math.floor(max); // Ensure max is rounded down to the nearest integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameChoose(randomGame) {
  document.querySelector('body').innerHTML = `
        <div class="header">
            <div class="left-section-header">
                <img onclick="setTimeout(() => gameChoose(getRandomInteger(1, 20)), 3000)" class="boredom-button-icon" src="images/button.png">
                <span class="author">Created By: Ty Wilson</span>
                <img onclick="window.location.href = '../rdthddhfgrdhtjyrjyrd.html'" title="EXIT" class="exit-button" src="../images/exit-shortcut-icon">
            </div>
            <div class="middle-section-header">
                <h1 class="game-title"></h1>
            </div>
            <div class="right-section-header">
                <h1 class="button-title">Boredom Button</h1>
            </div>
        </div>
        <div class="game-player">
          <iframe src="boredom button games/amorphous.html" width="600" height="400" frameborder="0"></iframe>
        </div>
  `
  switch (randomGame) {
    case 1:
      document.querySelector('.game-title').innerText = "Amorphous";
      break;
    case 2:
      document.querySelector('.game-title').innerText = "Game 2";
      break;
    case 3:
      document.querySelector('.game-title').innerText = "Game 3";
      break;
    case 4:
      document.querySelector('.game-title').innerText = "Game 4";
      break;
    case 5:
      document.querySelector('.game-title').innerText = "Game 5";
      break;
    case 6:
      document.querySelector('.game-title').innerText = "Game 6";
      break;
    case 7:
      document.querySelector('.game-title').innerText = "Game 7";
      break;
    case 8:
      document.querySelector('.game-title').innerText = "Game 8";
      break;
    case 9:
      document.querySelector('.game-title').innerText = "Game 9";
      break;
    case 10:
      document.querySelector('.game-title').innerText = "Game 10";
      break;
    case 11:
      document.querySelector('.game-title').innerText = "Game 11";
      break;
    case 12:
      document.querySelector('.game-title').innerText = "Game 12";
      break;
    case 13:
      document.querySelector('.game-title').innerText = "Game 13";
      break;
    case 14:
      document.querySelector('.game-title').innerText = "Game 14";
      break;
    case 15:
      document.querySelector('.game-title').innerText = "Game 15";
      break;
    default:
      document.querySelector('.game-title').innerText = "No game chosen";
  }
}