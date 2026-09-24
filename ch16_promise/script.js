//create a new promise
let  myPromise = new Promise((resolve, reject) => {
    let success = false; 

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("Something went wrong!");
  }
});
// handling the promise
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
