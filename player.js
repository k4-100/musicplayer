// audio
const audio = document.querySelector('#audio');

// buttons
const playBtn = document.querySelector('#play');


// play / pause functions
function playAudio(){
    playBtn.classList.remove('play-btn');
    playBtn.classList.add('pause-btn');
    audio.play();
}


// event listeners
playBtn.addEventListener('click',playAudio);