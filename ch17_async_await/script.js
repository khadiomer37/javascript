function getMessage() {
    return Promise.resolve("The operation was successful!");
}

async function checkMessage () {
  try {
    let message = await getMessage();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

checkMessage();
