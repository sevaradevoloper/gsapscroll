gsap.registerPlugin(ScrollTrigger);

// 1. O'ng tarafdagi rasm (bg-right) - Chapga surilishi
gsap.to(".bg-right", {
    x: -100,
    y: 700, // Chapga 150px suriladi
     rotation: -55,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top", 
        end: "bottom top",
        scrub: 1 // Scrollga qarab sekin harakatlanadi
    }
});

// 2. Chap tarafdagi rasm (bg-left) - Pastga va O'ngga surilishi
gsap.to(".bg-left", {
    y:650,  // Pastga 100px
    x: 0,  // O'ngga 100px
    rotation: -155,
    scrollTrigger: {
        trigger: ".calculate",
        start: "top bottom", // Calculate qismi ko'rinishni boshlaganda
        end: "bottom top",
        scrub: 1.5
    }
});

// Hero matnlari uchun oddiy kirib kelish animatsiyasi
gsap.from(".hero__container > *", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".calculate__container > *", {
    y: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});