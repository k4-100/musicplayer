// audio
const audio = document.querySelector('#audio');

// buttons
const playBtn = document.querySelector('#play');


let isAudioPlaying = false; 
/** @summary control whether audio has to play or not */
function controlAudioPlay(){
    if(!isAudioPlaying){
        playBtn.classList.remove('play-btn');
        playBtn.classList.add('pause-btn');
        audio.play();
        
    }else{
        playBtn.classList.remove('pause-btn');
        playBtn.classList.add('play-btn');
        audio.pause();
    }
    
    isAudioPlaying = !isAudioPlaying;
}

function 


// event listeners
playBtn.addEventListener('click',controlAudioPlay);