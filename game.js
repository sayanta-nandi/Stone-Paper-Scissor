let userScr = 0;
let compScr = 0;

const choices = document.querySelectorAll(".choice");
const compScore = document.querySelector("#comp-score");
const userScore = document.querySelector("#user-score");
const msg = document.querySelector("#msg");
const userCh = document.querySelector("#user-choice");
const compCh = document.querySelector("#comp-choice");

const genCompChoice = () => {
    //rock , paper, scissors
    let opt = ["stone","paper","scissor"];
    let idx = Math.floor(Math.random()*3);
    compCh.innerText = opt[idx];
    return opt[idx];
}
const drawGame = () => {
    console.log("draw");
    msg.innerText = "draw";
}
const whoWin = (winUser) => {
    let str = "";
    if(winUser){
        str = "congratulations, you win";
        userScr++;
        userScore.innerText = userScr;

    }else{
        str = "you lose, Try again";
        compScr++;
        compScore.innerText = compScr;
    }
    msg.innerText = str;
}
const playGame = (userChoice) => {
    //genearate computer choice
    userCh.innerText = userChoice;
    const compChioce = genCompChoice();
    console.log(compChioce);
    if(userChoice === compChioce){
        drawGame();
    }else{
        let winUser = true;
        if(userChoice === "stone"){
            winUser = compChioce === "paper" ? false : true;
        }else if(userChoice === "paper"){
            winUser = compChioce === "scissor" ? false : true;
        }else{
            winUser = compChioce == "stone" ? false : true;
        }
        whoWin(winUser);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("clicked", userChoice);
        playGame(userChoice);
    });
});