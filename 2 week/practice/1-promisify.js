function wait(n) {
    let promise = new Promise(function (resolve) {
        setTimeout(resolve, n*1000);
    });
    return promise;
}

module.exports = wait;