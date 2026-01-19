import { getBlogPosts } from "@/lib/mdx";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { SectionHeader } from "@/components/sections/section-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog | Md Sagor Khan",
  description: "Insights on Customer Experience, AI Automation, and Leadership.",
};

export default function BlogPage() {
  const allBlogs = getBlogPosts();

  // Sort blogs by date (newest first)
  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <SectionWrapper className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader
          id="blogs"
          title="Insights"
          desc="Thoughts on CX, Automation, and Leadership."
          className="mb-12"
        />

        <div className="grid gap-6">
          {sortedBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="block group"
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl md:text-2xl text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {post.metadata.title}
                    </CardTitle>
                    <span className="text-sm text-zinc-500 font-mono whitespace-nowrap ml-4">
                      {formatDate(post.metadata.publishedAt)}
                    </span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    {post.metadata.tags?.split(",").map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 leading-relaxed">
                    {post.metadata.summary}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}