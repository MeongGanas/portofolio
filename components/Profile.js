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
  }, []);

  return (
    <div className="flex flex-wrap items-center h-screen px-5 py-10 ">
      <div className="hidden md:block md:w-1/3">
        <h1 className="mb-5 text-4xl text-center text-white md:text-6xl md:mb-0">
          My Profile
        </h1>
      </div>
      <div className="flex items-center w-full h-full md:w-2/3">
        <div className="line h-full bg-white w-[1px]"></div>
        <div id="desc" className="px-10 h-fit">
          <h1 className="mb-10 text-4xl text-white md:hidden">My Profile</h1>
          <p className="inline text-xl md:text-3xl">
            My name is Farrel Giovanni Jaohari, and I am 17 years old. I live in
            Makassar, South Sulawesi, Indonesia.{" "}
          </p>
          <p className="inline text-xl md:text-3xl">
            Currently, I am a student at a vocational high school.{" "}
          </p>
          <p className="inline text-xl md:text-3xl">
            I am passionate about web development and have honed my skills as
            both a frontend and backend developer.{" "}
          </p>
          <p className="inline text-xl md:text-3xl">
            My expertise includes working with technologies such as Next.js,
            React, HTML, and Tailwind CSS.{" "}
          </p>
          <p className="inline text-xl md:text-3xl">
            Through my studies and various projects, I have gained valuable
            experience in creating and managing dynamic and responsive web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}
