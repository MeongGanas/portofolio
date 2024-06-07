import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function RecentWork() {
  useGSAP(() => {
    gsap.from(["#slide-1", "#slide-2"], {
      height: 0,
      backgroundColor: "transparent",
    });

    gsap.to("#recent-text", {
      filter: "blur(10px)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#container-recent",
        start: "top top",
        end: "bottom 25%",
        scrub: 1,
      },
    });

    gsap.to("#slide-1", {
      height: "50%",
      backgroundColor: "white",
      ease: "power2.inOut",
      duration: 2,
      transformOrigin: "bottom",
      scrollTrigger: {
        trigger: "#container-recent",
        start: "top 20%",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to("#slide-2", {
      height: "50%",
      backgroundColor: "white",
      ease: "power2.inOut",
      duration: 2,
      transformOrigin: "top",
      scrollTrigger: {
        trigger: "#container-recent",
        start: "top 20%",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to("#title", {
      color: "black",
      scrollTrigger: {
        trigger: "#container-recent",
        start: "top 20%",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  return (
    <div className="h-[200vh]">
      <div class="sticky top-0 h-screen" id="container-recent">
        <div className="flex items-center justify-center h-screen text-white">
          <div className="fixed top-0 w-full h-0" id="slide-1"></div>
          <h1 className="text-4xl font-bold md:text-6xl" id="recent-text">
            RECENT WORK
          </h1>
          <div className="fixed bottom-0 w-full h-0" id="slide-2"></div>
        </div>
      </div>
    </div>
  );
}
