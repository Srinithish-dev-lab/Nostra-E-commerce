// Scripts
let sidenavMenu = document.getElementById("side-navbar-activate")
let sidenavbar = document.querySelector(".side-navbar")

sidenavMenu.addEventListener("click",() => {
    sidenavbar.style.marginLeft = "0px"
})


// Scripts
document.getElementById("side-navbar-close").addEventListener("click",() => {
    sidenavbar.style.marginLeft = "-60%"
})