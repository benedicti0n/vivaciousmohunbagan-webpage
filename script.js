const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

gsap.to("#main",{
    backgroundColor: "#BC4B48",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -10%",
        end: "top -70%",
        scrub: 2
    }
})