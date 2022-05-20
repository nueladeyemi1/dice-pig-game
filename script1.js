
let  scores, roundScores, activePlayer, playing;

function reset () {
    scores = [0,0];
    roundScores = 0;
    activePlayer = 0;
    playing = true;
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
};

reset();

const active = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    roundScores = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
};

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click',function(){
    if (playing) {
        let dice = Math.floor(Math.random() * 6 ) + 1;
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; 
    diceDOM.src = 'Dicey-'+dice+'.png';

    if (dice !== 1) {
        roundScores += dice;
        document.querySelector('#current--'+activePlayer).textContent = roundScores;
    } else {
        active()
        
        document.querySelector('.dice').style.display = 'none';
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    if (playing) {
         //to accumulate the scores
    scores[activePlayer] += roundScores;
    document.querySelector('#score--'+ activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        playing = false;
        document.querySelector('.player--'+ activePlayer).classList.add('player--winner')
        document.querySelector('.player--'+activePlayer).classList.remove('player--active')
        document.querySelector('.dice').style.display = 'none';
    } else {
    active()
        }
    }
});

document.querySelector('.btn--new').addEventListener('click', function(){
reset();
})

