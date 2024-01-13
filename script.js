let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newGameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let click = new Audio("click.mp3");
let win = new Audio("win.mp3");
// winning pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, , 4, 8],
  [2, 4, 6],
];
//player "X" Play
let xTurn = true;
let count = 0;
const disableButton = () => {
  btnRef.forEach((element) => (element.disabled = true));
  popupRef.classList.remove("hide");
};
const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};
const enableButton = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = "false";
  });
  popupRef.classList.add("hide");
};
restartBtn.addEventListener("click", () => {
  count = 0;

  enableButton();
});
const winFunction = (letter) => {
  disableButton();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    win.play();
  } else {
    msgRef.innerHTML = "&#x1389; <br> 'O' Wins";
  }
};

const drawFunction = () => {
  disableButton();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};
newGameBtn.addEventListener("click", () => {
  count = 0;
  enableButton();
});

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //display "x"
      element.innerText = "X";
      element.disabled = true;
      click.play();
    } else {
      xTurn = true;
      //display Y
      element.innerText = "O";
      element.disabled = true;
      click.play();
    }
    count += 1;
    if (count === 9) {
      drawFunction();
    }
    winChecker();
  });
});
