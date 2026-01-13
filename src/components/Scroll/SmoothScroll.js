import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import Lenis from "lenis";
const SmoothScroll = ({ children }) => {
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
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        // return () => {
        //   lenis.destroy(); // cleanup
        // };
    }, []);
    return _jsx(_Fragment, { children: children });
};
export default SmoothScroll;
