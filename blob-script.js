  
  $("#offers").each(function (index) {
    let triggerElement = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top middle",
        end: "top top",
        onEnter: () => {
          $(".grad1").addClass("stage2");
          $(".grad2").addClass("stage2");
        },
        onEnterBack: () => {
          $(".grad1").removeClass("stage2");
          $(".grad2").removeClass("stage2");
        }
      }
    });
  });
  
  $("#listings").each(function (index) {
    let triggerElement = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top middle",
        end: "top top",
        onEnter: () => {
          $(".grad1.stage2").addClass("stage3");
          $(".grad2.stage2").addClass("stage3");
        },
        onEnterBack: () => {
          $(".grad1.stage2").removeClass("stage3");
          $(".grad2.stage2").removeClass("stage3");
        }
      }
    });
  });
  
  $("#tPortals").each(function (index) {
    let triggerElement = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "bottom middle",
        end: "bottom top",
        onEnter: () => {
          $(".grad1.stage2.stage3").addClass("stage4");
          $(".grad2.stage2.stage3").addClass("stage4");
        },
        onEnterBack: () => {
          $(".grad1.stage2.stage3").removeClass("stage4");
          $(".grad2.stage2.stage3").removeClass("stage4");
        }
      }
    });
  });
  
  //Hide stars while the Planet is in view
  $("#smarterlinks").each(function (index) {
    let triggerElement = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          $(".stars-wrapper").addClass("hide");
        },
        onEnterBack: () => {
          $(".stars-wrapper").addClass("hide");
        },
        onLeave: () => {
          $(".stars-wrapper").removeClass("hide");
        },
        onLeaveBack: () => {
          $(".stars-wrapper").removeClass("hide");
        }
      }
    });
  });
  
  
  //end gradient animation by turning opacity to 0
  $('#planet').each(function (index) {
    let triggerElement = $(this);
    let target1 = $('#gr-wrap1');
    let target2 = $('#gr-wrap2');
    let endTriggerElement = $('#benefits');


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        endTrigger: endTriggerElement,
        start: "top middle",
        end: "top middle",
        scrub: 1
      }
    });
    tl.to(target2, {
      opacity: 0,
      duration: 1
    });
    tl.to(target1, {
      opacity: 0,
      duration: 1
    });
	});
  
  //Stars disappear while the footer is in view 
  $("#star5-trigger").each(function (index) {
    let triggerElement = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "top bottom+=100px",
        onEnter: () => {
          $(".stars-wrapper").addClass("hide");
        },
        onEnterBack: () => {
          $(".stars-wrapper").removeClass("hide");
        }
      }
    });
  });
