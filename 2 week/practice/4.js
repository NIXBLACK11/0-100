function wait(t) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, t);
    });
  }
  
  function wait1(t) {
    return wait(t);
  }
  
  function wait2(t) {
    return wait(t);
  }
  
  function wait3(t) {
    return wait(t);
  }
  
  function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
  
    return wait1(t1)
      .then(() => wait2(t2))
      .then(() => wait3(t3))
      .then(() => {
        const endTime = Date.now();
        return endTime - startTime;
      });
  }
  
  module.exports = calculateTime;
  