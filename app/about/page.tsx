// export default function AboutPage() {
//   return (
//     <main className="max-w-4xl mx-auto px-4 py-8">
//       <div className="term-window">
//         <div className="term-bar">
//           <span className="font-mono text-sm text-zinc-300">musabbir@portfolio — ~/about</span>
//         </div>
//         <div className="p-6 space-y-8">

//           <div>
//             <p className="term-prompt mb-4 text-base">whoami</p>
//             <p className="text-zinc-300 text-base leading-relaxed mb-3">
//               Full-stack developer and designer passionate about building digital
//               experiences that make a difference. Co-founder of{" "}
//               <a
//                 href="https://thirdbracket.co.uk"
//                 target="_blank"
//                 rel="noopener"
//                 className="text-zinc-100 border-b border-zinc-500 hover:border-zinc-300 transition-colors"
//               >
//                 Third Bracket
//               </a>
//               , a web design and branding agency based in Manchester.
//             </p>
//             <p className="text-zinc-400 text-base leading-relaxed">
//               Available for freelance collaborations. Let&apos;s build something great together.
//             </p>
//             <div className="mt-5">
//               <a
//                 href="https://cal.com/sagarmusabbir"
//                 target="_blank"
//                 rel="noopener"
//                 className="inline-block font-mono text-sm px-4 py-2 border border-green-600/70 text-green-400 hover:border-green-400 hover:bg-green-900/20 rounded transition-all"
//               >
//                 ./book-a-call ↗
//               </a>
//             </div>
//           </div>

