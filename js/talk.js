new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("LRH AND SYQ")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第二个七夕...")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("往下滑我们的故事开始了...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 90
}).go();