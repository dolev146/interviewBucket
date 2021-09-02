import { getRandomInt } from "./randomInt";

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
  game.style.gridTemplateColumns = "7% 20% 15% 5% 50% 3%";
  game.style.gridTemplateRows = "20% 80% ";
  game.style.gridTemplateAreas =
    '". scores  scores  number . ." ". gameboard gameboard gameboard gameboard ."  ';
  game.style.alignItems = "start";

  game.innerHTML = `<h1 class="scores" >Next: <h1 class="results" >${nextNumberToCollect}</h1> </h1> 
          <div class="grid"></div>   
  `;
  const results = document.querySelector(".results");
  const grid = document.querySelector(".grid");
  const resultsDisplay = document.querySelector(".results");
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

  // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  

  if (isPhone) {
    const getNumberPosMobile = () => {
      let x =
        Math.floor(Math.random() * (rightBorder - 20 - leftBorder + 1)) +
        rightBorder;
      if (x <= 340) {
        x = 535;
      }
      return x - 290;
    };

    const numberRainMobile = () => {
      const numberDiv = document.createElement("span");
      numberDiv.textContent = `${getRandomInt()}`;
      numberDiv.style.position = "absolute";
      numberDiv.style.left = `${getNumberPosMobile()}px`;
      numberDiv.style.top = "280px";
      numberDiv.style.color = "black";
      grid.appendChild(numberDiv);
      let numberFall = setInterval(() => {
        if (numberDiv.offsetTop > 405 && numberDiv.offsetTop < 455) {
          // console.log(numberDiv.offsetLeft)
          if (
            hero.offsetLeft + 25 > numberDiv.offsetLeft &&
            hero.offsetLeft - 25 < numberDiv.offsetLeft
          ) {
            console.log("colution");
            if (parseInt(numberDiv.textContent) !== nextNumberToCollect) {
              clearInterval(numberFall);
              clearInterval(rain);
              nextNumberToCollect = 1;
              game.innerHTML = `<h1 class="scores" >You <h1 class="results" >Lose!</h1> </h1> <button class="grid btn btn-primary playAgain" >Play Again</button> `;
              const playAgainBtn = document.querySelector(".playAgain");
              playAgainBtn.addEventListener("click", playTheGame);
            } else {
            numberDiv.parentElement.removeChild(numberDiv);
            nextNumberToCollect++;
            results.innerHTML = nextNumberToCollect;  
            }
            
          }
          // if(hero.offsetLeft numberDiv.offsetLeft)
        }
        numberDiv.style.top = `${numberDiv.offsetTop + 5}px`;
        if (numberDiv.offsetTop === 480) {
          numberDiv.parentElement.removeChild(numberDiv);
        }
      }, 100);
    };
    
    let rain = setInterval(numberRainMobile, 1000);
  }
};

playBtn.addEventListener("click", playTheGame);
