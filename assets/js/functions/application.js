let array = ['Landing Page', 'SPA', 'Multi Page'];

let divApplication = document.getElementsByClassName("application")[0];
let h2 = divApplication.getElementsByTagName('h2')[0];

let serviceBlock = document.getElementsByClassName('serviceBlock')[0].querySelectorAll("button");

serviceBlock.forEach((el, i) => {
    el.addEventListener('click', (e) => {

        // h2.textContent = `Закзать ${el.parentNode.getElementsByTagName('h4')[0].textContent}` //Второй вариант
        h2.textContent = `Закзать ${array[i]}`;

        divApplication.style.display = "flex";
        setTimeout(() => {
            divApplication.classList.remove("close");
        }, 200);
    });
});

function closeApplication() {
    setTimeout(() => {
        divApplication.classList.add("close");
    }, 200);

    setTimeout(() => {
        divApplication.style.display = "none";
    }, 400);
}