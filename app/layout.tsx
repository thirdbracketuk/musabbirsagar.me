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
import { JetBrains_Mono, Outfit } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
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
      className={`${jetbrainsMono.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* Floating Nav */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60 rounded-full px-5 py-2.5 shadow-xl shadow-black/40">
            <div className="flex items-center gap-0.5">
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-sm"
                title="Home"
              >
                <HiOutlineHome className="w-5 h-5" />
                <span className="hidden md:inline font-mono text-xs">~</span>
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 px-3 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-sm"
              >
                <HiOutlineUser className="w-5 h-5" />
                <span className="hidden md:inline font-mono text-xs">about</span>
              </a>
              <a
                href="/portfolio"
                className="flex items-center gap-2 px-3 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-sm"
              >
                <HiOutlineBriefcase className="w-5 h-5" />
                <span className="hidden md:inline font-mono text-xs">work</span>
              </a>
              <a
                href="/blog"
                className="flex items-center gap-2 px-3 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-sm"
              >
                <HiOutlineDocumentText className="w-5 h-5" />
                <span className="hidden md:inline font-mono text-xs">blog</span>
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 px-3 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all text-sm"
              >
                <HiOutlineMail className="w-5 h-5" />
                <span className="hidden md:inline font-mono text-xs">contact</span>
              </a>
            </div>
          </div>
        </nav>

        <div className="pt-20">{children}</div>

        {/* Normal footer */}
        <footer className="border-t border-zinc-800 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="font-mono text-xs text-zinc-400">
                <span className="text-zinc-600">$ </span>
                <span>musabbir@portfolio</span>
                <span className="text-zinc-600"> — </span>
                <span>© 2025</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sagarmusabbir/sagarmusabbir"
                  target="_blank"
                  rel="noopener"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sagarmusabbir/"
                  target="_blank"
                  rel="noopener"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/wwolverinee"
                  target="_blank"
                  rel="noopener"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
              </div>
              <div className="font-mono text-xs text-zinc-400">
                Co-founder at{" "}
                <a
                  href="https://thirdbracket.co.uk"
                  target="_blank"
                  rel="noopener"
                  className="text-zinc-200 hover:text-white transition-colors"
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
