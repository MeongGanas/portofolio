import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Welcome() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          document.body.classList.add("h-screen");
        },
      });

      t1.from("#intro-slider", {
        display: "none",
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from("#iam", {
          opacity: 0,
          y: "+=30",
          delay: 0.3,
        })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#iam", {
          opacity: 0,
          y: "+=30",
          delay: 0.3,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from(["#welcome-1", "#welcome-2", "#welcome-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
          delay: 0.3,
          duration: 0.5,
        })
        .to(["#welcome-1", "#welcome-2", "#welcome-3"], {
          stagger: 0.5,
          delay: 0.3,
        });
    }, comp);

    document.body.classList.remove("h-screen");

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    gsap.set("#welcome", { filter: "blur(0px)" });
    gsap.to("#welcome", {
      filter: "blur(10px)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#welcome",
        start: "top top",
        end: "bottom 25%",
        scrub: 1,
      },
    });

    gsap.to(["#welcome-1", "#welcome-3"], {
      xPercent: "-100",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#welcome",
        start: "top top",
        end: "bottom",
        scrub: true,
      },
    });

    gsap.to("#welcome-2", {
      xPercent: "100",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#welcome",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative" ref={comp}>
      <div
        className="fixed top-0 z-[99] flex flex-col justify-center w-full h-screen p-10 bg-gray-50 font-bold"
        id="intro-slider"
      >
        <h1 className="mb-5 text-3xl text-center md:text-6xl" id="iam">
          I am
        </h1>
        <h1 className="mb-5 text-5xl text-center md:text-8xl" id="title-1">
          Front-end Developer
        </h1>
        <h1 className="mb-5 text-5xl text-center md:text-8xl" id="title-2">
          Back-end Developer
        </h1>
        <h1 className="text-5xl text-center md:text-8xl" id="title-3">
          Student
        </h1>
      </div>
      <div
        className="flex items-center justify-center h-screen px-10"
        id="welcome"
      >
        <div className="w-full text-center">
          <h1
            id="welcome-1"
            className="mb-10 text-6xl font-bold text-gray-100 md:text-9xl"
          >
            Let Me Introduce
          </h1>
          <h1
            id="welcome-2"
            className="mb-10 text-6xl font-bold text-gray-100 md:text-center md:text-9xl"
          >
            My Self As Web
          </h1>
          <h1
            id="welcome-3"
            className="mb-10 text-6xl font-bold text-gray-100 md:text-center md:text-9xl"
          >
            Developer
          </h1>
        </div>
      </div>
    </div>
  );
}