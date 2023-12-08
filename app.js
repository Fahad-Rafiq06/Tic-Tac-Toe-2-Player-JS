let boxes = document.querySelectorAll(".btns");
let resetbtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let newGame = document.querySelector("#newGame")
let msgContainer = document.querySelector(".msg-container");
let user1 = prompt("1st Player Name");
let user2 = prompt("2nd Player Name");
let main = document.querySelector("main");
let count = 0;

let turnO = true;

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

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        }
        else {
            box.innerText = "O";
            turnO = true
        }

        box.disabled = true;
        count++;
        console.log(count)
        checkwinner();
    })
})

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

const showWinner = (val) => {
    if (val === "X") {
        val = user1;
    }
    else {
        val = user2
    }
    main.style.display = "none"
    msgContainer.classList.remove("hide");
    msg.innerText = `Winner is ${val}`;
    btndisabled()
}

const resetgame = () => {
    turnO = true;
    btnenabled();
    msgContainer.classList.add("hide");
    main.style.display = "block";
}

const btndisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const btnenabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

resetbtn.addEventListener("click", resetgame)
newGame.addEventListener("click", resetgame)
