// audio
const audio = document.querySelector( '#audio' );

// control buttons
const playBtn  = document.querySelector( '#play' );
const prevBtn  = document.querySelector( '#prev' );
const nextBtn  = document.querySelector( '#next' );
const muteBtn  = document.querySelector( '#mute' );
const soundBtn = document.querySelector( '#sound' );

// progress bar
const progressBar      = document.querySelector( '#progress-bar')
const innerProgressBar = document.querySelector( '#inner-progress-bar' );

// song buttons
const songBtnArr = document.querySelectorAll( '.song-btn' );

// other variables
let songIndex = 0;
let paused = true;
const songs = [
    'jazzy-frenchy',
    'a-new-beginning',
    'happy-rock',
    'little-idea',
    'ukulele',
    'creative-minds'
];

// assinged text of each song with appropriate button
songBtnArr.forEach( ( obj, index ) => 
obj.innerHTML = songs[ index ]
    .split( '-' )
        .reduce( ( prev, cur ) => prev += ` ${ cur }` ) 
);


function loadSong ( song ) {
    audio.src = `mp3/${ song }.mp3`;
    songBtnArr[ songIndex ].style.borderColor = 'var( --current-song-btn )';
};

function playAudio(){
    playBtn.classList.remove( 'play-btn' );
    playBtn.classList.add( 'pause-btn' );
    audio.play();
    paused = false;
}

function pauseAudio(){
    playBtn.classList.remove( 'pause-btn' );
    playBtn.classList.add( 'play-btn' );
    audio.pause();
    paused = true;
}

function previousSong(){
    songBtnArr[ songIndex ].style.borderColor = 'silver';
    songIndex--;
    if( songIndex < 0 )
        songIndex = songs.length-1;
    loadSong( songs[ songIndex ] );
    paused || audio.play();
    songBtnArr[ songIndex ].style.borderColor = 'var( --current-song-btn )';
}


function nextSong(){
    songBtnArr[ songIndex ].style.borderColor = 'silver';
    songIndex++;
    if( songIndex > songs.length -1 )
        songIndex = 0;
    loadSong( songs[ songIndex ] );
    paused || audio.play();
    songBtnArr[ songIndex ].style.borderColor = 'var( --current-song-btn )';
}




function playOrPauseAudio(){
    if( audio.paused )
        playAudio();
    else
        pauseAudio();
}


function handleClickOnSongBtn( index ) {
    songIndex = index;
    loadSong( songs[ songIndex ] ); 
    playAudio();
    songBtnArr.forEach( 
            ( songBtn, i ) => ( i === index ) 
                ?  songBtn.style.borderColor = 'var( --current-song-btn )'  
                :  songBtn.style.borderColor = 'silver'
    ); 
}




// event listeners
playBtn.addEventListener( 'click', playOrPauseAudio );

prevBtn.addEventListener( 'click', previousSong );

nextBtn.addEventListener( 'click', nextSong );

muteBtn.addEventListener( 
    'click',  
    ()=> audio.volume = 0
);

soundBtn.addEventListener( 
    'click', 
    ()=> audio.volume = 1
);
progressBar.addEventListener( 
    'click', 
    event => {
        /** width of progressBar */
        const width = progressBar.offsetWidth;
        /** x axis of mouse position of click in coords relative to progressBar position */
        const mPosX = event.clientX - progressBar.offsetLeft;
        /** seconds to pixels factor */ 
        const s2rRatio = width / audio.duration;
        // set current time of audio
        audio.currentTime =  mPosX / s2rRatio;
    }
);

audio.addEventListener( 
    'timeupdate', 
    event => {
        const { duration, currentTime } = audio;
        innerProgressBar.style.width = 
            `calc( 100% * ${ currentTime / duration }`;
    }
);

audio.addEventListener( 'ended', nextSong );

songBtnArr.forEach( ( obj, index ) =>  obj.addEventListener(
    'click', 
    ()=> handleClickOnSongBtn( index )
));




// run before the start
loadSong( songs[ songIndex ] );