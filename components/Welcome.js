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

            t1.from("#study", {
                opacity: 0,
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

        return () => {
            ctx.revert();
        };
    }, []);

    useGSAP(() => {
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
            xPercent: "-150",
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#welcome",
                start: "top top",
                end: "bottom",
                scrub: true,
            },
        });

        gsap.to("#welcome-2", {
            xPercent: "150",
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#welcome",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <div className="relative" ref={comp}>
            <div className="h-[200vh]">
                <div
                    className="sticky top-0 flex flex-col justify-center w-full h-screen px-10 overflow-x-hidden"
                    id="welcome"
                >
                    <div className="absolute text-center -translate-x-1/2 top-5 max-w-52 left-1/2">
                        <span
                            className="text-sm text-white uppercase"
                            id="study"
                        >
                            Currently study at SMK TELKOM MAKASSAR
                        </span>
                    </div>
                    <h1
                        id="welcome-1"
                        className="mb-5 text-4xl font-bold text-center text-gray-100 md:text-center md:mb-10 md:text-8xl"
                    >
                        Let Me Introduce
                    </h1>
                    <h1
                        id="welcome-2"
                        className="mb-5 text-4xl font-bold text-center text-gray-100 md:text-center md:mb-10 md:text-8xl"
                    >
                        My Self As Web
                    </h1>
                    <h1
                        id="welcome-3"
                        className="mb-5 text-4xl font-bold text-center text-gray-100 md:text-center md:mb-10 md:text-8xl"
                    >
                        Developer
                    </h1>
                </div>
            </div>
        </div>
    );
}
