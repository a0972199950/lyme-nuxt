console.log('執行plugin')

if('serviceWorker' in navigator) {
  console.log('service in navigator, 準備註冊sw.js')
  navigator.serviceWorker.register('/sw.js')
  console.log('註冊完sw.js')
}