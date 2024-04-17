const bucketButton = document.getElementById("bucketButton");
const bucket = document.getElementById("bucket");

bucketButton.addEventListener("click", function (){
    
    var bucketSound = new Audio();
    bucketSound.src = './assets/music/bucket_sound.mp3';
    bucketSound.autoplay = true;

    var windowHeigh = window.screen.height;
    var windowWidth = window.screen.width;

    bucket.style = `
    display: flex;
    top: ${Math.floor(Math.random() * windowHeigh)}px; 
    right: ${Math.floor(Math.random() * windowWidth)}px;`

    setTimeout(hideBucket, 450)
})

function hideBucket () {
    bucket.style = `display: none;`
}