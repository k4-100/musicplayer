// audio
const audio = document.querySelector('#audio');

// buttons
const playBtn = document.querySelector('#play');

// inner progress bar
const innerProgressBar = document.querySelector('.inner-progress-bar');

console.log(innerProgressBar);
// other variables
let isAudioPlaying = true;
let secondsPassed = 1; 
let intervalID = null;


const songs = [
    'jazzyfrenchy',
    'anewbeginning',
    'happyrock',
    'littleidea',
    'ukulele',
    'creativeminds'  
];

function loadSong(song){
    audio.src = `mp3/${song}.mp3`;

}


function playAudio(){
    playBtn.classList.remove('play-btn');
    playBtn.classList.add('pause-btn');
    audio.play();
}

function pauseAudio(){
    playBtn.classList.remove('pause-btn');
    playBtn.classList.add('play-btn');
    audio.pause();
}

function adjustProgressBar(){
    if(!audio.paused){
        const duration = audio.duration;
        innerProgressBar.style.width = `calc( 100% * 
            ${secondsPassed++ / duration}`;
    }

}




function playOrPauseAudio(){
    if(audio.paused){
        playAudio();
        intervalID = setInterval(adjustProgressBar,1000);
    }
    else{
        pauseAudio();
        clearInterval(intervalID);
       
    }
        
        console.log(audio.videoTracks);
}


// event listeners
playBtn.addEventListener('click',playOrPauseAudio);





/*###########################################
EXECUTION
###########################################*/

loadSong(songs[5]);