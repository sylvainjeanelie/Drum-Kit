window.addEventListener('keydown', playingSound);

function playingSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!audio) return;
   
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}

// remove class Plying
function removeTransition(e){
if(e.propertyName !== 'transform') return;
this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));