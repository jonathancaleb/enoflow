import type { MetadataRoute } from 'next';

import { constants } from '@/constants';

/**
 * This function returns an object that represents the manifest.json file which
 * next.js uses to create the manifest.json file.
 * @returns The manifest.json file configuration.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: constants.name,
    short_name: constants.shortName,
    description: constants.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#F86C6A',
    icons: [
      {
        src: '/fav.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/fav.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
