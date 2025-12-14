import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto border border-zinc-600 bg-zinc-900/50 rounded-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="border-b border-zinc-600 px-8 py-6 bg-zinc-800/80 rounded-t-2xl">
          <h1 className="text-sm font-mono text-zinc-400">musabbir@portfolio:~$ contact</h1>
        </div>
        
        {/* Content */}
        <div className="p-8 font-mono text-sm">
          <div className="mb-8">
            <span className="text-zinc-500 text-xs">musabbir@portfolio:~$ cat contact.info</span>
          </div>
          
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="border border-zinc-700 p-6">
              <h2 className="text-white font-bold text-base mb-4 border-b border-zinc-700 pb-3">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <HiOutlineMail className="w-5 h-5 text-zinc-400" />
                  <span className="text-white font-medium text-base">musabbir@thirdbracket.co.uk</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <HiOutlineLocationMarker className="w-5 h-5 text-zinc-400" />
                  <span className="text-white font-medium text-base">Bangladesh & UK</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border border-zinc-700 p-6">
              <h3 className="text-white font-bold text-base mb-4 border-b border-zinc-700 pb-3">Social Links</h3>
              <div className="grid grid-cols-1 gap-3">
                <a href="https://github.com/musabbirsagar" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-4 hover:text-white transition-colors py-2">
                  <FaGithub className="w-5 h-5 text-zinc-400" />
                  <span className="text-white font-medium text-base">musabbirsagar</span>
                </a>
                <a href="https://linkedin.com/in/musabbirsagar" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-4 hover:text-white transition-colors py-2">
                  <FaLinkedin className="w-5 h-5 text-zinc-400" />
                  <span className="text-white font-medium text-base">musabbirsagar</span>
                </a>
                <a href="https://twitter.com/musabbirsagar" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-4 hover:text-white transition-colors py-2">
                  <FaTwitter className="w-5 h-5 text-zinc-400" />
                  <span className="text-white font-medium text-base">musabbirsagar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}