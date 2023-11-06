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

//modal 
var image = document.querySelectorAll(".modal-view");
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var closeButton = document.getElementById("close");

image.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImage.src = this.src;
    });
});

// Close the modal when the close button is clicked
closeButton.onclick = function() {
    modal.style.display = "none";
}