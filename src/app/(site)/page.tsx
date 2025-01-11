import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

import { constants } from '@/constants';
import { Button } from '@/primitives/button';
import Image from 'next/image';

/**
 * The marketing home page.
 * @returns A React component representing the marketing home page.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-7 md:py-8 lg:py-10">
      <div className="flex flex-col items-center gap-6">
        {/* GitHub Link */}
        <a
          href={constants.github_repo}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-200"
          aria-label="View on GitHub"
        >
          <Image
            src="/github.svg" // Replace with the actual path to your SVG
            alt="GitHub"
            width={24}
            height={24}
            className="text-black"
          />
        </a>

        {/* App Tagline */}
        <div className="mx-auto max-w-screen-md text-center text-4xl font-bold md:text-6xl">
          <h1>
            Simplify Your
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text px-2 text-transparent">
              Workflow
            </span>
            and Unlock Potential
          </h1>
        </div>

        {/* App Description */}
        <p className="max-w-[50ch] text-pretty text-center text-foreground-muted lg:text-lg [&>strong]:font-medium [&>strong]:text-foreground">
          <strong>enoflow</strong> helps you organize your thoughts{' '}
          <strong>and</strong> plan your day in a beautiful and simple app.
        </p>

        {/* Features Section */}

        {/* Call to Action */}
        <Button className="rounded-full" size="lg" asChild>
          <Link href="/early-access">
            Get early access <ChevronRightIcon size={20} strokeWidth={2.5} />
          </Link>
        </Button>
      </div>

      {/* Dashboard Preview */}
      <Image
        src="/dark.png"
        width={1200}
        height={1200}
        alt="Dashboard Preview"
        className="mt-8 rounded-lg shadow-[0_50px_200px_75px] shadow-pink/10 md:mt-16 lg:mt-14"
      />

      {/* Personal Introduction */}
      <div className="mt-10 max-w-[60ch] rounded-lg border border-gray-300 bg-white p-6 text-center shadow-md">
        <h2 className="text-xl font-semibold">Hi, I&apos;m Caleb 👋</h2>
        <p className="mt-2 text-foreground-muted">
          I&apos;m building this app as a way to improve my coding skills and
          manage my day-to-day activities. The initial features will include
          integration with <strong>GitHub</strong> and{' '}
          <strong>Google Calendar</strong>. This project is under active
          development, and I&apos;m excited to bring more features to life!
        </p>
      </div>
    </main>
  );
}
