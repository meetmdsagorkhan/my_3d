import { getBlogPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx"; // Ensure you have this component, or we can use a simpler version
import SectionWrapper from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <SectionWrapper className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blogs" className="mb-8 inline-block">
          <Button variant="ghost" size="sm" className="gap-2 text-zinc-400 hover:text-zinc-100">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Button>
        </Link>

        <h1 className="title font-bold text-3xl md:text-5xl tracking-tighter max-w-[650px] mb-4">
          {post.metadata.title}
        </h1>
        
        <div className="flex justify-between items-center mt-2 mb-8 text-sm text-zinc-500 font-mono">
          <p>{formatDate(post.metadata.publishedAt)}</p>
        </div>

        <article className="prose prose-invert prose-quoteless prose-neutral dark:prose-invert">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </SectionWrapper>
  );
}