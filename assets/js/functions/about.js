let divAbout = document.getElementsByClassName("aboutBackground")[0];
let about = document.getElementById("aboutA");

function openAbout (){
            divAbout.style.display = "flex";
            about.style = "border-bottom: 2px solid var(--bg-button);";
            setTimeout(() => {            
            divAbout.classList.remove("close");
        }, 200)
}

function closeAbout(){
        setTimeout(() => {
            about.style = "border-bottom: 2px solid rgba(255, 255, 255, 0);";
            divAbout.classList.add("close");
        }, 200);

        setTimeout(() => {
            divAbout.style.display = "none";
        }, 400);
}