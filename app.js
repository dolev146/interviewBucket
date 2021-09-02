// import { getRandomInt } from "./randomInt";

// we have three screens
// first is home screen with 2 buttons
let nextNumberToCollect = 1;

const game = document.querySelector(".gameArea");
const playBtn = document.querySelector(".btn-primary");
const InstructionsBtn = document.querySelector(".btn-info");

// let isPhone = false;
// let isTablet = false;
// let smallScreen = false;
// let largeScreen = false;
// if (window.innerWidth < 500) {
//   isPhone = true;
// }
// if (window.innerWidth <= 768 && window.innerWidth >= 500) {
//   isTablet = true;
//   console.log("tablet");
// }
// if (window.innerWidth <= 1170 && window.innerWidth >= 769) {
//   smallScreen = true;
//   console.log("smallScreen");
// }
// if (window.innerWidth > 1170) {
//   largeScreen = true;
//   console.log("largeScreen");
// }

const playTheGame = () => {
  // inserting the play screen
  game.style.gridTemplateColumns = "7% 35% 5% 50% 3%";
  game.style.gridTemplateRows = "20% 80% ";
  game.style.gridTemplateAreas =
    '". scores  . . ." ". gameboard gameboard gameboard  ."  ';
  game.style.alignItems = "start";

  game.innerHTML = `<h1 class="scores" >Next: ${nextNumberToCollect}</h1> 
          <div class="grid"></div>   
  `;
  const scores = document.querySelector(".scores");
  const grid = document.querySelector(".grid");
  
  const hero = document.createElement("span");
  hero.id = "hero";
  hero.style.backgroundImage = "url(./img/logoNoBg.png)";
  hero.style.width = "50px";
  hero.style.height = "50px";
  hero.style.backgroundRepeat = "no-repeat";
  hero.style.backgroundPosition = "center";
  hero.style.backgroundSize = "cover";
  hero.style.transform = "translate(-25px,-105px)";
  hero.style.position = "absolute";
  const gameboard = game.getBoundingClientRect();
  const leftBorder = Math.floor(gameboard.left);
  const rightBorder = Math.floor(gameboard.right);
  hero.style.left = (leftBorder + rightBorder) / 2 + "px";
  hero.style.top = gameboard.bottom + "px";
  grid.appendChild(hero);
  document.addEventListener("mousemove", (e) => {
    const x_pos = e.clientX;
    if (rightBorder <= x_pos + 75) {
    } else if (leftBorder >= x_pos - 70) {
    } else {
      hero.style.left = x_pos + "px";
    }
  });

  document.addEventListener("touchmove", (e) => {
    const x_pos = e.touches[0].clientX;
    if (rightBorder <= x_pos + 27) {
    } else if (leftBorder >= x_pos - 30) {
    } else {
      hero.style.left = x_pos + "px";
    }
  });
  document.addEventListener("touchstart", (e) => {
    const x_pos = e.touches[0].clientX;
    if (rightBorder <= x_pos + 25) {
    } else if (leftBorder >= x_pos - 30) {
    } else {
      hero.style.left = x_pos + "px";
    }
  });

  const getRandomInt = () => {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
  };
  // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

  const numberRain = () => {
    let x_grid_column = Math.floor(Math.random() * (24 - 2 + 1)) + 2;
    const numberDiv = document.createElement("span");
    numberDiv.textContent = `${getRandomInt()}`;
    numberDiv.style.gridColumnStart = x_grid_column;
    numberDiv.style.color = "black";
    grid.appendChild(numberDiv);
    numberDiv.style.left = `${numberDiv.offsetLeft}px`;
    numberDiv.style.top = `${numberDiv.offsetTop}px`;
    numberDiv.style.position = "absolute";
    let numberFall = setInterval(() => {
 
      if (
        numberDiv.offsetTop > gameboard.bottom - 110 &&
        numberDiv.offsetTop < gameboard.bottom
      ) {
     
        if (
          hero.offsetLeft + 25 > numberDiv.offsetLeft &&
          hero.offsetLeft - 25 < numberDiv.offsetLeft
        ) {
         
          if (parseInt(numberDiv.textContent) !== nextNumberToCollect) {
            clearInterval(numberFall);
            clearInterval(rain);
            nextNumberToCollect = 1;
            game.innerHTML = `<h1 class="scores" >You Lose! </h1> <button class="grid btn btn-primary playAgain" >Play Again</button> `;
            const playAgainBtn = document.querySelector(".playAgain");
            playAgainBtn.addEventListener("click", playTheGame);
          } else if (parseInt(numberDiv.textContent) === 10) {
            clearInterval(numberFall);
            clearInterval(rain);
            nextNumberToCollect = 1;
            game.innerHTML = `<h1 class="scores" >You Win!</h1> <button class="grid btn btn-primary playAgain" >Play Again</button> `;
            const playAgainBtn = document.querySelector(".playAgain");
            playAgainBtn.addEventListener("click", playTheGame);
          } else {
            numberDiv.parentElement.removeChild(numberDiv);
            nextNumberToCollect++;
            scores.innerHTML = `<h1 class="scores" >Next: ${nextNumberToCollect}</h1>`;
          }
        }
        // if(hero.offsetLeft numberDiv.offsetLeft)
      }
      numberDiv.style.top = `${numberDiv.offsetTop + 5}px`;
      if (numberDiv.offsetTop > gameboard.bottom - 80) {
        numberDiv.parentElement.removeChild(numberDiv);
      }
    }, 100);
  };
  // numberRain();
  let rain = setInterval(numberRain, 1000);
};

playBtn.addEventListener("click", playTheGame);
