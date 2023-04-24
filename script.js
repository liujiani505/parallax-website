// can create different scenes and add them to the controller
let controller = new ScrollMagic.Controller();
// with timeline we can chain together multiple animations
let timeline = new TimelineMax();

// timeline
// .to('.text', 2,{x:500})  
// .to('.content-images', 2, {opacity:0}, "-=2")  // add "-=2" so the two animations start at the same time

timeline
    .to('.rock', 3, {y: -300})
    .to('.girl', 3, {y: -200}, '-=3')
    .to('.bg1', 3, {y: -50}, {y:0, duration:3}, '-=3')
    .to('.content', 3, {top:'0%'}, '-=3') 
    .fromTo('.content-images', {opacity:0}, {opacity:1, duration:3})
    .fromTo('.text', {opacity:0}, {opacity:1, duration:3})
  
let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "200%",
    triggerHook: 0, // on this section, 0 means trigger as soon as we start scrolling, 1 is gonna trigger as soon as we get to the end of this section.
})

    // hook up the animation to the scene

    .setTween(timeline)
    .setPin("section")
    .addTo(controller)