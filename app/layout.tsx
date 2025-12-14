import './globals.css'
import type { Metadata } from 'next'
import { HiOutlineHome, HiOutlineDocumentText, HiOutlineBriefcase, HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Musabbir Sagar - Portfolio',
  description: 'Full-stack developer and designer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-800">
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-zinc-800/20 backdrop-blur-md border border-zinc-700/30 rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-6">
              <a href="/" className="flex items-center text-zinc-300 hover:text-white transition-colors" title="Home">
                <HiOutlineHome className="w-5 h-5" />
              </a>
              <a href="/blog" className="flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors">
                <HiOutlineDocumentText className="w-5 h-5" />
                <span className="text-sm font-medium">Blog</span>
              </a>
              <a href="/portfolio" className="flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors">
                <HiOutlineBriefcase className="w-5 h-5" />
                <span className="text-sm font-medium">Portfolio</span>
              </a>
              <a href="/about" className="flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors">
                <span className="text-sm font-medium">About</span>
              </a>
              <a href="/contact" className="flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors">
                <HiOutlineMail className="w-5 h-5" />
                <span className="text-sm font-medium">Contact</span>
              </a>
            </div>
          </div>
        </nav>
        <div className="pt-20 pb-16">
          {children}
        </div>
        
        {/* Footer */}
        <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-zinc-800/20 backdrop-blur-md border border-zinc-700/30 rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-xs font-mono text-zinc-400">
                <span>© 2025 musabbir@portfolio</span>
                <span className="text-zinc-600">|</span>
                <span>status: online</span>
              </div>
              <div className="flex items-center space-x-3">
                <a href="https://github.com/musabbirsagar" target="_blank" rel="noopener noreferrer" 
                   className="text-zinc-300 hover:text-white transition-colors">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/musabbirsagar" target="_blank" rel="noopener noreferrer" 
                   className="text-zinc-300 hover:text-white transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="https://facebook.com/musabbirsagar" target="_blank" rel="noopener noreferrer" 
                   className="text-zinc-300 hover:text-white transition-colors">
                  <FaFacebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}