/****************
 * Game Javascript code
 */

var scores, roundScores, activePlayer, gamePlaying;

init();

var lastDice;


//document.querySelector('#current--' + activePlayer).textContent = dice ;
//document.querySelector('#current--' + activePlayer).innerHtml = '<em>' + dice + '</em>';
//var x = document.querySelector('#score--0').textContent;
/*function btn(){
    //Do something here 
}
btn();*/




document.querySelector('.btn--roll').addEventListener ('click' , function() {
   
   if(gamePlaying){

    // 1. Random number
var  dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
var diceDom = document.querySelector('.dice');
diceDom.style.display = 'block';
diceDom.src = 'dice-' + dice + '.png';

//3. Update the round score if the rolled number was not a 1.
if(dice === 6 && lastDice === 6) {
    //player Looses score
    scores[activePlayer]= 0;
    document.querySelector('#score--' + activePlayer).textContent = '0';
}
else if (dice !== 1) {
    //Add score 
 roundScore += dice;
 document.querySelector('#current--' + activePlayer).textContent = roundScore;
} else {
    //Next player
   nextPlayer();
  }
 lastDice= dice;
 }
}); 

document.querySelector('.btn--hold').addEventListener('click',function(){
if(gamePlaying){
  //Add current score to global score
  scores[activePlayer] += roundScore;

  // update the UI
document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

  // Check if player won the game
  if(scores[activePlayer] >= 20) {
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';   
      document.querySelector('.player--'  + activePlayer).classList.add('Winner');
      document.querySelector('.player--'  + activePlayer).classList.remove('active');
      gamePlaying = false;
  } else{
//Next player
  nextPlayer();
  }
}
  
});

    function nextPlayer() {
          //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
  
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
  
  
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  
  //document.querySelector('.player--0').classList.remove('player--active');
  //document.querySelector('.player--1').classList.add('player--active');
  
  document.querySelector('.dice').style.display = 'none';
    }

document.querySelector('.btn--new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying= true;
    
document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'player 1';
document.getElementById('name--1').textContent = 'player 2';
document.querySelector('.player--0').classList.remove('Winner');
document.querySelector('.player--1').classList.remove('Winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');

}


    