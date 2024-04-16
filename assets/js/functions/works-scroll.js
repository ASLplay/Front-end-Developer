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
        pContent: "Front-end developer"
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
];

const worksImg = document.getElementsByClassName("worksContent")[0].getElementsByTagName("img")[0];
const worksP = document.getElementsByClassName("worksContent")[0].getElementsByTagName("p")[0];
const workBackground = document.getElementsByClassName("worksBlock")[0];

let workActive = 0;

worksImg.addEventListener('mousedown', clickScroll);
let timer;

function setScroll() {

    worksImg.classList.add("close");
    worksP.classList.add("close");

    if (workActive == workContent.length)
        workActive = 0;

    setTimeout(() => {
        
        worksImg.src = workContent[workActive].src;
        worksP.innerHTML = workContent[workActive].pContent;
        workBackground.style = `background: url(${workContent[workActive].src}) no-repeat;
        background-position: center;
        background-size: cover;`

        worksImg.classList.remove("close");
        worksP.classList.remove("close");
    }, 350);

    timer = setTimeout(autoScroll, 10000)
}

function clickScroll(event) {

    if (timer != undefined) {
        clearTimeout(timer)
        timer = undefined;
    }

    if (event.clientX < window.screen.width / 2) {
        workActive--;

        if (workActive < 0) {
            workActive = workContent.length - 1;
        }
    }
    else
        workActive++;

    setScroll();
}

function autoScroll() {
    workActive++;
    setScroll();
}

timer = setTimeout(autoScroll, 10000)