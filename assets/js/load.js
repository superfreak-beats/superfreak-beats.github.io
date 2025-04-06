const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

/* TEXT ANIMATION */
tl.to(".text", {
  y: "0%",
  duration: 1,
  stagger: 0.2,
});
tl.to(".headtext", {
  opacity: 1,
  duration: .75,
});

/* SLIDER OPTIONAL */
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", {
  opacity: 0,
  duration: .75,
  delay: 0.35,
  display: "none",
}); /* ,  */

/* HOME PAGE CONTENT ANIMATION */
tl.fromTo("main", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

