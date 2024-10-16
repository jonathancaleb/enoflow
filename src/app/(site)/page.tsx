import Link from 'next/link';
import { ChevronRightIcon, StarIcon } from 'lucide-react';

import { constants } from '@/constants';
import { Button } from '@/primitives/button';

/**
 * The marketing home page.
 * @returns A react component representing the marketing home page.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center gap-6">
        <Button variant="outline" asChild className="rounded-full font-normal">
          <a
            href={constants.github_repo}
            target="_blank"
            rel="noreferrer noopener"
          >
            View on GitHub{' '}
            <StarIcon className="fill-amber-500 stroke-amber-500" size={16} />
          </a>
        </Button>
        <h1 className="max-w-[20ch] text-balance bg-gradient-to-b from-foreground to-gray-foreground-muted bg-clip-text text-center text-5xl font-extrabold leading-none text-transparent md:text-6xl lg:text-8xl">
          {constants.tagline}
        </h1>
        <p className="max-w-[50ch] text-pretty text-center text-foreground-muted lg:text-lg [&>strong]:font-medium [&>strong]:text-foreground">
          <strong>enoflow</strong> helps you organize your thoughts{' '}
          <strong>and</strong> plan your day in a beautiful and simle app.
        </p>
        <Button className="rounded-full" size="lg" asChild>
          <Link href="/early-access">
            Get early access <ChevronRightIcon size={20} strokeWidth={2.5} />
          </Link>
        </Button>
      </div>
      {/* <Image
        src="/_static/dark-dashboard-preview.jpg"
        width={1920}
        height={1080}
        alt="Dashboard Preview"
        className="mt-12 rounded-lg shadow-[0_50px_200px_75px] shadow-pink/10 md:mt-16 lg:mt-24"
      /> */}
    </main>
  );
}
