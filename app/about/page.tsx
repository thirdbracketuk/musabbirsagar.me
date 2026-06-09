export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="term-window">
        <div className="term-bar">
          <span className="font-mono text-xs text-zinc-400 ml-10">musabbir@portfolio — ~/about</span>
        </div>
        <div className="p-6 space-y-8">

          <div>
            <p className="term-prompt mb-4">whoami</p>
            <p className="text-zinc-300 text-sm leading-relaxed mb-3">
              Full-stack developer and designer passionate about building digital
              experiences that make a difference. Co-founder of{" "}
              <a
                href="https://thirdbracket.co.uk"
                target="_blank"
                rel="noopener"
                className="text-zinc-200 border-b border-zinc-600 hover:border-zinc-400 transition-colors"
              >
                Third Bracket
              </a>
              , a web design and branding agency based in Manchester.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Available for freelance collaborations. Let's build something great together.
            </p>
            <div className="mt-5">
              <a
                href="https://cal.com/sagarmusabbir"
                target="_blank"
                rel="noopener"
                className="inline-block font-mono text-xs px-4 py-2 border border-green-700/60 text-green-400 hover:border-green-500 hover:bg-green-900/20 rounded transition-all"
              >
                ./book-a-call ↗
              </a>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <p className="term-prompt mb-6">ls -la skills/</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-700/50 rounded p-4">
                <p className="font-mono text-xs text-zinc-500 mb-3">// frontend</p>
                <ul className="space-y-2 font-mono text-sm text-zinc-300">
                  <li><span className="text-zinc-600">→ </span>React / Next.js</li>
                  <li><span className="text-zinc-600">→ </span>TypeScript</li>
                  <li><span className="text-zinc-600">→ </span>Tailwind CSS</li>
                  <li><span className="text-zinc-600">→ </span>Vue.js</li>
                </ul>
              </div>
              <div className="border border-zinc-700/50 rounded p-4">
                <p className="font-mono text-xs text-zinc-500 mb-3">// backend</p>
                <ul className="space-y-2 font-mono text-sm text-zinc-300">
                  <li><span className="text-zinc-600">→ </span>Node.js</li>
                  <li><span className="text-zinc-600">→ </span>Python</li>
                  <li><span className="text-zinc-600">→ </span>PostgreSQL</li>
                  <li><span className="text-zinc-600">→ </span>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <p className="term-prompt mb-6">cat experience.txt</p>
            <div className="border border-zinc-700/50 rounded p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-mono text-sm font-bold text-white">
                  <a
                    href="https://thirdbracket.co.uk"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-zinc-300 transition-colors"
                  >
                    Third Bracket Ltd ↗
                  </a>
                </h4>
                <span className="font-mono text-xs text-zinc-600">2020 – present</span>
              </div>
              <p className="font-mono text-xs text-zinc-500 mb-2">Co-founder &amp; Full-stack Developer</p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Building web applications, design systems, and digital solutions
                for clients across the UK and Bangladesh.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
