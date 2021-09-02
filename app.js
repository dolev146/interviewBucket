// we have three screens
// first is home screen with 2 buttons
let nextNumberToCollect = 1;

const game = document.querySelector(".gameArea");
const playBtn = document.querySelector(".btn-primary");
const InstructionsBtn = document.querySelector(".btn-info");
window.mobileCheck = (() => {
  let check = false;
  ((a) => {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
})();
// console.log(window.mobileCheck)
const isMoblie = window.mobileCheck;
playBtn.addEventListener("click", () => {
  // inserting the play screen
  game.style.gridTemplateColumns = "7% 20% 15% 5% 50% 3%";
  game.style.gridTemplateRows = "20% 80% ";
  game.style.gridTemplateAreas =
    '". scores  scores  number . ." ". gameboard gameboard gameboard gameboard ."  ';
  game.style.alignItems = "start";

  game.innerHTML = `<h1 class="scores" >Next: <h1 class="results" >1</h1> </h1> 
          <div class="grid"></div>   
  `;
  const results = document.querySelector(".results");
  const grid = document.querySelector(".grid");
  const resultsDisplay = document.querySelector(".results");
  const hero = document.createElement("span");
  hero.id = "hero";
  hero.style.backgroundImage = "url(./img/logo.png)";
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
  const getRandomInt = () => {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
  };

  if (isMoblie) {
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
    let numberFall =  setInterval(() => {
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
            }
              numberDiv.parentElement.removeChild(numberDiv);
            nextNumberToCollect++;
            results.innerHTML = nextNumberToCollect;
          }
          // if(hero.offsetLeft numberDiv.offsetLeft)
        }
        numberDiv.style.top = `${numberDiv.offsetTop + 5}px`;
        if (numberDiv.offsetTop === 480) {
          numberDiv.parentElement.removeChild(numberDiv);
        }
      }, 100);
    };
    // numberRainMobile();
   let rain = setInterval(numberRainMobile, 3000);
  }
  // for desktop app
  else {
  }

  // let currentShooterIndex = 202;
  // let width = 15;
  // let direction = 1;
  // let invadersId;
  // let goingRight = true;
  // let aliensRemoved = [];
  // let results = 0;

  // for (let i = 0; i < 225; i++) {
  //   const square = document.createElement("div");
  //   grid.appendChild(square);
  // }

  // const squares = Array.from(document.querySelectorAll(".grid div"));

  // const alienInvaders = [
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
  //   31, 32, 33, 34, 35, 36, 37, 38, 39,
  // ];

  // function draw() {
  //   for (let i = 0; i < alienInvaders.length; i++) {
  //     if (!aliensRemoved.includes(i)) {
  //       squares[alienInvaders[i]].classList.add("invader");
  //     }
  //   }
  // }

  // draw();

  // function remove() {
  //   for (let i = 0; i < alienInvaders.length; i++) {
  //     squares[alienInvaders[i]].classList.remove("invader");
  //   }
  // }

  // squares[currentShooterIndex].classList.add("shooter");

  // function moveShooter(e) {
  //   squares[currentShooterIndex].classList.remove("shooter");
  //   switch (e.key) {
  //     case "ArrowLeft":
  //       if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
  //       break;
  //     case "ArrowRight":
  //       if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
  //       break;
  //   }
  //   squares[currentShooterIndex].classList.add("shooter");
  // }
  // document.addEventListener("keydown", moveShooter);

  // function moveInvaders() {
  //   const leftEdge = alienInvaders[0] % width === 0;
  //   const rightEdge =
  //     alienInvaders[alienInvaders.length - 1] % width === width - 1;
  //   remove();

  //   if (rightEdge && goingRight) {
  //     for (let i = 0; i < alienInvaders.length; i++) {
  //       alienInvaders[i] += width + 1;
  //       direction = -1;
  //       goingRight = false;
  //     }
  //   }

  //   if (leftEdge && !goingRight) {
  //     for (let i = 0; i < alienInvaders.length; i++) {
  //       alienInvaders[i] += width - 1;
  //       direction = 1;
  //       goingRight = true;
  //     }
  //   }

  //   for (let i = 0; i < alienInvaders.length; i++) {
  //     alienInvaders[i] += direction;
  //   }

  //   draw();

  //   if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
  //     resultsDisplay.innerHTML = "GAME OVER";
  //     clearInterval(invadersId);
  //   }

  //   for (let i = 0; i < alienInvaders.length; i++) {
  //     if (alienInvaders[i] > squares.length) {
  //       resultsDisplay.innerHTML = "GAME OVER";
  //       clearInterval(invadersId);
  //     }
  //   }
  //   if (aliensRemoved.length === alienInvaders.length) {
  //     resultsDisplay.innerHTML = "YOU WIN";
  //     clearInterval(invadersId);
  //   }
  // }
  // invadersId = setInterval(moveInvaders, 600);

  // function shoot(e) {
  //   let laserId;
  //   let currentLaserIndex = currentShooterIndex;
  //   function moveLaser() {
  //     squares[currentLaserIndex].classList.remove("laser");
  //     currentLaserIndex -= width;

  //     if (squares[currentLaserIndex].classList.contains("invader")) {
  //       squares[currentLaserIndex].classList.remove("laser");
  //       squares[currentLaserIndex].classList.remove("invader");
  //       squares[currentLaserIndex].classList.add("boom");

  //       setTimeout(
  //         () => squares[currentLaserIndex].classList.remove("boom"),
  //         300
  //       );
  //       clearInterval(laserId);

  //       const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
  //       aliensRemoved.push(alienRemoved);
  //       results++;
  //       resultsDisplay.innerHTML = results;
  //       console.log(aliensRemoved);
  //     }
  //   }
  //   switch (e.key) {
  //     case "ArrowUp":
  //       laserId = setInterval(moveLaser, 100);
  //   }
  // }

  // document.addEventListener("keydown", shoot);
});
