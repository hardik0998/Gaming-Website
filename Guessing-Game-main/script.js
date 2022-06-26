'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(Message) {
document.querySelector('.Message').textContent = Message;
};
document.querySelector('.check').addEventListener('click' , function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess , typeof guess);

// When there is no input 
if(!guess){
//  document.querySelector('.message').textContent='⛔No number';
displayMessage('⛔ No Number');
}
// When player wins
else if(guess===secretNumber){
//  document.querySelector('.message').textContent='☑️Correct Number';
displayMessage('☑️ Correct Number');
document.querySelector('.number').textContent=secretNumber;
document.querySelector('body').style.backgroundColor= 'orchid';
document.querySelector('.number').style.width='30rem';
if(score>highscore){
    highscore=score;
document.querySelector('.highscore').textContent=highscore;
}
}
// When guess is wrong
else if(guess!==secretNumber){
if(score>1){
displayMessage(guess>secretNumber ? '⏫too high': '⏬too low');
score--;
document.querySelector('.score').textContent=score;
}
else{
document.querySelector('.score').textContent='💥 You lost the game';
displayMessge('💥 You lost the game!');
document.querySelecotr('.score').textContent=0;
}
}
// When guess is too high
else if(guess>secretNumber){
if(score>1){
document.querySelector('.Message').textContent='⏫too high';
score--;
document.querySelector('.score').textContent=score;
}
else{
document.querySelector('.Message').textContent='💥 You lost the game';
document.querySelector('.score').textContent=0;
}
}
// When guess is too low
else if(guess<secretNumber){
if(score>1){
document.querySelector('.Message').textContent='⏬ too low';
score--;
document.querySelector('.score').textContent=score;
}
else{
document.querySelector('.Message').textContent='💥 You lost the game';
document.querySelector('.score').textContent=0;
}
}
});
document.querySelector('.again').addEventListener('click' , function() {
score=20;
secretNumber=Math.trunc(Math.random()*20)+1;
displayMessage('Start Guessing...');
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
documnet.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor= '#222';
document.querySelector('.number').style.width='15rem';
});
