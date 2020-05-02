const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

const mostRecentScore = localStorage.getItem("mostRecentScore");


//Get an array from the local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES =5;

username.addEventListener("keyup", () => {
 //if ther is nothing in the username than the save bitton is disabled.
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score={
    score: mostRecentScores,
    name: username.value
  };

  //Enter the entry in the array
  highScores.push(score);

  //here we dont have to use curly braces and return if we use function of arrayes
  //here it says sort the array in such a way that if b score is greater than a score return bscore
  highScores.sort((a,b)=> b.score-a.score);
  highScores.splice(5);
  //store in local storage converting it to array
  localStorage.setItem('highScores',JSON.stringify(highScores));
  localStorage.clea
  window,location.assign('/');
  console.log("------"+highScores);
};