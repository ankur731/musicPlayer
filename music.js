/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("download").href=(allMusic)[musicIndex-1].href;
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        };
      }
    }
  };



let allMusic=[
   
    {
        name:"Ami je Tomar",
        artist:"Arijit Singh",
        img:"music-0",
        src:"music-0",
        href:"https://pagalworld.com.se/files/download/id/6062"
    },
    {
        name:"Rataan Lambiya",
        artist:"Jubin Nautiyal",
        img:"music-1",
        src:"music-1",
        href:"https://pagalworld.com.se/files/download/id/3198"
    },
    {
        name:"Kesariya",
        artist:"Arijit Singh",
        img:"music-2",
        src:"music-2",
        href:"https://pagalworld.com.se/files/download/id/6591"
    },
    {
        name:"Excuses",
        artist:"A.P Dhillon",
        img:"music-3",
        src:"music-3",
        href:"https://pwdown.com/113510/Excuses%20-%20Ap%20Dhillon.mp3"
    },
    {
        name:"Insane",
        artist:"A.P Dhillon",
        img:"music-4",
        src:"music-4",
        href:"https://pwdown.com/113515/Insane%20-%20AP%20Dhillon.mp3"
    },
    {
        name:"Aafat",
        artist:"Liger",
        img:"music-5",
        src:"music-5",
        href:"https://pwdown.com/113643/Aafat%20-%20Liger.mp3"
    },
    {
        name:"Let Me Down Slowly",
        artist:"Alec Benjamin",
        img:"music-6",
        src:"music-6",
        href:"https://pagalworld.com.se/files/download/id/5637"
    },
    {
        name:"Pasoori",
        artist:"Shae Gill",
        img:"music-7",
        src:"music-7",
        href:"https://pwdown.com/113604/Pasoori%20-%20Shae%20Gill.mp3"
    },
    {
        name:"Arcade",
        artist:"Duncan Laurence",
        img:"music-8",
        src:"music-8",
        href:"https://pagaliworld.com/files/download/id/8323"
    },
    {
        name:"Lovely",
        artist:"Billie Eilish",
        img:"music-9",
        src:"music-9",
        href:"https://pagaliworld.com/files/download/id/3260"
    },
    {
        name:"Ride With Me",
        artist:"Kid Ink",
        img:"music-10",
        src:"music-10",
        href:"https://pagalworld.com.se/files/download/id/7063"
    },
    {
        name:"Stay",
        artist:"Justine bieber",
        img:"music-11",
        src:"music-11",
        href:"https://pagalworld.com.se/files/download/id/3947"
    },
    {
        name:"Despacito",
        artist:"Luis fonsi",
        img:"music-12",
        src:"music-12",
        href:"https://pagalworld.com.se/files/download/id/2858"
    },
]
const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
musicLink = wrapper.querySelector(".song-details .href"),
musicAudio = wrapper.querySelector("#main-audio"),
playPauseBtn =  wrapper.querySelector(".play-pause"),
prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next"),
progressArea = wrapper.querySelector(".progress-area");
progressBar = wrapper.querySelector(".progress-bar");
volumeBtn = wrapper.querySelector(".volume");

let musicIndex = 7;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})
//volume control
wrapper.querySelector(".volume").addEventListener("click",()=>{
    if(wrapper.querySelector(".volume").classList.contains("fa-volume-high")){
    document.querySelector(".volume").classList.remove("fa-volume-high");
    document.querySelector(".volume").classList.add("fa-volume-xmark");

    musicAudio.muted=true;
    }
    else{
        document.querySelector(".volume").classList.add("fa-volume-high");
    document.querySelector(".volume").classList.remove("fa-volume-xmark");
    musicAudio.muted=false;
    }
});

let volume = wrapper.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
musicAudio.volume = e.currentTarget.value / 100;
if(musicAudio.volume==0){
    document.querySelector(".volume").classList.remove("fa-volume-high");
    document.querySelector(".volume").classList.add("fa-volume-xmark");
}
else{
    document.querySelector(".volume").classList.remove("fa-volume-xmark");
    document.querySelector(".volume").classList.add("fa-volume-high");
}
});



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
        musicIndex=Math.floor((Math.random() * 12) + 1);
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

//keypress
var play = false;

function onKeyDown(event) {
        switch (event.keyCode) {
            case 32: //SpaceBar                    
                if (play) {
                    pauseMusic();
                    play = false;
                } else {
                    playMusic();
                   play = true;
                }
                break;
            case 37:
                prevMusic();
                break;
            case 39:
                nextMusic();
                break;
        }
  return false;
}

window.addEventListener("keydown", onKeyDown, false);



// list = wrapper.querySelector(".fa-xmark");
// list.addEventListener("click", ()=>{
//     wrapper.querySelector(".music-list").style.opacity="0";
// });

// listn = wrapper.querySelector(".fa-list-ul");
// listn.addEventListener("click", ()=>{
   
//     if( wrapper.querySelector(".music-list").style.opacity=="1"){
//         wrapper.querySelector(".music-list").style.opacity="0";
//     }
//     else{
//         wrapper.querySelector(".music-list").style.opacity="1";
//     }
// });

//music list 
list = wrapper.querySelector(".fa-xmark");
list.addEventListener("click", ()=>{
    wrapper.querySelector(".music-list").style.display="none";
 

});

listn = wrapper.querySelector(".fa-list-ul");
listn.addEventListener("click", ()=>{
        if(wrapper.querySelector(".music-list").style.display=="none"){
            wrapper.querySelector(".music-list").style.removeProperty('display');
            wrapper.querySelector(".music-list").style.removeProperty('opacity');
           
        }
        else{
            wrapper.querySelector(".music-list").style.display="none";

        }
   
});

    // wrapper.querySelector(".music-list").addEventListener("onload",()=>{
    //     wrapper.querySelector(".music-list").style.opacity="0";
    // })
    function musicList(){
        wrapper.querySelector(".music-list").style.opacity="0";
    };
  

function reply(clicked_id){
    var musicIndex= parseInt(clicked_id)+1;
    console.log(musicIndex);
    loadMusic(musicIndex);
    playMusic();
}

//menu window
document.querySelector("#close-2").addEventListener("click",()=>{
        if(document.querySelector(".menu").style.opacity=="0"){
            document.querySelector(".menu").style.opacity="1";
        }
        else{
            document.querySelector(".menu").style.opacity="0";
        }
   
});


document.addEventListener("mouseup", function(e) {
    var container = document.querySelector(".menu");
    if (!container.contains(e.target)) {
        container.style.opacity = "0";
    }
    
});

/////////////////// download and dropdown//////////////////////////////////////////////

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("download").href=(allMusic)[musicIndex-1].href;
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        };
      }
    }
  };







