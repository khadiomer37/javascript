let printName = function(name) {
    console.log("khadija");
}

// printName();

// setTimeout (printName, 10000);

let timer = setInterval(printName, 1000);
// clearInterval(timer);
setTimeout (function() {
    clearInterval(timer);
}, 5000);

