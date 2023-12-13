let boxes = document.querySelectorAll(".btns");
let resetbtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let newGame = document.querySelector("#newGame")
let msgContainer = document.querySelector(".msg-container");
let user1 = prompt("1st Player Name");
let user2 = prompt("2nd Player Name");
let main = document.querySelector("main");
let count = 0;
let x = 0;
let o = 0;
let xScore = document.querySelector("#xScore");
let oScore = document.querySelector("#oScore");
let xName = document.querySelector("#xName");
let oName = document.querySelector("#oName");

xName.innerText = `${user1} Score`;
oName.innerText = `${user2} Score`;

let turnO = true;

// Store all the winning possibilities.
let winpos = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
]

// checking each click and giving the value of O and X to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X";
            turnO = false;

        }
        else {
            box.innerText = "O";
            turnO = true;

        }

        box.disabled = true;
        count++;
        if (count === 9) {
            count = 0;
            draw();

        }

        checkwinner();
    })
})

// checking the winner using the possibilites and clicks on boxes

const checkwinner = () => {
    for (let pattern of winpos) {
        // console.log(pattern)
        // console.log(pattern[0], pattern[1], pattern[2])
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }

        }
    }
}

// This function will call if there will be no result.

const draw = () => {
    msg.innerText = "We have a Draw";
    main.style.display = "none";
    msgContainer.classList.remove("hide")
    btndisabled()
}

// this function will show the winner that we have calculated in the above function.
const showWinner = (val) => {
    if (val === "X") {
        val = user1;
        x++;
        xScore.innerText = x;

    }
    else {
        val = user2;
        o++;
        oScore.innerText = o;
        


    }
    main.style.display = "none"
    msgContainer.classList.remove("hide");
    msg.innerText = `Winner is ${val}`;
    btndisabled()
}

// this function will reset the game

const resetgame = () => {
    turnO = true;
    btnenabled();
    msgContainer.classList.add("hide");
    main.style.display = "block";
    count = 0;
}

// this function will discabled the clicked button

const btndisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// this function will enabled the button but it will be called only when the game is reset or it's a new game
const btnenabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

// calling the reset game function here with the buttons.

resetbtn.addEventListener("click", resetgame)
newGame.addEventListener("click", resetgame)