//           <div className="border-t border-zinc-800 pt-8">
//             <p className="term-prompt mb-6 text-base">ls -la skills/</p>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="border border-zinc-700/50 rounded p-4">
//                 <p className="font-mono text-sm text-zinc-400 mb-3">// frontend</p>
//                 <ul className="space-y-2 font-mono text-base text-zinc-300">
//                   <li><span className="text-zinc-600">→ </span>React / Next.js</li>
//                   <li><span className="text-zinc-600">→ </span>TypeScript</li>
//                   <li><span className="text-zinc-600">→ </span>Tailwind CSS</li>
//                   <li><span className="text-zinc-600">→ </span>Vue.js</li>
//                 </ul>
//               </div>
//               <div className="border border-zinc-700/50 rounded p-4">
//                 <p className="font-mono text-sm text-zinc-400 mb-3">// backend</p>
//                 <ul className="space-y-2 font-mono text-base text-zinc-300">
//                   <li><span className="text-zinc-600">→ </span>Node.js</li>
//                   <li><span className="text-zinc-600">→ </span>Python</li>
//                   <li><span className="text-zinc-600">→ </span>PostgreSQL</li>
//                   <li><span className="text-zinc-600">→ </span>MongoDB</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-zinc-800 pt-8">
//             <p className="term-prompt mb-6 text-base">cat experience.txt</p>
//             <div className="border border-zinc-700/50 rounded p-4">
//               <div className="flex justify-between items-start mb-2">
//                 <h4 className="font-mono text-base font-bold text-white">
//                   <a
//                     href="https://thirdbracket.co.uk"
//                     target="_blank"
//                     rel="noopener"
//                     className="hover:text-zinc-300 transition-colors"
//                   >
//                     Third Bracket Ltd ↗
//                   </a>
//                 </h4>
//                 <span className="font-mono text-sm text-zinc-500">2020 – present</span>
//               </div>
//               <p className="font-mono text-sm text-zinc-400 mb-2">Co-founder &amp; Full-stack Developer</p>
//               <p className="text-base text-zinc-300 leading-relaxed">
//                 Building web applications, design systems, and digital solutions
//                 for clients across the UK and Bangladesh.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="term-window">
        <div className="term-bar">
          <span className="font-mono text-xs text-zinc-300">
            musabbir@portfolio — ~/about
          </span>
        </div>
        <div className="p-6 space-y-8">
          <div>
            <p className="term-prompt mb-4 text-base">whoami</p>
            <p className="text-zinc-300 text-base leading-relaxed mb-3">
              Full-stack developer and designer. I design, build, and ship
              production websites solo — front end to back end, deployment, and
              the SEO/growth work that keeps them ranking. Founder of{" "}
              <a
                href="https://thirdbracket.co.uk"
                target="_blank"
                rel="noopener"
                className="text-zinc-100 border-b border-zinc-500 hover:border-zinc-300 transition-colors"
              >
                Third Bracket
              </a>
              , a one-person web design & SEO studio, and{" "}
              <a
                href="https://bayxbengal.com"
                target="_blank"
                rel="noopener"
                className="text-zinc-100 border-b border-zinc-500 hover:border-zinc-300 transition-colors"
              >
                Bay X Bengal
              </a>
              , a verified Bangladeshi exporter directory I built and grow end
              to end.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              Available for freelance collaborations. Let&apos;s build something
              great together.
            </p>
            <div className="mt-5">
              <a
                href="https://cal.com/sagarmusabbir"
                target="_blank"
                rel="noopener"
                className="inline-block font-mono text-sm px-4 py-2 border border-green-600/70 text-green-400 hover:border-green-400 hover:bg-green-900/20 rounded transition-all"
              >
                ./book-a-call ↗
              </a>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <p className="term-prompt mb-2 text-base">ls -la skills/</p>
            <p className="font-mono text-xs text-zinc-600 mb-6">
              # everything below, I do myself — no handoffs
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-zinc-700/50 hover:border-zinc-600 rounded p-4 transition-colors">
                <p className="font-mono text-sm text-zinc-400 mb-3">
                  // frontend &amp; design
                </p>
                <ul className="space-y-2 font-mono text-base text-zinc-300">
                  <li>
                    <span className="text-zinc-600">→ </span>React / Next.js
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>TypeScript /
                    JavaScript
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>Tailwind CSS / SCSS
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>BracketUI (own
                    component library)
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>Vite, WordPress /
                    Elementor
                  </li>
                </ul>
              </div>
              <div className="border border-zinc-700/50 hover:border-zinc-600 rounded p-4 transition-colors">
                <p className="font-mono text-sm text-zinc-400 mb-3">
                  // backend &amp; cms
                </p>
                <ul className="space-y-2 font-mono text-base text-zinc-300">
                  <li>
                    <span className="text-zinc-600">→ </span>Node.js
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>PayloadCMS
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>PostgreSQL /
                    MongoDB
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>REST API design
                  </li>
                </ul>
              </div>
              <div className="border border-zinc-700/50 hover:border-zinc-600 rounded p-4 transition-colors">
                <p className="font-mono text-sm text-zinc-400 mb-3">
                  // infrastructure &amp; devops
                </p>
                <ul className="space-y-2 font-mono text-base text-zinc-300">
                  <li>
                    <span className="text-zinc-600">→ </span>Vercel
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>Hetzner / Coolify
                    self-hosting
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>Cloudflare (DNS,
                    SSL, proxying)
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>CI-friendly deploy
                    pipelines
                  </li>
                </ul>
              </div>
              <div className="border border-zinc-700/50 hover:border-zinc-600 rounded p-4 transition-colors">
                <p className="font-mono text-sm text-zinc-400 mb-3">
                  // seo &amp; growth
                </p>
                <ul className="space-y-2 font-mono text-base text-zinc-300">
                  <li>
                    <span className="text-zinc-600">→ </span>Technical SEO, Core
                    Web Vitals
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>Google Analytics /
                    Search Console
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>Ahrefs, keyword
                    research
                  </li>
                  <li>
                    <span className="text-zinc-600">→ </span>Cold outreach
                    automation (Node.js, Resend)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <p className="term-prompt mb-6 text-base">cat experience.txt</p>
            <div className="space-y-4">
              <div className="border border-zinc-700/50 rounded p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-mono text-base font-bold text-white">
                    <a
                      href="https://thirdbracket.co.uk"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-zinc-300 transition-colors"
                    >
                      Third Bracket Ltd ↗
                    </a>
                  </h4>
                  <span className="font-mono text-sm text-zinc-500">
                    2020 – present
                  </span>
                </div>
                <p className="font-mono text-sm text-zinc-400 mb-2">
                  Founder &amp; Full-stack Developer (solo)
                </p>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Design, build, deploy, and grow websites and web apps for
                  clients across the UK and Bangladesh — every project on{" "}
                  <a
                    href="/portfolio"
                    className="text-zinc-300 border-b border-zinc-600 hover:border-zinc-300 transition-colors"
                  >
                    the work page
                  </a>{" "}
                  is my own solo build, end to end.
                </p>
              </div>
              <div className="border border-zinc-700/50 rounded p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-mono text-base font-bold text-white">
                    <a
                      href="https://bayxbengal.com"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-zinc-300 transition-colors"
                    >
                      Bay X Bengal ↗
                    </a>
                  </h4>
                  <span className="font-mono text-sm text-zinc-500">
                    2025 – present
                  </span>
                </div>
                <p className="font-mono text-sm text-zinc-400 mb-2">
                  Founder (solo product)
                </p>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Verified directory of Bangladeshi exporters, built and run
                  solo — scraper and data pipeline, CMS, frontend, SEO, and
                  outreach all self-built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
