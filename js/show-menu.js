function showMenu() {  
    let menu = document.querySelector(".menu-mobile");
    let shadowMenu = document.querySelector(".menu-mobile-shadow");
    let buttonMenu = document.querySelector("header button img");

    if (menu.style.display == "none"){

        buttonMenu.src = "./images/icon-close.svg"
        menu.style = "display: flex"
        shadowMenu.style = "display: flex"
    }else {
        buttonMenu.src = "./images/icon-menu.svg"
        menu.style = "display: none"
        shadowMenu.style = "display: none" 
    }

    
    
}