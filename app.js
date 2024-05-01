// let songs=[

//     {title:"Starboy",
//       artist:"Weekend",
//      img_src:"./images/TheWeeknd_Starboy.png",
//     src:"Music/Starboy.mp3"},
//     {title:"Blinding Lights",
//     artist:"Weekend",
//     img_src:"images/lights.jpeg",
//     src:"Music/Blinding-lights.mp3"},
//     {title:"Dandelions",
//     artist:"Weekend",
//     img_src:"images/dandelions.jpg",
//     src:"Music/Dandelions.mp3"},
//     {title:"Shape of You",
//     artist:"Ed Sheren",
//     img_src:"images/shape.jpg",
//     src:"Music/SHAPE OF YOU.mp3"}
// ]


// let currentMusic=0;
// const music=document.querySelector("#audio")
// const seekBar=document.querySelector(".seek-bar");
// const songName=document.querySelector(".music-name")
// const artistName=document.querySelector(".artist-name")
// const disk=document.querySelector(".disk")
// const currentTime=document.querySelector(".current-time")
// const musicDuration=document.querySelector(".song-duration")
// const playBtn=document.querySelector(".play-btn")
// const forwardBtn=document.querySelector(".forward-btn")
// const backwarddBtn=document.querySelector("#.backward-btn")

// playBtn.addEventListener('click',()=>{
//     if(playBtn.className.includes('pause')){
//         music.play();
//     }
//     else{
//         music.pause()
//     }
//     playBtn.classList.toggle('pause')
//     disk.classList.toggle('play')
// })
// const setMusic=(i)=>{
//     seekBar.value=0;
//     let song=songs[i];
//     currentMusic=i;
//     music.src=song.path;
//     songName.innerHTML=song.name;
// }
// setMusic(0);
// const playMusic=()=>{
//     music.play();
//     playBtn.classList.remove('pause');
    
// }
// forwardBtn.addEventListener('click',()=>{
//     if(currentMusic>=songs.length-1){
//         currentMusic=0;
//     }
//     else{
//         currentMusic++;
//     }
//     setMusic(currentMusic)
//     playMusic()
// })
// backwarddBtn.addEventListener('click',()=>{
//     if(currentMusic<=0){
//         currentMusic=songs.length-1;
//     }
//     else{
//         currentMusic--;
//     }
//     setMusic(currentMusic)
//     playMusic()
// })
// const btn=document.getElementById("heart")

// function toggle(){
//     if(btn.classList.contains("far")){
//         btn.classList.remove("far")
//         btn.classList.add("fas")
//     }
//     else{
//         btn.classList.remove("fas")
//         btn.classList.add("far")

//     }
// }
function logout(){
    window.location.assign("auth.html");

  }
 
const btn= document.getElementById("second")
const count=document.querySelector(".count")
function toggle(){
    if(btn.style.color=="white"){
        btn.style.color="red";
    }
    else{
        btn.style.color="white";   }
}
