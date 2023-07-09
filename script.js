gsap.to("#nav",{
    backgroundColor: "#265B15",
    height: "80px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

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