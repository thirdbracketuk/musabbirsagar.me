import { fetchWork } from "@/lib/api";
import Image from "next/image";

export default async function PortfolioPage() {
  const works = await fetchWork();

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Portfolio</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work: any) => (
          <article
            key={work.slug}
            className="bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-6 hover:shadow-lg hover:bg-zinc-800/80 transition-all"
          >
            {work.heroImage.url && (
              <Image
                src={`https://thirdbracket.co.uk${work.heroImage.url}`}
                width={400}
                height={200}
                alt={work.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2 text-white">
              {work.title}
            </h2>
            <p className="text-zinc-300 mb-4">{work.summary}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {work.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-zinc-700/50 text-zinc-200 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {work.liveWebsite && (
                <a
                  href={work.liveWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-700/50 backdrop-blur-sm border border-zinc-600/50 text-white px-3 py-1 rounded text-sm hover:bg-zinc-600/50 transition-all"
                >
                  Live Site
                </a>
              )}
              {work.github && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-white px-3 py-1 rounded text-sm hover:bg-gray-600/50 transition-all"
                >
                  GitHub
                </a>
              )}
              {work.behance && (
                <a
                  href={work.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-white px-3 py-1 rounded text-sm hover:bg-gray-600/50 transition-all"
                >
                  Behance
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {works.length === 0 && (
        <p className="text-center text-zinc-400 py-12">No projects found.</p>
      )}
    </main>
  );
}
