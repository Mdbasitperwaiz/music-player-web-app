console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "The Happiest Days of Our Lives _ Another Brick in the Wall ", filepath: "songs/1.mp3", coverPath: "covers/pk.jpg" },
    { songName: "1.mp3", filepath: "songs/2.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Glass Animals Heat Waves_320(PagalWorld.com.so)", filepath: "songs/3.mp3", coverPath: "covers/21704_4.jpg" },
    { songName: "Maa Taare Zameen Par_320(PagalWorld.com.so)", filepath: "songs/4.mp3", coverPath: "covers/20127_4.jpg" },
    { songName: "Nacho Nacho_320(PagalWorld.com.so)", filepath: "songs/5.mp3", coverPath: "covers/7102_4.jpg" },
    { songName: "Om Deva Deva Namah_320(PagalWorld.com.so)", filepath: "songs/6.mp3", coverPath: "covers/14891_4.jpg" },
    { songName: "Tere Hawale_320(PagalWorld.com.so)", filepath: "songs/7.mp3", coverPath: "covers/15270_4.jpg" },
    { songName: "Phir Le Aya Dil_320(PagalWorld.com.so)", filepath: "songs/8.mp3", coverPath: "covers/21503_4.jpg" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      togglePlayPause();
    }
  });
  
  // Add event listener for masterPlay button
  masterPlay.addEventListener('click', () => {
    togglePlayPause();
  });
  
  // Function to toggle play/pause
  function togglePlayPause() {  
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause');
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause');
      masterPlay.classList.add('fa-circle-play');
      gif.style.opacity = 0;
    }
  }
  
  


audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        songIndex = i;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause');
        audioElement.src = songs[songIndex].filepath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
    songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
})