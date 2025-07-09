import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const ProjectDetails = [
    {
        title: "Drawing App",
        description:
            "A feature-rich web-based drawing application designed for creative freedom. Users can draw with various brush sizes and colors, erase, undo/redo actions, and export their artwork as images. Built using the Canvas API and optimized for performance in modern browsers. Designed with a clean, intuitive UI and fully responsive for mobile/tablet use.",
        tech: ["React", "Canvas API", "Tailwind", "Konva", "Framer-Motions"],
        github: "https://github.com/SahilSharma1212/drawing-app-using-Konva/",
        live: "https://sahilsharma1212.github.io/drawing-app-using-Konva/",
        images: ["/img1.png", "/img2.png", "/img3.png"],
    },
    {
        title: "AI Resume Builder",
        description:
            "An AI-powered resume builder that generates job-tailored resumes based on user input. Integrates Google's Gemini API to auto-fill relevant achievements, skills, and experience. Includes editable sections, live PDF preview, and export to both Word and PDF formats. Fully authenticated with OAuth and email sign-in, and backed by a custom MongoDB/Next.js API.",
        tech: ["Next.js", "MongoDB", "Tailwind", "Gemini-API", "Jwt", "ShadCn", "Mailtrap"],
        github: "https://github.com/SahilSharma1212/Next.js-AI-Powered-Resume-Builder",
        live: "https://next-js-ai-powered-resume-builder-fwdy8bnnw.vercel.app/",
        images: ["/resume1.png", "/resume2.png", "/resume3.png"],
    },
    {
        title: "Budgeting App",
        description:
            "Dashboard - Spending Summary Overview This is a spending summary dashboard built using React, Next.js, and Recharts for visualizing transaction data. The app allows users to filter transactions based on a selected timeframe (week or month) and see a bar chart representation of spending across different categories. Users can also compare their actual spending with their budgeted amounts to see how they are tracking.",
        tech: ["Next.js", "MongoDB", "Tailwind", "Gemini-API", "Jwt", "ShadCn", "Mailtrap"],
        github: "https://github.com/SahilSharma1212/finance-tracker",
        live: "https://finance-tracker-coral-gamma.vercel.app/",
        images: ["/resume1.png", "/resume2.png", "/resume3.png"],
    },
    {
        title: "Mental Health Analyser",
        description:
            "An advanced collaborative sketching platform that allows multiple users to draw in real-time. Built with WebSockets for live sync across sessions, and integrated saving, erasing, and editing tools. Ideal for remote brainstorming, whiteboarding, and team ideation. Features session replay, access control, and a modern minimalist design interface.",
        tech: ["Python", "ML", "Logical Regression", "Scikit-learn", "Streamlit"],
        github: "https://github.com/yourusername/drawing-web",
        live: "",
        images: ["/drawweb1.png", "/drawweb2.png", "/drawweb3.png"],
    },
];


export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center min-h-screen text-white px-6 py-16">
            <h1 className="text-4xl font-bold mb-12">Projects</h1>

            <div className="flex max-lg:flex-col w-full justify-center relative gap-12">
                {/* Project Cards */}
                <div className="flex flex-col gap-6 relative z-10">
                    {ProjectDetails.map((project, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`transition-all duration-500 ease-in-out cursor-pointer rounded-xl overflow-hidden bg-gradient-to-b  from-[#0e0c26] to-[#0f091a] px-6 py-4 border border-zinc-800  shadow-indigo-600/25 ${isActive
                                    ? "absolute left-[24rem] top-0 z-20 w-[48rem] h-[650px] shadow-2xl"
                                    : "w-[20rem] h-[12rem] shadow"
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

                                 {/* description */}
                                {!isActive && (

                                    <div className="text-gray-400">
                                        <p><span className="font-bold">Description: </span>{project.description.substring(0, 60)}....</p>


                                        <div className="flex gap-3 mt-2 text-indigo-200">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 hover:text-white bg-gray-500/50 px-2 py-1 rounded-md"
                                                    
                                                >
                                                    <FaGithub /> GitHub
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 hover:text-white bg-gray-500/50 px-2 py-1 rounded-md"
                                                >
                                                    <FaExternalLinkAlt /> Live
                                                </a>
                                            )}
                                        </div>

                                    </div>
                                )}


                                {isActive && (
                                    <div className="mt-4 space-y-6 flex justify-start gap-6">
                                        {/* Description + TechStack in Column + links */}
                                        <div className="flex flex-col gap-6 w-1/2">
                                            {/* Description */}
                                            <div className="w-full bg-blue-200/10 p-4 rounded-lg">
                                                <h3 className="text-white/80 font-semibold mb-1">Description</h3>
                                                <p className="text-white/90 text-sm">{project.description}</p>
                                            </div>

                                            {/* TechStack */}
                                            <div className="w-full bg-blue-200/10 p-4 rounded-lg">
                                                <h3 className="text-white/80 font-semibold mb-2">Tech Stack</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="bg-white/10 border border-white/20 px-3 py-1 text-sm rounded-xl"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* links */}
                                            <div className="flex gap-6 text-indigo-200">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 hover:text-white
                                                        bg-gray-500/50 px-2 py-1 rounded-md shadow-lg shadow-indigo-400/10"
                                                    >
                                                        <FaGithub /> GitHub
                                                    </a>
                                                )}
                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 hover:text-white
                                                        bg-gray-500/50 px-2 py-1 rounded-md shadow-lg shadow-indigo-400/10"
                                                    >
                                                        <FaExternalLinkAlt /> Live
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Images in Flex Row */}
                                        <div className="flex flex-col gap-4 overflow-x-auto mt-2 pb-1">
                                            {project.images.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt={`Preview ${i + 1}`}
                                                    className="rounded-lg object-cover h-36 w-64 border border-white/10 flex-shrink-0"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Placeholder to maintain layout */}
                <div className="w-[48rem] h-[650px] rounded-xl p-6 transition-opacity duration-500 max-lg:mt-8" />
            </div>
        </div>
    );
}
