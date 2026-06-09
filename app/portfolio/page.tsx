import { fetchWork } from "@/lib/api";
import Image from "next/image";

export default async function PortfolioPage() {
  const works = await fetchWork();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="term-window">
        <div className="term-bar">
          <span className="font-mono text-xs text-zinc-400 ml-10">musabbir@portfolio — ~/work</span>
        </div>
        <div className="p-6">
          <p className="term-prompt mb-6">ls -la work/</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work: any) => (
              <a
                key={work.slug}
                href={`https://thirdbracket.co.uk/work/${work.slug}`}
                target="_blank"
                rel="noopener"
                className="group border border-zinc-700/50 hover:border-zinc-500 bg-zinc-800/30 hover:bg-zinc-800/60 rounded transition-all overflow-hidden"
              >
                {work.heroImage?.url && (
                  <Image
                    src={`https://thirdbracket.co.uk${work.heroImage.url}`}
                    width={400}
                    height={200}
                    alt={work.title}
                    className="w-full h-40 object-cover border-b border-zinc-700/50"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-sm font-bold text-white group-hover:text-zinc-200 mb-2 leading-snug">
                    {work.title}
                  </h2>
                  <p className="text-xs text-zinc-500 mb-3 leading-relaxed line-clamp-2">
                    {work.summary}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {work.technologies?.map((tech: string) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-zinc-500 border border-zinc-700 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {work.liveWebsite && (
                      <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500">
                        live ↗
                      </span>
                    )}
                    {work.github && (
                      <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500">
                        github ↗
                      </span>
                    )}
                    {work.behance && (
                      <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded hover:border-zinc-500">
                        behance ↗
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
          {works.length === 0 && (
            <p className="text-zinc-600 font-mono text-sm">// no projects found</p>
          )}
        </div>
      </div>
    </main>
  );
}
