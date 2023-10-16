let userScore, computerScore;

const closeRules = () => {
    const gameRule = document.getElementById("gameRules");
    gameRule.style.display = gameRule.style.display === "none" ? "flex" : "none";
  };
  

const updateScores = () => {
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('computerScore').innerHTML = computerScore;
};

const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  localStorage.setItem('userScore', userScore);
  localStorage.setItem('computerScore', computerScore);
  updateScores();
  location.reload();
};

const playAgain = () => {
  document.getElementById("choice-user").style.display = "flex";
  document.getElementById("gameResults").style.display = "none";
};

const makeChoice = (userChoiceImage) => {
    const resultLoad = document.createElement("div");
    resultLoad.classList.add("winner");

    if (userChoiceImage === "rock") {
        document.getElementById('user-choice').style.border = "20px solid #0074b6";
        document.getElementById("userChoiceImage").src = "./public/icons8-fist-67-1.png";
    } else if (userChoiceImage === "paper") {
        document.getElementById('user-choice').style.border = "20px solid #ffa943";
        document.getElementById("userChoiceImage").src = "./public/icons8-hand-64-1.png";
    } else if (userChoiceImage === "scissors") {
        document.getElementById('user-choice').style.border = "20px solid #bd00ff";
        document.getElementById("userChoiceImage").src = "./public/17911-1.png";
    }

    document.getElementById("choice-user").style.display = "none";
    document.getElementById("gameResults").style.display = "flex";
    document.getElementById("resultDetails").style.transform = "scale(0)";
    document.getElementById("computerChoiceImage").style.display = "none";
    //document.getElementById("loadingIcon").style.display = "none";

    setTimeout(() => {
        play(userChoiceImage);
    }, 1500);
};

const play = (userChoiceImage) => {
    /*const resultLoad = document.createElement("div");
    resultLoad.classList.add("winner");*/

    document.getElementById("resultDetails").style.transform = "scale(1)";
    document.getElementById("computerChoiceImage").style.display = "inherit";
   // document.getElementById("loadingIcon").style.display = "inherit";

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    const resultLoad = document.createElement("div");
    resultLoad.classList.add("winner");

    

    if (computerChoice === "rock") {
        document.getElementById('computer-choice').style.border = "20px solid #0074b6";
        document.getElementById("computerChoiceImage").src = "./public/icons8-fist-67-1.png";
    } else if (computerChoice === "paper") {
        document.getElementById('computer-choice').style.border = "20px solid #ffa943";
        document.getElementById("computerChoiceImage").src = "./public/icons8-hand-64-1.png";
    } else if (computerChoice === "scissors") {
        document.getElementById('computer-choice').style.border = "20px solid #bd00ff";
        document.getElementById("computerChoiceImage").src = "./public/17911-1.png";
    }

   


 
  let result = "";

  if (userChoiceImage === computerChoice) {
      result = "It's a tie!";
      document.getElementById("resultTitle").innerHTML = "TIE UP!!";
      document.getElementById("resultSubtitle").innerHTML = "";
  } else if (
      (userChoiceImage === "rock" && computerChoice === "scissors") ||
      (userChoiceImage === "paper" && computerChoice === "rock") ||
      (userChoiceImage === "scissors" && computerChoice === "paper")
  ) {
      result = "You win!";
      userScore++;
      document.getElementById("userScore").innerHTML = userScore;
      document.getElementById("resultTitle").innerHTML = "You Win!!";
      document.getElementById("resultSubtitle").innerHTML = "against the Computer";
      document.getElementById("user-choice").appendChild(resultLoad);
  }
  else {
    result = "You lose!";
    computerScore++;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("resultTitle").innerHTML = "You Lost!!";
    document.getElementById("resultSubtitle").innerHTML = "against the Computer";
    document.getElementById("computer-choice").appendChild(resultLoad);
}

localStorage.setItem('userScore', userScore);
localStorage.setItem('computerScore', computerScore);

if (result === "You win!") {
    document.getElementById('nextPageButton').style.display = 'block';
} else {
    document.getElementById('nextPageButton').style.display = 'none';
}
};


window.onload = () => {
  userScore = parseInt(localStorage.getItem('userScore')) || 0;
  computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
  updateScores();
};