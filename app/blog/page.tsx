import { fetchBlogs } from "@/lib/api";
import Image from "next/image";

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="term-window">
        <div className="term-bar">
          <span className="font-mono text-xs text-zinc-400 ">
            musabbir@portfolio — ~/blog
          </span>
        </div>
        <div className="p-6">
          <p className="term-prompt mb-6">ls -la blog/</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog: any) => (
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
                    className="w-full h-40 object-cover border-b border-zinc-700/50"
                  />
                )}
                <div className="p-4">
                  <p className="text-xs text-zinc-600 font-mono mb-1">
                    {blog.category?.name || "blog"}
                  </p>
                  <h2 className="text-sm font-bold text-white group-hover:text-zinc-200 mb-3 leading-snug">
                    {blog.title}
                  </h2>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">
                    {blog.summary}
                  </p>
                  <p className="font-mono text-xs text-zinc-600">
                    {blog.publishedAt
                      ? new Date(blog.publishedAt).toLocaleDateString("en-GB")
                      : ""}
                  </p>
                </div>
              </a>
            ))}
          </div>
          {blogs.length === 0 && (
            <p className="text-zinc-600 font-mono text-sm">// no posts found</p>
          )}
        </div>
      </div>
    </main>
  );
}
