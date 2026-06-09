import "./globals.css";
import type { Metadata } from "next";
import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Share_Tech_Mono, Inter } from "next/font/google";

const shareTechMono = Share_Tech_Mono({
  weight: "400", // This font only comes in weight 400
  subsets: ["latin"],
  variable: "--font-display", // Creates a CSS variable name
});

// 3. Configure Inter (Body Font)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body", // Creates a CSS variable name
});

export const metadata: Metadata = {
  title: "Musabbir Sagar - Portfolio",
  description: "Full-stack developer and designer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${shareTechMono.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* Floating Nav */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-full px-6 py-3 shadow-xl shadow-black/40">
            <div className="flex items-center gap-1">
              {/* Terminal dots */}
              <div className="flex items-center gap-1.5 mr-4 pr-4 border-r border-zinc-700/50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-0.5">
                <a
                  href="/"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-xs"
                  title="Home"
                >
                  <HiOutlineHome className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">~</span>
                </a>
                <a
                  href="/about"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-xs"
                >
                  <HiOutlineUser className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">about</span>
                </a>
                <a
                  href="/portfolio"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-xs"
                >
                  <HiOutlineBriefcase className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">work</span>
                </a>
                <a
                  href="/blog"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-xs"
                >
                  <HiOutlineDocumentText className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">blog</span>
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-xs"
                >
                  <HiOutlineMail className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">contact</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="pt-20">{children}</div>

        {/* Normal footer */}
        <footer className="border-t border-zinc-800 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="font-mono text-xs text-zinc-500">
                <span className="text-zinc-600">$ </span>
                <span>musabbir@portfolio</span>
                <span className="text-zinc-600"> — </span>
                <span>© 2025</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/musabbirsagar"
                  target="_blank"
                  rel="noopener"
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/musabbirsagar"
                  target="_blank"
                  rel="noopener"
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/musabbirsagar"
                  target="_blank"
                  rel="noopener"
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
              </div>
              <div className="font-mono text-xs text-zinc-600">
                Co-founder at{" "}
                <a
                  href="https://thirdbracket.co.uk"
                  target="_blank"
                  rel="noopener"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Third Bracket
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
