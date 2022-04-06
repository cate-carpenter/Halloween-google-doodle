// GSAP included in `index.html`
console.log("OK");

gsap.to(".letter", 0.08, {
  x: -15,
  repeat: -1,
  yoyo: true
});

gsap.to("#bone", 1.5, {
  x: -15,
  rotation: -30,
  ease: "elastic",
  repeat: -1,
  yoyo: true
});

gsap.from(".jacko", 2.5, {
  y: 15,
  opacity: 0,
  ease: "elastic",
  repeat: -1,
  yoyo: true,
  delay: 3
});

gsap.from(".candle", 1.2, {
  y: -8,
  ease: "linear",
  repeat: -1,
  yoyo: true
});
