const contact = document.getElementById("contact");

const main = document.getElementsByTagName("main")[0];

let activeContact = 0;

contact.addEventListener("click", function () {

    var divContact = document.createElement("div");
    
    if (activeContact == 0){

        activeContact++;
        contact.style = "border-bottom: 2px solid var(--bg-button);";
        divContact.classList.add("contactBlock");
        divContact.innerHTML = `            
        <a href="" target="_blank"><img src="./assets/img/icons/vk.svg" alt="vk"></a>
        <a href="" target="_blank"><img src="./assets/img/icons/telegram.svg" alt="telegram"></a>
        <a href="" target="_blank"><img src="./assets/img/icons/github.svg" alt="github"></a>
        <a href="" target="_blank"><img src="./assets/img/icons/youtube.svg" alt="youtube"></a>
        <a href="" target="_blank"><img src="./assets/img/icons/maildotru.svg" alt="mail"></a>`

        main.appendChild(divContact);

    }
    else {
        activeContact--;
        contact.style = "border-bottom: 2px solid rgba(255, 255, 255, 0);";
        let deleteDiv = document.getElementsByClassName("contactBlock")[0];
        console.log(deleteDiv)
        deleteDiv.remove();
    }
})