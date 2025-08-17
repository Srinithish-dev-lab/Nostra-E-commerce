// Scripts
let offerClose = document.getElementById("offer-close")

offerClose.addEventListener("click",function(){
    offerClose.parentElement.style.display = "none"
})


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


// Scripts
let sliderleftbutton = document.getElementById("slider-left-activate")
let sliderrightbutton = document.getElementById("slider-right-activate")
let sliderimage  = document.querySelector(".slider-image-container")
const slideCount = document.querySelectorAll(".slider-image-container img").length;
let slidermargin = 0

sliderrightbutton.addEventListener("click",() => {
    slidermargin += 100

    if (slidermargin > (slideCount - 1) * 100) {
    slidermargin = 0;
  }

  sliderimage.style.marginLeft = `-${slidermargin}vw`;
});


sliderleftbutton.addEventListener("click",() => {
    if (slidermargin === 0) {
        slidermargin = (slideCount - 1) * 100;
    } else {
        slidermargin -= 100;
    }
    sliderimage.style.marginLeft = `-${slidermargin}vw`;
})


// Scripts
const likebuttons = document.querySelectorAll(".like-button");

likebuttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const liked = btn.getAttribute("data-liked") === "true";
    if (liked) {
      btn.src = "./images/icons/blackheart.png";
      btn.setAttribute("data-liked", "false");
    } else {
      btn.src = "./images/icons/redheart.png";
      btn.setAttribute("data-liked", "true");
    }
  });
});


// Scripts
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".initial-scroll-animate");

    elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elTop = el.getBoundingClientRect().top;

        if (windowHeight > elTop - 100) {
            el.classList.remove("reveal-scroll-animate");
        }
    });
});
