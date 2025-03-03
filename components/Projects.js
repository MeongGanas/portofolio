import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ProjectCard({ title, desc, image, index, url }) {
    useGSAP(() => {
        gsap.to(`#project-text-${index}`, {
            yPercent: 130,
            ease: "none",
            scrollTrigger: {
                trigger: `#container-project-${index}`,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });
    }, []);

    return (
        <div
            className="flex flex-wrap h-screen py-32"
            id={`container-project-${index}`}
        >
            <div className="w-full mb-5 md:mb-0 md:h-full max-h-[500px] md:w-1/2">
                <div
                    className="hidden md:block h-fit sticky top-0"
                    id={`project-text-${index}`}
                >
                    <h1 className="mb-5 font-bold uppercase text-7xl lg:text-8xl">
                        {title}
                    </h1>
                    <p className="uppercase">{desc}</p>
                </div>
                <div className="block md:hidden h-fit">
                    <div className="mb-5 font-bold uppercase text-7xl lg:text-8xl">
                        {title}
                    </div>
                    <p className="uppercase">{desc}</p>
                </div>
            </div>
            <Link
                href={url}
                target="_blank"
                className="relative w-full h-full overflow-hidden transition-all rounded-md max-h-96 md:max-h-none side-image md:w-1/2 border shadow-sm"
                id={image}
            ></Link>
        </div>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "celebes digital",
            desc: "a software house web.",
            image: "celebes",
            url: "https://demo.celebesdigital.id/",
        },
        {
            title: "student council",
            desc: "a student council web.",
            image: "osis",
            url: "https://osis-smktelkom-makassar.vercel.app/",
        },
        {
            title: "kjpp website",
            desc: "a property sales web.",
            image: "kjpp",
            url: "https://kjpp-client.vercel.app/",
        },
        {
            title: "present website",
            desc: "a absence attendance web.",
            image: "present",
            url: "https://present-client-green.vercel.app",
        },
    ];
    return (
        <div className="relative z-[40] py-20 px-10 bg-white">
            {projects.map((project, i) => (
                <ProjectCard
                    title={project.title}
                    desc={project.desc}
                    image={project.image}
                    index={i}
                    key={i}
                    url={project.url}
                />
            ))}
        </div>
    );
}
