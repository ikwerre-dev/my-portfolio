// import gsap from "gsap";
import Lenis from "lenis";

export default function scroll() {
  const lenis = new Lenis({
    duration: 1.6,
    easing: function (t) {
      return Math.min(1, 1.001 - Math.pow(2, -10 * t));
    },
    infinite: false,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

// === i might have to use this later
// const lenis = new Lenis({
//   lerp: 0.1,
// });

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add(time => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);
