// audio
const audio = document.querySelector('#audio');

// buttons
const playBtn = document.querySelector('#play');

// inner progress bar
const innerProgressBar = document.querySelector('.inner-progress-bar');

console.log(innerProgressBar);
// other variables
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

function adjustProgressBar(e){
    if(!audio.paused){
        const duration = audio.duration;
        innerProgressBar.style.width = `calc( 100% * 
            ${secondsPassed++ / duration}`;
    }

}




function playOrPauseAudio(){
    if(audio.paused)
        playAudio();
    else
        pauseAudio();
}


// event listeners
playBtn.addEventListener('click',playOrPauseAudio);
audio.addEventListener('timeupdate', (event)=> {
    // adjustProgressBar
    const {duration, currentTime} = event.srcElement;

    innerProgressBar.style.width = `calc( 100% * 
        ${currentTime / duration}`;
});

audio.addEventListener('ended',()=>{
    playBtn.classList.remove('pause-btn');
    playBtn.classList.add('play-btn');
});


/*###########################################
EXECUTION
###########################################*/

loadSong(songs[0]);