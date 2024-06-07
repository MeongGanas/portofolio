import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Profile() {
  useGSAP(() => {
    gsap.from(".line", {
      scaleY: 0,
      duration: 1,
      transformOrigin: "top",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".line",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to("#desc p", {
      backgroundPositionX: "0%",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#desc p",
        scrub: 1,
        start: "top center",
        end: "bottom top",
      },
    });
  });

  return (
    <div className="flex flex-wrap items-center h-screen px-5">
      <div className="hidden md:block md:w-1/3">
        <h1 className="mb-5 text-4xl text-center text-white md:text-6xl md:mb-0">
          My Profile
        </h1>
      </div>
      <div class="w-full h-full flex items-center md:w-2/3">
        <div class="line h-full bg-white w-[1px]"></div>
        <div id="desc" className="px-10 h-fit">
          <h1 className="mb-10 text-4xl text-white md:hidden">My Profile</h1>
          <p className="inline text-xl md:text-4xl">
            My name is Farrel Giovanni Jaohari, and I am 17 years old.{" "}
          </p>
          <p className="inline text-xl md:text-4xl">
            I reside in Indonesia and am currently pursuing my studies at a
            vocational high school.{" "}
          </p>
          <p className="inline text-xl md:text-4xl">
            I have developed a strong passion for web development, with a
            particular focus on both frontend and backend development.{" "}
          </p>
          <p className="inline text-xl md:text-4xl">
            Through my studies and personal projects, I have gained substantial
            skills and experience{" "}
          </p>
          <p className="inline text-xl md:text-4xl">
            in creating and managing web applications, and I am eager to
            continue advancing my expertise in this dynamic field.
          </p>
        </div>
      </div>
    </div>
  );
}
