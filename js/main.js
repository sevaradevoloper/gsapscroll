gsap.registerPlugin(ScrollTrigger);

// 1. O'ng tarafdagi rasm (bg-right) - Chapga surilishi
gsap.to(".bg-right", {
    x: -150, // Chapga 150px suriladi
    scrollTrigger: {
        trigger: ".hero",
        start: "top top", 
        end: "bottom top",
        scrub: 1 // Scrollga qarab sekin harakatlanadi
    }
});

// 2. Chap tarafdagi rasm (bg-left) - Pastga va O'ngga surilishi
gsap.to(".bg-left", {
    y: 100,  // Pastga 100px
    x: 100,  // O'ngga 100px
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