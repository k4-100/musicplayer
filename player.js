// audio
const audio = document.querySelector('#audio');

// buttons
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const muteBtn = document.querySelector('#next');

// inner progress bar
const innerProgressBar = document.querySelector('#inner-progress-bar');


// other variables
let intervalID = null;
let songIndex = 0;

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

function previousSong(){
    songIndex--;

    if(songIndex < 0)
        songIndex = songs.length-1;

    loadSong( songs[songIndex] );
    audio.play();
}


function nextSong(){
    songIndex++;

    if(songIndex > songs.length -1)
        songIndex = 0;

    loadSong( songs[songIndex] );
    audio.play();
}




function playOrPauseAudio(){
    if(audio.paused)
        playAudio();
    else
        pauseAudio();
}


// event listeners
playBtn.addEventListener('click',playOrPauseAudio);
prevBtn.addEventListener('click',previousSong);
nextBtn.addEventListener('click',nextSong);
audio.addEventListener('timeupdate', (event)=> {
    // adjustProgressBar
    const {duration, currentTime} = event.srcElement;

    innerProgressBar.style.width = `calc( 100% * 
        ${currentTime / duration}`;
});

audio.addEventListener( 'ended', nextSong );




// run before the start
loadSong(songs[songIndex]);