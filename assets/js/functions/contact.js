const contact = document.getElementById("contact");
let divContact = document.getElementsByClassName("contactBlock")[0]
let activeContact = 0;

contact.addEventListener("click", function () {

    if (activeContact == 0) {

        contact.style = "border-bottom: 2px solid var(--bg-button);";
        activeContact++;
        
        setTimeout(() => {
            divContact.classList.remove("close");
        }, 200)

    }
    else {
        activeContact--;
        contact.style = "border-bottom: 2px solid rgba(255, 255, 255, 0);";

        setTimeout(() => {
            divContact.classList.add("close");
        }, 200)

    }
})