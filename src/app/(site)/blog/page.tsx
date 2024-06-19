import { getBlogPosts } from '@/lib/mdx';
import { Button } from '@/primitives/button';
import { MoveRightIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Ensure we have at least one post
  if (posts.length === 0) {
    notFound();
    //return; // Exit function early NE, Typescript says code is unreachable
  }

  const latestPost = posts[0];
  const morePosts = posts.slice(1); // All posts except the first

  if (!latestPost) {
    // If somehow latestPost is still undefined (although posts.length > 0 check should prevent this), handle it
    notFound();
    //return; // Exit function early NE, Typescript says code is unreachable
  }

  return (
    <main className="py-12 md:py-16 lg:py-24">
      <h1 className="mb-8 text-3xl font-medium md:text-4xl lg:mb-12">
        Latest post
      </h1>
      <div key={latestPost.slug}>
        <p className="mb-4 text-sm text-foreground-muted">
          {latestPost.metadata.publishedAt}
        </p>
        <h3 className="mb-4 inline-block text-xl font-medium md:text-2xl">
          {latestPost.metadata.title}
        </h3>
        <p className="max-w-prose text-balance text-sm leading-relaxed text-foreground-muted md:text-base">
          {latestPost.metadata.summary}
        </p>
        <Button variant="default" size="sm" className="mt-6" asChild>
          <a href={`/blog/${latestPost.slug}`}>
            Read post <MoveRightIcon size={16} strokeWidth={3} />
          </a>
        </Button>
      </div>
      <h2 className="pt-12 text-2xl font-medium md:pt-16 md:text-3xl lg:pt-24">
        More posts
      </h2>
      {morePosts.length > 0 ? (
        morePosts.map((post) => (
          <div key={post.slug} className="mt-8">
            <p className="mb-4 text-sm text-foreground-muted">
              {post.metadata.publishedAt}
            </p>
            <h3 className="mb-4 inline-block text-xl font-medium md:text-2xl">
              {post.metadata.title}
            </h3>
            <p className="max-w-prose text-balance text-sm leading-relaxed text-foreground-muted md:text-base">
              {post.metadata.summary}
            </p>
            <Button variant="default" size="sm" className="mt-6" asChild>
              <a href={`/blog/${post.slug}`}>
                Read post <MoveRightIcon size={16} strokeWidth={3} />
              </a>
            </Button>
          </div>
        ))
      ) : (
        <p className="mt-6 text-balance text-left text-foreground-muted md:mt-12 md:text-center lg:mt-16">
          🤪 Waiting on (caleb) to write more...
        </p>
      )}
    </main>
  );
}
