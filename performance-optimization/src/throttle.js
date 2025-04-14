function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    }
}

// 1.Using setTimeout
function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    console.log('Scrol event triggered!');

}, 1000));

// 2.Using Date.now()
function throttle(fn, delay) {
    let t = 0;
    return function (...args) {
        let now = Date.now();
        if (now - t >= delay) {
            fn.apply(this, args);
            t = now;
        }
    };
}
window.addEventListener('resize', throttle(() => {
    console.log('Resize event triggered!');
}, 500));