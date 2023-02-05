//only for ScrollPosition
function get(){
  $('#scrollPosition').html($(window).scrollTop());
}
get();
$(window).scroll(get);

// init ScrollMagic controller
	var controller = new ScrollMagic.Controller();

// build scene 01  HEADLINE goes up and ...
  new ScrollMagic.Scene({
    triggerElement: "#section01",
    triggerHook: "onLeave",
    duration: 600,
    offset:0
  })
    .setPin("#section01")
    .setTween("#section01 h1", {y:-500, autoAlpha:0,ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);

// build scene 02  Scene 01 blendet aus
  new ScrollMagic.Scene({
    triggerElement: "#section01",
    triggerHook: "onLeave",
    offset:420,
    duration:0
  })
    .setPin("#section01")
    .setTween("#section01", {autoAlpha:0})
    .addIndicators()
    .addTo(controller);

// build scene 03  TypoBlock nach oben
  new ScrollMagic.Scene({
    triggerElement: "#black",
    triggerHook: "onLeave",
    offset:-100,
    duration:400
  })
    .setPin("#section01")
    .setTween("#black p", {y:-500, ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);
