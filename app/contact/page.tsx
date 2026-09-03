import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="term-window  mx-auto">
        <div className="term-bar">
          <span className="font-mono text-sm text-zinc-300">
            musabbir@portfolio — ~/contact
          </span>
        </div>
        <div className="p-6 space-y-6">
          <p className="term-prompt text-base">cat contact.info</p>

          {/* Book a call — most prominent */}
          <div className="border border-green-700/50 bg-green-900/10 rounded p-5">
            <p className="font-mono text-sm text-zinc-400 mb-3">
              // preferred contact method
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HiOutlineCalendar className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-base font-bold text-white">Book a call</p>
                  <p className="font-mono text-sm text-zinc-400 mt-0.5">
                    30 min · free
                  </p>
                </div>
              </div>
              <a
                href="https://cal.com/sagarmusabbir"
                target="_blank"
                rel="noopener"
                className="font-mono text-sm px-4 py-2 border border-green-600/70 text-green-400 hover:border-green-400 hover:bg-green-900/20 rounded transition-all"
              >
                ./schedule ↗
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="border border-zinc-700/50 rounded p-5">
            <p className="font-mono text-sm text-zinc-400 mb-4">
              // direct contact
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <HiOutlineMail className="w-5 h-5 text-zinc-400" />
                <a
                  href="mailto:musabbir@thirdbracket.co.uk"
                  className="font-mono text-base text-zinc-300 hover:text-white transition-colors"
                >
                  musabbir@thirdbracket.co.uk
                </a>
              </div>
              <div className="flex items-center gap-4">
                <HiOutlineLocationMarker className="w-5 h-5 text-zinc-400" />
                <span className="font-mono text-base text-zinc-300">
                  Bangladesh &amp; UK
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="border border-zinc-700/50 rounded p-5">
            <p className="font-mono text-sm text-zinc-400 mb-4">
              // social links
            </p>
            <div className="space-y-4">
              <a
                href="https://github.com/sagarmusabbir/sagarmusabbir"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 group"
              >
                <FaGithub className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="font-mono text-base text-zinc-300 group-hover:text-white transition-colors">
                  github.com/sagarmusabbir
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/sagarmusabbir/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 group"
              >
                <FaLinkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="font-mono text-base text-zinc-300 group-hover:text-white transition-colors">
                  linkedin.com/in/sagarmusabbir
                </span>
              </a>
              <a
                href="https://www.facebook.com/wwolverinee"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 group"
              >
                <FaFacebook className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="font-mono text-base text-zinc-300 group-hover:text-white transition-colors">
                  facebook.com/wwolverinee
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
