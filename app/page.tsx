"use client";

import { useEffect, useState } from "react";
import { fetchBlogs, fetchWork } from "@/lib/api";
import Image from "next/image";

export default function HomePage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [works, setWorks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchBlogs(), fetchWork()]).then(([blogData, workData]) => {
      setBlogs(blogData);
      setWorks(workData);
      setLoading(false);
    });
  }, []);

  const recentBlogs = blogs.slice(0, 3);
  const recentWorks = works.slice(0, 3);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center py-12">Loading...</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="border-t border-l border-r border-zinc-700/30 bg-zinc-900/50 rounded-t-2xl overflow-hidden">
          <div className="border-b border-zinc-800 px-8 py-6 bg-zinc-800/80 rounded-t-2xl">
            <h1 className="text-sm font-mono text-zinc-400">
              musabbir@portfolio:~$ intro
            </h1>
          </div>
          <div className="p-8 text-center">
            <div className="mb-6">
              <span className="text-zinc-500 text-xs font-mono">
                musabbir@portfolio:~$ whoami
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              Hi, I'm Musabbir Sagar
            </h1>
            <p className="text-xl text-white font-medium mb-8 max-w-2xl mx-auto">
              Full-stack developer and designer creating digital experiences
              that matter.
            </p>
            <div className="space-x-4">
              <a
                href="/portfolio"
                className="bg-gradient-to-r from-slate-200 to-gray-300 text-slate-900 font-medium px-6 py-3 rounded-lg hover:from-slate-300 hover:to-gray-400 transition-all"
              >
                View Portfolio
              </a>
              <a
                href="/blog"
                className="bg-white/5 backdrop-blur-sm border border-zinc-500/50 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-zinc-400/50 transition-all"
              >
                Read Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="py-16 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Recent Blog Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentBlogs.map((blog: any) => (
            <div
              key={blog.slug}
              className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-6 hover:shadow-lg hover:bg-zinc-800/80 transition-all cursor-pointer"
              onClick={() =>
                window.open(
                  `https://thirdbracket.co.uk/blog/${blog.slug}`,
                  "_blank"
                )
              }
            >
              {blog.featuredImage.url && (
                <Image
                  width={400}
                  height={200}
                  src={`https://thirdbracket.co.uk${blog.featuredImage.url}`}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {blog.title}
              </h3>
              <p className="text-zinc-300 mb-4">{blog.summary}</p>
              <span className="text-sm text-zinc-200 bg-zinc-700/50 px-2 py-1 rounded">
                {blog.category.name}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="text-zinc-300 hover:text-white hover:underline transition-colors"
          >
            View all posts →
          </a>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentWorks.map((work: any) => (
            <div
              key={work.slug}
              className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-6 hover:shadow-lg hover:bg-zinc-800/80 transition-all cursor-pointer"
              onClick={() =>
                window.open(
                  `https://thirdbracket.co.uk/work/${work.slug}`,
                  "_blank"
                )
              }
            >
              {work.heroImage.url && (
                <Image
                  width={400}
                  height={200}
                  src={`https://thirdbracket.co.uk${work.heroImage.url}`}
                  alt={work.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {work.title}
              </h3>
              <p className="text-zinc-300 mb-4">{work.summary}</p>
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-zinc-700/50 text-zinc-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/portfolio"
            className="text-zinc-300 hover:text-white hover:underline transition-colors"
          >
            View all projects →
          </a>
        </div>
      </section>
    </main>
  );
}
