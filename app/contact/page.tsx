import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="term-window max-w-2xl mx-auto">
        <div className="term-bar">
          <span className="font-mono text-xs text-zinc-400 ml-10">musabbir@portfolio — ~/contact</span>
        </div>
        <div className="p-6 space-y-6">

          <p className="term-prompt">cat contact.info</p>

          {/* Book a call — most prominent */}
          <div className="border border-green-700/40 bg-green-900/10 rounded p-5">
            <p className="font-mono text-xs text-zinc-500 mb-3">// preferred contact method</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HiOutlineCalendar className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm font-bold text-white">Book a call</p>
                  <p className="font-mono text-xs text-zinc-500 mt-0.5">30 min · free</p>
                </div>
              </div>
              <a
                href="https://cal.com/sagarmusabbir"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs px-4 py-2 border border-green-700/60 text-green-400 hover:border-green-500 hover:bg-green-900/20 rounded transition-all"
              >
                ./schedule ↗
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="border border-zinc-700/50 rounded p-5">
            <p className="font-mono text-xs text-zinc-500 mb-4">// direct contact</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <HiOutlineMail className="w-4 h-4 text-zinc-500" />
                <a
                  href="mailto:musabbir@thirdbracket.co.uk"
                  className="font-mono text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  musabbir@thirdbracket.co.uk
                </a>
              </div>
              <div className="flex items-center gap-4">
                <HiOutlineLocationMarker className="w-4 h-4 text-zinc-500" />
                <span className="font-mono text-sm text-zinc-400">Bangladesh &amp; UK</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="border border-zinc-700/50 rounded p-5">
            <p className="font-mono text-xs text-zinc-500 mb-4">// social links</p>
            <div className="space-y-3">
              <a
                href="https://github.com/musabbirsagar"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 group"
              >
                <FaGithub className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="font-mono text-sm text-zinc-400 group-hover:text-white transition-colors">
                  github.com/musabbirsagar
                </span>
              </a>
              <a
                href="https://linkedin.com/in/musabbirsagar"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 group"
              >
                <FaLinkedin className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="font-mono text-sm text-zinc-400 group-hover:text-white transition-colors">
                  linkedin.com/in/musabbirsagar
                </span>
              </a>
              <a
                href="https://facebook.com/musabbirsagar"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 group"
              >
                <FaFacebook className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="font-mono text-sm text-zinc-400 group-hover:text-white transition-colors">
                  facebook.com/musabbirsagar
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
