// we have three screens
// first is home screen with 2 buttons

const game = document.querySelector(".gameArea");
const playBtn = document.querySelector(".btn-primary");
const InstructionsBtn = document.querySelector(".btn-info");

playBtn.addEventListener("click", () => {
  // inserting the play screen
  game.style.gridTemplateColumns = "5% 20% 20% 50% 5%";
  game.style.gridTemplateRows = "20% 80% ";
  game.style.gridTemplateAreas =
    '". scores scores . ." ". gameboard gameboard gameboard ."  ';
  game.style.alignItems = "start";

  game.innerHTML = `<h1 class="results" >0</h1>
          <div class="grid"></div>   
  `;

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
    if (rightBorder <= x_pos + 75) {
    } else if (leftBorder >= x_pos - 70) {
    } else {
      hero.style.left = x_pos + "px";
    }
  });

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
