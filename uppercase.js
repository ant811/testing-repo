function uppercase(str) {
    return str.toUpperCase();
  }
  
  function uppercaseCallBack(str, callback) {
    callback(str.toUpperCase());
  }
  
  function uppercasePromise(str) {
    return new Promise((resolve, reject) => {
      if(!str) {
        reject('Empty string');
        return
      } else {
        resolve(str.toUpperCase());
      }
    })
  }
  
  module.exports = {uppercaseCallBack, uppercase, uppercasePromise};