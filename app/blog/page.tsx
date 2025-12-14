"use client";

import { useEffect, useState } from "react";
import { fetchBlogs } from "@/lib/api";
import Image from "next/image";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs().then((data) => {
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center py-12">Loading...</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Blog Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: any) => (
          <article
            key={blog.slug}
            className="bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-6 hover:shadow-lg hover:bg-zinc-800/80 transition-all cursor-pointer"
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
            <h2 className="text-xl font-semibold mb-2 text-white">
              {blog.title}
            </h2>
            <p className="text-zinc-300 mb-4">{blog.summary}</p>
            <div className="flex justify-between items-center text-sm text-zinc-400">
              <span>{blog.category.name}</span>
              <time>{new Date(blog.publishedAt).toLocaleDateString()}</time>
            </div>
          </article>
        ))}
      </div>

      {blogs.length === 0 && (
        <p className="text-center text-zinc-400 py-12">No blog posts found.</p>
      )}
    </main>
  );
}
