const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceItem = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHide = document.querySelector('.btn--hide');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition


const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
let currentScore , activePlayer , playing , scores;
const init = function(){
    score0.textContent=0;
    score1.textContent=0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0,0];
    diceItem.classList.add('hidden');
    current0.textContent=0;
    current1.textContent=0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init();

// Rolling dice functionality
btnRoll.addEventListener('click' , function(){
if(playing){
// Generating random numbers between 1 to 6
const dice = Math.trunc(Math.random() * 6) + 1;
// Rolling dice event
diceItem.classList.remove('hidden');
diceItem.src = `dice-${dice}.png`;
// Checked for roll 1
if(dice!==1){
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}
else{
    // switch to next player
    switchPlayer();
}
}
});
btnHold.addEventListener('click' , function() {
    if(playing){
    // 1. Add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. Check if player score is greater than 100
    if(scores[activePlayer] >= 100){
        // Finish the game
        playing = false;
        diceItem.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
        //switch to the next player
        switchPlayer();
    }
}
});
btnNew.addEventListener('click' , init);