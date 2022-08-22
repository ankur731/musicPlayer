let allMusic=[
   
    {
        name:"Ami je Tomar",
        artist:"Arijit Singh",
        img:"music-0",
        src:"music-0"
    },
    {
        name:"Rataan Lambiya",
        artist:"Jubin Nautiyal",
        img:"music-1",
        src:"music-1"
    },
    {
        name:"Kesariya",
        artist:"Arijit Singh",
        img:"music-2",
        src:"music-2"
    },
    {
        name:"Excuses",
        artist:"A.P Dhillon",
        img:"music-3",
        src:"music-3"
    },
    {
        name:"Insane",
        artist:"A.P Dhillon",
        img:"music-4",
        src:"music-4"
    },
    {
        name:"Aafat",
        artist:"Liger",
        img:"music-5",
        src:"music-5"
    },
    {
        name:"Let Me Down Slowly",
        artist:"Alec Benjamin",
        img:"music-6",
        src:"music-6"
    },
    {
        name:"Pasoori",
        artist:"Shae Gill",
        img:"music-7",
        src:"music-7"
    },
    {
        name:"Arcade",
        artist:"Duncan Laurence",
        img:"music-8",
        src:"music-8"
    },
    {
        name:"Lovely",
        artist:"Billie Eilish",
        img:"music-9",
        src:"music-9"
    },
    {
        name:"Ride With Me",
        artist:"Kid Ink",
        img:"music-10",
        src:"music-10"
    },
    {
        name:"Stay",
        artist:"Justine bieber",
        img:"music-11",
        src:"music-11"
    },
    {
        name:"Despacito",
        artist:"Luis fonsi",
        img:"music-12",
        src:"music-12"
    },
]
const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
musicAudio = wrapper.querySelector("#main-audio"),
playPauseBtn =  wrapper.querySelector(".play-pause"),
prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next"),
progressArea = wrapper.querySelector(".progress-area");
progressBar = wrapper.querySelector(".progress-bar");


let musicIndex = 7;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})


//load music function
function playMusic(){
    wrapper.classList.add("pause");
    document.querySelector("#play-pause").classList.remove("fa-play");
    document.querySelector("#play-pause").classList.add("fa-pause");
    musicAudio.play();
}
function pauseMusic(){
    wrapper.classList.remove("pause");
    document.querySelector("#play-pause").classList.remove("fa-pause");
    document.querySelector("#play-pause").classList.add("fa-play");
    musicAudio.pause();
}
function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}
function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}
function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb-1].name;
    musicArtist.innerText = allMusic[indexNumb-1].artist;
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpg`;
    musicAudio.src = `music/${allMusic[indexNumb-1].src}.mp3`;
}
playPauseBtn.addEventListener("click", ()=>{
    const isMusicPaused = wrapper.classList.contains("pause");

    isMusicPaused ? pauseMusic() : playMusic();
});
nextBtn.addEventListener("click", ()=>{
   nextMusic();
});
prevBtn.addEventListener("click", ()=>{
   prevMusic();
});
musicAudio.addEventListener("timeupdate",(e)=>{
    const currentTimer = e.target.currentTime;///current time
    const duration = e.target.duration;// total duration
    let progressWidth = (currentTimer/duration)*100;
    progressBar.style.width = `${progressWidth}%`; 
    let musicCurrentTime = wrapper.querySelector(".current"),
    musicDuration = wrapper.querySelector(".duration");

    musicAudio.addEventListener("loadeddata", ()=>{
       

        //update song total duration
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration/60);
        let totalSec = Math.floor(audioDuration%60);
        if(totalSec < 10){
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText =`${totalMin}:${totalSec}`;
    });
        //update song current duration
        
        let currentMin = Math.floor(currentTimer/60);
        let currentSec = Math.floor(currentTimer%60);
        if(currentSec < 10){
            currentSec = `0${currentSec}`;
        }
        musicCurrentTime.innerText =`${currentMin}:${currentSec}`;
    
});
{/* <i class="fa-solid fa-repeat-1"></i> */}
//repeat shuffle button
const repeatBtn = wrapper.querySelector(".fa-repeat");
repeatBtn.addEventListener("click", ()=>{
   // var repeat = document.querySelector(".repeat").classList//.add("fa-rotate");
 if(document.querySelector(".repeat").classList.contains("fa-repeat")){
    document.querySelector(".repeat").classList.add("fa-rotate");
    document.querySelector(".repeat").classList.remove("fa-repeat");
    document.querySelector(".repeat").classList.remove("fa-shuffle");
    musicAudio.addEventListener("ended", ()=>{
       
    playMusic();
    });

 }
 else if(document.querySelector(".repeat").classList.contains("fa-rotate")){
    document.querySelector(".repeat").classList.remove("fa-rotate");
    document.querySelector(".repeat").classList.remove("fa-repeat");
    document.querySelector(".repeat").classList.add("fa-shuffle");
   
    musicAudio.addEventListener("ended", ()=>{
        musicIndex++;
        nextMusic();
    });

 }
 else if(document.querySelector(".repeat").classList.contains("fa-shuffle")){
    document.querySelector(".repeat").classList.remove("fa-shuffle");
    document.querySelector(".repeat").classList.add("fa-repeat");
    musicAudio.addEventListener("ended", ()=>{
        nextMusic();
    });
 }
});
progressArea.addEventListener("click", (e)=>{
    let width = progressArea.clientWidth;
    let clickX = e.offsetX;
    let songDuration = musicAudio.duration;

    musicAudio.currentTime = (clickX / width)* songDuration;
});

list = wrapper.querySelector(".fa-xmark");
list.addEventListener("click", ()=>{
    wrapper.querySelector(".music-list").style.opacity="0";
});

listn = wrapper.querySelector(".fa-list-ul");
listn.addEventListener("click", ()=>{
   
    if( wrapper.querySelector(".music-list").style.opacity=="1"){
        wrapper.querySelector(".music-list").style.opacity="0";
    }
    else{
        wrapper.querySelector(".music-list").style.opacity="1";
    }
});

function reply(clicked_id){
    var musicIndex= parseInt(clicked_id)+1;
    console.log(musicIndex);
    loadMusic(musicIndex);
    playMusic();
}




