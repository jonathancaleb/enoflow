/**
 * @file server.ts
 *
 * This file contains the server-side setup for tRPC in a Next.js application.
 * It includes the creation of a context for tRPC using headers from the request.
 *
 * Note: This file may contain errors, lint issues, and other problems that need to be fixed in the future.
 * Please ensure to review and address any issues as part of ongoing maintenance.
 */

import 'server-only';

import { cache } from 'react';
import { headers } from 'next/headers';

import { createCaller } from '@/server';
import { createTRPCContext } from '@/server/trpc';

const createContext = cache(() => {
  const heads = new Headers(headers() as HeadersInit);
  heads.set('x-trpc-source', 'rsc');

  return createTRPCContext({
    headers: heads,
  });
});

export const api = createCaller(createContext);
