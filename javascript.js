let botonplay=document.querySelector('.botonPlay')
let botonpause=document.querySelector('.botonPause')

let video=document.querySelector('video')
let texto="Texto h2"
botonplay.addEventListener('click',()=>{
    video.play()
})

botonpause.addEventListener('click',()=>{
    video.pause()
})