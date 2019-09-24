const fs = require("fs");

console.log("started reading the files synchroinously thus blocking code...");
// the file read synchropnously is a blocking code 
const data = fs.readFileSync("./example.txt");
console.log(data);
console.log(String(data));
console.log("...Completed reading the file synchronously thus blocking code" );
console.log(" ");

// the file read asynchropnously and is non-blocking code 
const data2 = fs.readFile ("./example.txt", (err, data ) => {

 console.log("...Completed reading the file asynchronously thus non-blocking code" );
});

console.log("started reading the files asynchronously thus non-blocking code...");