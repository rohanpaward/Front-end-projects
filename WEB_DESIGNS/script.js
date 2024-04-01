var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-240+"px"
    blur.style.top = dets.y-240+"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=3
        crsr.style.backgroundColor="transparent"
        crsr.style.border="1px solid #fff"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1
        crsr.style.backgroundColor="#95C11E"
        crsr.style.border="0px solid #95C11E"
    })

})


gsap.from("#about-us, #aboutus-in",{
        y:50,
        opacity:0,
        duration:1,
        scrollTrigger:{
           trigger:"#about-us",
           scroller:"body",
        
           start:"top 60%",
           end: "top 55%"
        }
})

gsap.from(".card",{
    scale:0.9,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:"true",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    x:90,
    y:90,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:"true",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
    
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        // markers:true,
        scrub:3
    }
})