import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      //   duration: 1.5, // higher = slower and smoother
      //   easing: (t) => t, // linear easing (change for easing effects)
      //   direction: "vertical", // vertical scroll
      //   gestureDirection: "vertical",
      //   smooth: true, // this exists in lenis package
      //   wheelMultiplier: 0.5, // reduce jump from mouse wheel
      //   smoothTouch: true, // smooth scroll on touch devices
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // return () => {
    //   lenis.destroy(); // cleanup
    // };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
