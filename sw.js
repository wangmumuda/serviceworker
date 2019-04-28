//监听service worker的install 事件
this.addEventListener('install',function (event) {
    //如果监听到了service worker 已经安装成功的话，就会调用event.waitUnitl回调函数
    event.waitUntil(
        //安装成功后操作CacheStorage缓存，使用之前需要先通过caches.open()打开对应缓存空间
        caches.open('my-test-cache-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/mian.css',
                '/main.js',
                '/image/jpg'
            ]);
        })
    );
});