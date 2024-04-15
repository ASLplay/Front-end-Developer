const logo = document.getElementById("logo");

logo.addEventListener("click", function (){
    var honk = new Audio();
    honk.src = './assets/music/honk-sound.mp3';
    honk.autoplay = true;
})