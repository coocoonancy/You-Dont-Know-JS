if (!Promise.map) {
    Promise.map = (arrs, cb) => {
        return Promise.all(
            arrs.map(val => new Promise(resolve => cb(val, resolve)))
        )
    }
}
let p1 = Promise.resolve(21);
let p2 = Promise.resolve(42);
let p3 = Promise.reject('OOPS');
Promise.map([p1, p2, p3], (val, resolve) => {
    Promise.resolve(val).then(res => {
        resolve(res * 2)
    }, err => {
        resolve(err)
    });
}).then(res => {
    console.log(res)
});