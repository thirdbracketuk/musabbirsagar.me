// import { fetchWork } from "@/lib/api";
// import Image from "next/image";

// export default async function PortfolioPage() {
//   const works = await fetchWork();

//   return (
//     <main className="max-w-4xl mx-auto px-4 py-8">
//       <div className="term-window">
//         <div className="term-bar">
//           <span className="font-mono text-xs text-zinc-400 ml-10">musabbir@portfolio — ~/work</span>
//         </div>
//         <div className="p-6">
//           <p className="term-prompt mb-6">ls -la work/</p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {works.map((work: any) => (
//               <a
//                 key={work.slug}
//                 href={`https://thirdbracket.co.uk/work/${work.slug}`}
//                 target="_blank"
//                 rel="noopener"
//                 className="group border border-zinc-700/50 hover:border-zinc-500 bg-zinc-800/30 hover:bg-zinc-800/60 rounded transition-all overflow-hidden"
//               >
//                 {work.heroImage?.url && (
//                   <Image
//                     src={`https://thirdbracket.co.uk${work.heroImage.url}`}
//                     width={400}
//                     height={200}
//                     alt={work.title}
//                     className="w-full h-40 object-cover border-b border-zinc-700/50"
//                   />
//                 )}
//                 <div className="p-4">
//                   <h2 className="text-sm font-bold text-white group-hover:text-zinc-200 mb-2 leading-snug">
//                     {work.title}
//                   </h2>
//                   <p className="text-xs text-zinc-500 mb-3 leading-relaxed line-clamp-2">
//                     {work.summary}
//                   </p>
//                   <div className="flex flex-wrap gap-1 mb-3">
//                     {work.technologies?.map((tech: string) => (
//                       <span
//                         key={tech}
//                         className="font-mono text-xs text-zinc-500 border border-zinc-700 px-1.5 py-0.5 rounded"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-2">
//                     {work.liveWebsite && (
//                       <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500">
//                         live ↗
//                       </span>
//                     )}
//                     {work.github && (
//                       <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500">
//                         github ↗
//                       </span>
//                     )}
//                     {work.behance && (
//                       <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500">
//                         behance ↗
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//           {works.length === 0 && (
//             <p className="text-zinc-600 font-mono text-sm">// no projects found</p>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

import { fetchWork } from "@/lib/api";
import Image from "next/image";

export default async function PortfolioPage() {
  const works = await fetchWork();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="term-window">
        <div className="term-bar">
          <span className="font-mono text-xs text-zinc-400 ml-10">
            musabbir@portfolio — ~/work
          </span>
        </div>
        <div className="p-6">
          <p className="term-prompt mb-4">ls -la work/</p>

          {/* Solo / Third Bracket disclosure — visible before any card */}
          <div className="mb-6 border border-zinc-700/50 bg-zinc-800/30 rounded p-4 font-mono text-xs text-zinc-400 leading-relaxed">
            <p className="text-zinc-500 mb-1"># cat about-this-work.md</p>
            <p>
              Every project below was designed and built solo by me, delivered
              through{" "}
              <a
                href="https://thirdbracket.co.uk"
                target="_blank"
                rel="noopener"
                className="text-zinc-200 border-b border-zinc-600 hover:border-zinc-300 transition-colors"
              >
                Third Bracket
              </a>
              , my own studio. Each card links out to the full case study on{" "}
              <span className="text-zinc-300">thirdbracket.co.uk</span> —
              external links open in a new tab.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {works.map((work: any) => {
              const caseStudyUrl = `https://thirdbracket.co.uk/work/${work.slug}`;
              return (
                <div
                  key={work.slug}
                  className="group border border-zinc-700/50 hover:border-zinc-500 bg-zinc-800/30 hover:bg-zinc-800/60 rounded transition-all overflow-hidden flex flex-col"
                >
                  {/* Image links to the case study — badge makes the destination explicit */}

                  <a
                    href={caseStudyUrl}
                    target="_blank"
                    rel="noopener"
                    aria-label={`View ${work.title} case study on Third Bracket`}
                    className="relative block aspect-[16/9] overflow-hidden border-b border-zinc-700/50 bg-zinc-900"
                  >
                    {work.heroImage?.url ? (
                      <Image
                        src={`https://thirdbracket.co.uk${work.heroImage.url}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        alt={work.title}
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                        <span className="font-mono text-3xl text-zinc-600 tracking-widest">
                          {work.title
                            ?.split(" ")
                            .map((w: string) => w[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </span>
                      </div>
                    )}
                    <span className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/70 text-zinc-300 border border-zinc-700/80 backdrop-blur-sm">
                      ↗ thirdbracket.co.uk
                    </span>
                  </a>

                  <div className="p-4 flex flex-col flex-1">
                    <a
                      href={caseStudyUrl}
                      target="_blank"
                      rel="noopener"
                      className="hover:underline decoration-zinc-600 underline-offset-2"
                    >
                      <h2 className="text-sm font-bold text-white group-hover:text-zinc-200 mb-2 leading-snug">
                        {work.title}
                      </h2>
                    </a>
                    <p className="text-xs text-zinc-500 mb-3 leading-relaxed line-clamp-2">
                      {work.summary}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {work.technologies?.map((tech: string) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-zinc-500 border border-zinc-700 px-1.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Real, separate links — each pill goes exactly where it says */}
                    <div className="flex flex-wrap gap-2 mt-auto mb-3">
                      <a
                        href={caseStudyUrl}
                        target="_blank"
                        rel="noopener"
                        className="font-mono text-xs text-zinc-200 border border-zinc-600 px-2 py-0.5 rounded hover:border-zinc-400 hover:bg-zinc-700/40 transition-colors"
                      >
                        case study ↗
                      </a>
                      {work.liveWebsite && (
                        <a
                          href={work.liveWebsite}
                          target="_blank"
                          rel="noopener"
                          className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500 hover:text-zinc-200 transition-colors"
                        >
                          live ↗
                        </a>
                      )}
                      {work.github && (
                        <a
                          href={work.github}
                          target="_blank"
                          rel="noopener"
                          className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500 hover:text-zinc-200 transition-colors"
                        >
                          github ↗
                        </a>
                      )}
                      {work.behance && (
                        <a
                          href={work.behance}
                          target="_blank"
                          rel="noopener"
                          className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500 hover:text-zinc-200 transition-colors"
                        >
                          behance ↗
                        </a>
                      )}
                    </div>

                    <p className="font-mono text-[10px] text-zinc-600 border-t border-zinc-800 pt-2">
                      solo build · via Third Bracket
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {works.length === 0 && (
            <p className="text-zinc-600 font-mono text-sm">
              // no projects found
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
