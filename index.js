// Your code here

const dodger = document.getElementById("dodger");

// //changing the background color to black
// dodger.style.backgroundColor = "#000000";

//changing the background color to pink
dodger.style.backgroundColor = "#FF69B4";

// // changing the position to the bottom relative to the game div
// dodger.style.bottom = "100px";

// // changing the position  to the bottom relative to the game div
// dodger.style.bottom = "0px";

// // changing the position  to the left relative to the game div
// dodger.style.left = "0px";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

