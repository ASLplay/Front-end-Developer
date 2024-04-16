const workContent = [
    {
        src: "./assets/img/content/work1.png",
        pContent: "NexusUnity"
    },
    {
        src: "./assets/img/content/work2.png",
        pContent: "New Life"
    },
    {
        src: "./assets/img/content/work3.png",
        pContent: "Font-end developer"
    },
    {
        src: "./assets/img/content/work4.png",
        pContent: "Front-end (Figma)"
    },
    {
        src: "./assets/img/content/work5.png",
        pContent: "OuTouch Shop"
    },
    {
        src: "./assets/img/content/work6.png",
        pContent: "Lap-store"
    },
    {
        src: "./assets/img/content/work7.png",
        pContent: "Your Studio"
    }
];

const worksImg = document.getElementsByClassName("worksContent")[0].getElementsByTagName("img")[0];
const worksP = document.getElementsByClassName("worksContent")[0].getElementsByTagName("p")[0];
const workBackground = document.getElementsByClassName("worksBlock")[0];

let workActive = 0;

worksImg.addEventListener('mousedown', clickScroll);

function clickScroll(event) {
    if (event.clientX < window.screen.width / 2) {
        workActive--;
        if (workActive < 0)
            workActive = workContent.length - 1;
    }
    else
        workActive++;

    worksImg.classList.add("close");
    worksP.classList.add("close");
    if (workActive == workContent.length)
        workActive = 0;
    setTimeout(() => {
        worksImg.src = workContent[workActive].src;
        worksP.innerHTML = workContent[workActive].pContent;
        workBackground.style = `background: rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5);`
        worksImg.classList.remove("close");
        worksP.classList.remove("close");
    }, 350);
}

function autoScroll() {
    workActive++;
    worksImg.classList.add("close");
    worksP.classList.add("close");
    if (workActive == workContent.length)
        workActive = 0;
    setTimeout(() => {
        worksImg.src = workContent[workActive].src;
        worksP.innerHTML = workContent[workActive].pContent;
        workBackground.style = `background: rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5);`
        worksImg.classList.remove("close");
        worksP.classList.remove("close");
    }, 350);
}

setInterval(autoScroll, 3000);