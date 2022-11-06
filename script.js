let songIndex=0;
let audioElement= new Audio("1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let songItem=Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songname:"Komaram Bheemudo",filePath:"1.mp3",coverPath:"komaram.jpeg"},
    {songname:"Nattu Nattu",filePath:"2.mp3",coverPath:"2.jpg"},
    {songname:"LaLa Bheemla",filePath:"3.mp3",coverPath:"3.jpeg"},
    {songname:"Tillu anna DJ Pedithe..",filePath:"4.mp3",coverPath:"4.jpeg"},
    {songname:"Sarkar vaari paata..",filePath:"5.mp3",coverPath:"5.jpeg"},
    {songname:"Toofan",filePath:"6.mp3",coverPath:"6.jpeg"},
    {songname:"Once upon a Time",filePath:"7.mp3",coverPath:"7.jpeg"},
    {songname:"Arabic kuthu",filePath:"8.mp3",coverPath:"8.jpeg"},
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songname;

})

//making play/pause button
masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})


// // audioElement.play();

//updating SeekBar 
audioElement.addEventListener('timeupdate',()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=> {
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = () => {
   
    Array.from(document.getElementsByClassName("songItemPlay")).forEach( (element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    })   
} 


Array.from(document.getElementsByClassName("songItemPlay")).forEach( (element) => {
    element.addEventListener('click', (e)=> {   
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src= `${songIndex}.mp3`;
        audioElement.currentTime = 0;   
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');   
        masterPlay.classList.add('fa-circle-pause');     
    })
})

document.getElementById("forward").addEventListener("click" , () => {
    if(songIndex > 7) {
        songIndex=0;
    }
    else {
        songIndex+=1;
    }
    audioElement.src= `${songIndex}.mp3`;
    audioElement.currentTime = 0;   
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');   
    masterPlay.classList.add('fa-circle-pause'); 
})

document.getElementById("previous").addEventListener("click",()=> {
    if(songIndex <=0) {
        songIndex=0;
    }
    else {
        songIndex-=1;
    }
    audioElement.src= `${songIndex}.mp3`;
    audioElement.currentTime = 0;   
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');   
    masterPlay.classList.add('fa-circle-pause'); 
})

