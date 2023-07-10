/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime'; /* for async await transpile */
import { setCacheNameDetails, skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

import CONFIG from './globals/config';

skipWaiting();
clientsClaim();

setCacheNameDetails(CONFIG.CACHE_NAME);
precacheAndRoute(self.__WB_MANIFEST, self.__WB_DISABLE_DEV_LOGS, {
  ignoreUrlParametersMatching: [/.*/],
});

registerRoute(
  ({ url }) => url.origin,
  new StaleWhileRevalidate({
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Hari
      }),
    ],
  })
);
registerRoute(
  new RegExp('https://kit.fontawesome.com/0477498157.js'),
  new CacheFirst({
    cacheName: 'font-awesome-cache',
  })
);

registerRoute(
  ({ url }) =>
    url.origin === 'https://fonts-googleapis.com' ||
    url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: 'my-google-fonts-cache',
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: 'assets-cache',
  })
);
