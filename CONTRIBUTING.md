# Enoflow's contributing guidelines

Thank you for your interest in contributing to our project! Any contribution is highly appreciated and will be reflected on our project ✨

First things first, make sure you read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide, you will get an overview of the project structure and setup, as well as the workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## Table of contents

- [Enoflow's contributing guidelines](#enoflows-contributing-guidelines)
  - [Table of contents](#table-of-contents)
  - [The tech stack](#the-tech-stack)
  - [Getting stuff running](#getting-stuff-running)
    - [Cloning the repo](#cloning-the-repo)
    - [Bun](#bun)
    - [Installing dependencies](#installing-dependencies)
    - [Environment Variables](#environment-variables)
    - [Running stuff](#running-stuff)

## The tech stack

The Runtime:

- [Bun](https://bun.sh/)

The Tech Stack:

- [Next.js App Router](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io)
- [Drizzle ORM](https://orm.drizzle.team/)
- [ShadCN UI](https://ui.shadcn.com)
- [NeonDB](https://neon.tech)
- [Clerk Auth](https://clerk.dev/)
- [Upstash](https://upstash.com)
- [Resend](https://resend.com)

Development stuff:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)

There are a lot of other technologies being used in this project, however these are the most important and influential bits of it.

## Getting stuff running

### Cloning the repo

To clone the repo, you firstly need to [fork](https://github.com/jonathancaleb/enoflow/fork) it, and then clone your copy of repo locally.

```bash
git clone https://github.com/<your-gh-username>/enoflow.git
```

### Bun

Bun is used as the package manager of Noodle, with Bun, you don't need to have NodeJS installed at all on your system to be able to run Noodle. The only tool you need to install dependencies & run Noodle is Bun!

To install bun, head over to [their website](https://bun.sh/) which will tell you how to get it installed on your system.

To check that you have Bun installed, simply run the following command:

```bash
bun --version
```

If this commands outputs a version number, you're all good to go.

### Installing dependencies

With bun installed on your machine, the next step would be to install the dependencies that Noodle relies upon to work, to do this, run the following command:

```bash
bun install
```

### Environment Variables

Now that Bun & dependencies has been installed, it's time to configure your environment variables so that the project works as expected:

1. Duplicate the `.env.example` file as just `.env`
2. Populate the values with your own, you will need to sign up to some services in the process.

You can checkout which variables are needed and which are optional in the `src/env.ts` file.

### Running stuff

```bash
# Run the project's dev server
bun dev

# Build the project
bun run build

# Run the built project in production mode
bun start

# Run the typecheck script
bun typecheck

# Lint using ESLint
bun lint

# Format using Prettier
bun format
```
