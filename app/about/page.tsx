export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="border border-zinc-600 bg-zinc-900/50 rounded-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="border-b border-zinc-600 px-8 py-6 bg-zinc-800/80 rounded-t-2xl">
          <h1 className="text-sm font-mono text-zinc-400">musabbir@portfolio:~$ about</h1>
        </div>
        
        {/* Content */}
        <div className="p-8 font-mono text-sm">
          <div className="mb-8">
            <span className="text-zinc-500 text-xs">musabbir@portfolio:~$ whoami</span>
          </div>
          
          <div className="mb-8 leading-relaxed">
            <p className="mb-4 text-white font-medium text-base">
              Full-stack developer and designer passionate about creating digital experiences 
              that make a difference. I work with modern technologies to build scalable web 
              applications and beautiful user interfaces.
            </p>
            <p className="mb-4 text-white font-medium text-base">
              Currently available for freelance projects and collaborations. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="border-t border-zinc-700 pt-8">
            <div className="mb-6">
              <span className="text-zinc-500 text-xs">musabbir@portfolio:~$ ls -la skills/</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-zinc-300">
              <div>
                <div className="border-l-2 border-zinc-500 pl-6 mb-6">
                  <h3 className="text-white font-bold text-base mb-3">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="font-medium">→ React / Next.js</li>
                    <li>→ TypeScript</li>
                    <li>→ Tailwind CSS</li>
                    <li>→ Vue.js</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="border-l-2 border-zinc-500 pl-6 mb-6">
                  <h3 className="text-white font-bold text-base mb-3">Backend</h3>
                  <ul className="space-y-2">
                    <li className="font-medium">→ Node.js</li>
                    <li>→ Python</li>
                    <li>→ PostgreSQL</li>
                    <li>→ MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-700 pt-8 mt-8">
            <div className="mb-6">
              <span className="text-zinc-500 text-xs">musabbir@portfolio:~$ cat experience.txt</span>
            </div>
            
            <div className="space-y-4 text-zinc-300">
              <div className="border border-zinc-700 p-6">
                <h4 className="text-white font-bold text-base">Third Bracket Ltd</h4>
                <p className="text-zinc-400 text-sm font-medium">2020 - Present</p>
                <p className="mt-3">Full-stack developer working on web applications and digital solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}