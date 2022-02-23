let scores, roundScore, activePlayer, gamePlaying;
init();

document.querySelector('.btn--roll').addEventListener('click', function(){
  if (gamePlaying){  
     //1. random number
    let dice = Math.floor(Math.random() * 6) + 1;
  
     //2. Display result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
  
    //3. Udate round score if dice IS NOT 1!;
     if (dice !== 1){
       roundScore += dice;
       document.querySelector('#current--' + activePlayer).textContent = roundScore;
  
     } else {
       //next player
       nextPlayer();
     }
    
    }

});

document.querySelector('.btn--hold').addEventListener('click', function() {
  if(gamePlaying) {
    //add current score to global score
    scores[activePlayer] += roundScore;
   
      //update UI
document.querySelector('#score--' + activePlayer).textContent =scores[activePlayer];      
     //check if player won the game and nextplayer
  if (scores[activePlayer] >= 100) {

    document.querySelector('#name--' + activePlayer).textContent = 'WINNER!!!'
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--' + activePlayer).classList.add('player--winner');
    document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    gamePlaying = false;
   

  } else{
    //next player
    nextPlayer();
  }
 }
})

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
     roundScore = 0;

     
     document.getElementById('current--0').textContent = '0';
     document.getElementById('current--1').textContent = '0';

     document.querySelector('.player--0').classList.toggle('player--active');
     document.querySelector('.player--1').classList.toggle('player--active');
     document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn--new').addEventListener('click', init);

function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Bird';
document.getElementById('name--1').textContent = 'Bassa';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--' + activePlayer).classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');

}

