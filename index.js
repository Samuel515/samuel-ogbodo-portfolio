var menuOpenIcon = document.querySelector("#menu-open-icon");

var menuCloseIcon = document.querySelector("#menu-close-icon");

var menuList = document.querySelector("#menu-items");

//open menu
menuOpenIcon.addEventListener("click" , showMenu);

function showMenu(){
    menuOpenIcon.classList.add("hide");
    menuCloseIcon.classList.remove("hide");
    menuList.classList.remove("hide");
}

//close menu
menuCloseIcon.addEventListener("click" , hideMenu);

function hideMenu(){
    menuOpenIcon.classList.remove("hide");
    menuCloseIcon.classList.add("hide");
    menuList.classList.add("hide");
}

//modal for contact
var closeIcon = document.getElementById("close-icon");
var modalIcons = document.getElementById("modal-icons");
var iconButton = document.querySelector("body > div > div.index-content > div.intro > button");

function showContact(){
    modalIcons.style.display = "flex";
    modalIcons.style.alignItems = "center";
    modalIcons.style.justifyContent = "space-evenly";
}

iconButton.addEventListener("click" , showContact);

function hideContact(){
    modalIcons.style.display = "none";
}

closeIcon.onclick = hideContact;