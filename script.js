let Record = JSON.parse(localStorage.getItem('Record')) || {
    wins: 0,
    loss: 0,
    ties: 0
};
console.log(document.querySelector('.js-score'));
updateScore();
// if(!Record) {
//     Record = {
//     wins:0,
//     loss:0,
//     ties:0
// }
//}   


console.log(Record);
function compPlay(){
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        comp = 'rock';
    }
    else if (random === 1) {
        comp = 'paper';
    }
    else {
        comp = 'scissor'
    }
    return comp;
}
function game(choose) {

    let result = '';
    const comp = compPlay();
    // console.log(comp);
    if (choose === comp) {
        console.log(`Player choose: ${choose} Computer choose: ${comp}`);
        Record.ties++;
        result = 'Tied';
    }
    else if (choose === 'rock') {
        if (comp === 'paper') {
            console.log(`Player choose: ${choose} Computer choose: ${comp}`);
            Record.loss++;
            result = 'Computer wins';
        }
        if (comp === 'scissor') {
            console.log(`Player choose: ${choose} Computer choose: ${comp}`);
            Record.wins++;
            result = 'Player wins';
        }
    }
    else if (choose == 'paper') {
        if (comp === 'scissor') {
            console.log(`Player choose: ${choose} Computer choose: ${comp}`);
            Record.loss++;
            result = 'Computer wins';

        }
        if (comp === 'rock') {
            console.log(`Player choose: ${choose} Computer choose: ${comp}`);
            Record.wins++;
            result = 'Player wins';
        }
    }
    else {
        if (comp === 'paper') {
            console.log(`Player choose: ${choose} Computer choose: ${comp}`);
            Record.wins++;
            result = 'Player wins';
        }
        if (comp === 'rock') {
            console.log(`Player choose: ${choose} Computer choose: ${comp}`);
            Record.loss++;
            result = 'Computer wins';
        }
    }
    localStorage.setItem('Record', JSON.stringify(Record));
    updateScore();
    document.querySelector('.js-choose').innerHTML = ` You <img src="img/${choose}.jpg" alt="ROCK" class="result-icons"> <img src="img/${comp}.jpg" alt="ROCK" class="result-icons"> Computer `;
    document.querySelector('.js-result').innerHTML = `${result}`;
}
let isAutoPlaying = false; 
let intervalId;
function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(()=>{
            const choose = compPlay();
            game(choose);
        },1000);
        isAutoPlaying = true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}
function updateScore() {
    document.querySelector('.js-score').innerHTML = `Win:${Record.wins}  Loss:${Record.loss}  Tie:${Record.ties}`;
}