const highScoreList =document.getElementById('highScoreList');
const highScores=JSON.parse(localStorage.getItem('highScores'))|| [];

//here we enter html code using java script to the tag having id highScoreList 
////map function is used to return an array where score is key

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
