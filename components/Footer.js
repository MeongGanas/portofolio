import { useGSAP } from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    useGSAP(() => {
        gsap.from(".email-letter", {
            autoAlpha: 0,
            y: 20,
            stagger: 0.1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: "#email-container",
                scrub: 1,
                start: "top 90%",
                end: "top 10%",
            },
        });
    }, []);

    const emailName = "farreluken";
    const emailType = "@gmail.com";

    return (
        <div
            className="relative z-[40] py-20 px-10 min-h-screen bg-white"
            id="email-container"
        >
            <h1 className="mb-5 uppercase">
                let&#39;s create something awesome
            </h1>
            <div className="mb-20">
                <Link
                    href={
                        "https://mail.google.com/mail/?view=cm&fs=1&to=farreluken@gmail.com"
                    }
                    target="_blank"
                    className="block text-[44px] font-bold uppercase md:text-8xl lg:text-9xl"
                >
                    <div className="mb-10 md:mb-16">
                        {emailName.split("").map((letter, index) => (
                            <span
                                key={index}
                                className="inline-block border-b-8 email-letter border-b-black"
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                    <div>
                        {emailType.split("").map((letter, index) => (
                            <span
                                key={index}
                                className="inline-block border-b-8 email-letter border-b-black"
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                </Link>
            </div>
            <div className="absolute bottom-0 left-0 flex justify-between w-full px-10 pb-10 mt-20">
                <Link href={"/"} className="uppercase">
                    farrel jaohari
                </Link>
                <div>
                    <Link
                        href={"https://instagram.com/@farreljaoharii"}
                        target="_blank"
                        className="uppercase"
                    >
                        instagram
                    </Link>
                </div>
            </div>
        </div>
    );
}
