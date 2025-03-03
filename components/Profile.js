import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const sertifikat = [
    {
        name: "Basic of web programming",
        image: "dasar",
        url: "https://dicoding.com/certificates/0LZ01Q9RQP65",
    },
    {
        name: "Front-end Web for Beginner",
        image: "frontend",
        url: "https://dicoding.com/certificates/NVP7K4MQRZR0",
    },
    {
        name: "Introducing to programming logic",
        image: "logika",
        url: "https://dicoding.com/certificates/1OP81W1GLZQK",
    },
    {
        name: "Basic of software development",
        image: "software",
        url: "https://dicoding.com/certificates/07Z68WON2XQR",
    },
    {
        name: "Basic of data visualisation",
        image: "visualisasi",
        url: "https://dicoding.com/certificates/L4PQ854R4ZO1",
    },
];

export default function Profile() {
    const containerRef = useRef(null);
    const scrollContentRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(scrollContentRef.current, {
                x: "-60%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    useGSAP(() => {
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
        <div className="px-10 py-10">
            <div className="flex flex-wrap">
                <div className="hidden md:block md:w-1/3 h-[35%] sticky top-20">
                    <h1 className="mb-5 text-4xl text-left text-white md:text-6xl md:mb-0">
                        My Profile
                    </h1>
                </div>

                <div className="flex w-full h-full md:w-2/3">
                    <div id="desc" className="h-fit text-justify">
                        <p className="inline text-xl md:text-4xl">
                            My name is Farrel Giovanni Jaohari, and I am 17
                            years old. I live in Makassar, South Sulawesi,
                            Indonesia.{" "}
                        </p>
                        <p className="inline text-xl md:text-4xl">
                            Currently, I am a student at a vocational high
                            school.{" "}
                        </p>
                        <p className="inline text-xl md:text-4xl">
                            I am passionate about web development and have honed
                            my skills as both a frontend and backend developer.{" "}
                        </p>
                        <p className="inline text-xl md:text-4xl">
                            My expertise includes working with technologies such
                            as Next.js, React, Laravel, and Tailwind CSS.{" "}
                        </p>
                        <p className="inline text-xl md:text-4xl">
                            Through my studies and various projects, I have
                            gained valuable experience in creating and managing
                            dynamic and responsive web applications. Here are my
                            certificates:
                        </p>
                    </div>
                </div>
            </div>

            <div
                ref={containerRef}
                className="relative h-[300vh] hidden md:block mt-20"
            >
                <div className="sticky top-1/4 overflow-hidden">
                    <div className="flex items-center">
                        <div ref={scrollContentRef} className="flex gap-10">
                            {sertifikat.map((sertif, index) => (
                                <Link
                                    href={sertif.url}
                                    target="_blank"
                                    key={index}
                                    className="relative overflow-hidden transition-all rounded-md md:max-h-none side-image shadow-sm min-w-[700px]"
                                >
                                    <img
                                        src={`/sertifikat/${sertif.image}.svg`}
                                        alt={sertif.name}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-5 mt-5 md:hidden">
                {sertifikat.map((sertif, index) => (
                    <Link
                        href={sertif.url}
                        target="_blank"
                        key={index}
                        className="relative overflow-hidden transition-all rounded-md md:max-h-none side-image shadow-sm w-full block"
                    >
                        <img
                            src={`/sertifikat/${sertif.image}.svg`}
                            alt={sertif.name}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
