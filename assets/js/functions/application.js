let divApplication = document.getElementsByClassName("application")[0];

function openApplication() {
    divApplication.style.display = "flex";
    setTimeout(() => {
        divApplication.classList.remove("close");
    }, 200)
}

function closeApplication() {
    setTimeout(() => {
        divApplication.classList.add("close");
    }, 200);

    setTimeout(() => {
        divApplication.style.display = "none";
    }, 400);
}