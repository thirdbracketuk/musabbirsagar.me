import { fetchBlogs, fetchWork } from "@/lib/api";
import Image from "next/image";

export default async function HomePage() {
  const [blogs, works] = await Promise.all([fetchBlogs(), fetchWork()]);

  const recentBlogs = blogs.slice(0, 3);
  const recentWorks = works.slice(0, 3);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Hero terminal window */}
      <div className="term-window">
        <div className="term-bar">
          <span className=" text-xs text-zinc-400 ">
            musabbir@portfolio — ~
          </span>
        </div>
        <div className="p-8">
          <p className="term-prompt mb-2">whoami</p>
          <h1 className="text-3xl font-display font-bold text-white mt-4 mb-2">
            Musabbir Sagar
          </h1>
          <p className="text-zinc-400 text-sm mb-6">
            Founder of{" "}
            <a
              href="https://thirdbracket.co.uk"
              target="_blank"
              rel="noopener"
              className="text-zinc-300 hover:text-white border-b border-zinc-600 hover:border-zinc-400 transition-all"
            >
              Third Bracket
            </a> and    <a
              href="https://www.bayxbengal.com"
              target="_blank"
              rel="noopener"
              className="text-zinc-300 hover:text-white border-b border-zinc-600 hover:border-zinc-400 transition-all"
            >
              BayofBengal
            </a>. Creator of <a
              href="https://www.thirdbracket.co.uk/bracketui"
              target="_blank"
              rel="noopener"
              className="text-zinc-300 hover:text-white border-b border-zinc-600 hover:border-zinc-400 transition-all"
            >
              Bracket UI
            </a>
          </p>

          <p className="term-prompt mb-4">ls ./actions</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="/portfolio"
              className="  text-xs px-4 py-2 border border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all rounded"
            >
              ./view-work
            </a>
            <a
              href="/about"
              className="  text-xs px-4 py-2 border border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all rounded"
            >
              ./about-me
            </a>
            <a
              href="https://cal.com/sagarmusabbir"
              target="_blank"
              rel="noopener"
              className="  text-xs px-4 py-2 border border-green-700/60 text-green-400 hover:border-green-500 hover:bg-green-900/20 transition-all rounded"
            >
              ./book-a-call
            </a>
            <a
              href="/contact"
              className="  text-xs px-4 py-2 border border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all rounded"
            >
              ./contact
            </a>
          </div>
        </div>
      </div>

      {/* Recent Work */}
      <div className="term-window">
        <div className="term-bar">
          <span className="  text-xs text-zinc-400 ml-10">
            musabbir@portfolio — ~/work
          </span>
        </div>
        <div className="p-6">
          <p className="term-prompt mb-6">ls -la work/ | head -3</p>
          <div className="grid md:grid-cols-3 gap-4">
            {recentWorks.map((work: any) => (
              <a
                key={work.slug}
                href={`https://thirdbracket.co.uk/work/${work.slug}`}
                target="_blank"
                rel="noopener"
                className="group border border-zinc-700/50 hover:border-zinc-500 bg-zinc-800/30 hover:bg-zinc-800/60 rounded transition-all overflow-hidden"
              >
                {work.heroImage?.url && (
                  <Image
                    width={400}
                    height={200}
                    src={`https://thirdbracket.co.uk${work.heroImage.url}`}
                    alt={work.title}
                    className="w-full h-36 object-cover border-b border-zinc-700/50"
                  />
                )}
                <div className="p-4">
                  <p className="text-xs text-zinc-500   mb-1">./work/</p>
                  <h3 className="text-sm font-bold text-white group-hover:text-zinc-200 mb-2 leading-tight">
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {work.technologies?.slice(0, 3).map((tech: string) => (
                      <span
                        key={tech}
                        className="  text-xs text-zinc-500 border border-zinc-700 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
          {recentWorks.length === 0 && (
            <p className="text-zinc-600   text-sm">// no results</p>
          )}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <a
              href="/portfolio"
              className="  text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              $ cd work/ &amp;&amp; ls -la{" "}
              <span className="text-zinc-600">→ view all</span>
            </a>
          </div>
        </div>
      </div>

      {/* Recent Blog */}
      <div className="term-window">
        <div className="term-bar">
          <span className="  text-xs text-zinc-400 ml-10">
            musabbir@portfolio — ~/blog
          </span>
        </div>
        <div className="p-6">
          <p className="term-prompt mb-6">ls -la blog/ | head -3</p>
          <div className="grid md:grid-cols-3 gap-4">
            {recentBlogs.map((blog: any) => (
              <a
                key={blog.slug}
                href={`https://thirdbracket.co.uk/blog/${blog.slug}`}
                target="_blank"
                rel="noopener"
                className="group border border-zinc-700/50 hover:border-zinc-500 bg-zinc-800/30 hover:bg-zinc-800/60 rounded transition-all overflow-hidden"
              >
                {blog.featuredImage?.url && (
                  <Image
                    width={400}
                    height={200}
                    src={`https://thirdbracket.co.uk${blog.featuredImage.url}`}
                    alt={blog.title}
                    className="w-full h-36 object-cover border-b border-zinc-700/50"
                  />
                )}
                <div className="p-4">
                  <p className="text-xs text-zinc-500   mb-1">./blog/</p>
                  <h3 className="text-sm font-bold text-white group-hover:text-zinc-200 mb-2 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-zinc-500  ">
                    {blog.publishedAt
                      ? new Date(blog.publishedAt).toLocaleDateString("en-GB")
                      : ""}
                  </p>
                </div>
              </a>
            ))}
          </div>
          {recentBlogs.length === 0 && (
            <p className="text-zinc-600   text-sm">// no results</p>
          )}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <a
              href="/blog"
              className="  text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              $ cd blog/ &amp;&amp; ls -la{" "}
              <span className="text-zinc-600">→ view all</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
