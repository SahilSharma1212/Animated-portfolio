export default function Footer() {
    return (
        <footer className="w-full mt-20 border-t border-gray-800 py-6 bg-gradient-to-t from-gray-950 to-transparent text-center text-gray-400 text-sm">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs md:text-sm">
                    © {new Date().getFullYear()} Sahil Sharma. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/SahilSharma1212"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:sahil@example.com"
                        className="hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sahil-sharma-822a752a9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
