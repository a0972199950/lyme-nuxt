import CacheHelper from './utils/CacheHelper'
import IDBHelper from './utils/IDBHelper'
import NotificationHelper from './utils/NotificationHelper'

declare var self: ServiceWorkerGlobalScope

const useCache = false
const cacheHelper = new CacheHelper()
const idbHelper = new IDBHelper()
const notificationHelper = new NotificationHelper()

self.addEventListener('install', (e: ExtendableEvent) => {
  if(!useCache) {
    return
  }

  e.waitUntil(cacheHelper.cacheStatic())
})

self.addEventListener('activate', (e: ExtendableEvent) => {
  if(!useCache) {
    return
  }

  e.waitUntil(cacheHelper.clearOldCache())
})

self.addEventListener('fetch', (e: FetchEvent) => {
  if(!useCache) {
    e.respondWith(fetch(e.request))
    return
  }


  e.preventDefault()

  const { request } = e
  const { method } = request

  if(method === 'GET') {
    e.respondWith(cacheHelper.respondWithCacheOrFetch(request))
  } else {
    e.respondWith(idbHelper.fetchOrRegisterBgSync(request))
  }
})

self.addEventListener('sync', (e: SyncEvent) => {
  if(e.tag === 'START_BG_SYNC') {
    idbHelper.startBgSync()
  }
})

self.addEventListener('push', (e: PushEvent) => {
  const payload = JSON.parse(e.data.text())
  notificationHelper.show(payload)
})

self.addEventListener('notificationclick', async (e: NotificationEvent) => {
  e.waitUntil(notificationHelper.handleClick(e))
})

