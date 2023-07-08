gsap.to("#nav",{
    backgroundColor: "#265B15",
    height: "110px",
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
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})