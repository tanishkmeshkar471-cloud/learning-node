let fs = require('fs')

fs.writeFileSync("./day1.txt","tiis is txt file");
fs.writeFileSync("./day2.html","<b>hii i am bold tag and i am write by help fs methods</b>");
console.log("file is created");
console.log(fs.readFileSync("./day2.html",'utf-8'));
fs.appendFileSync('./day2.html','<h1>i am append by appendfilesync method </h1>');
console.log(fs.readFileSync("./day2.html",'utf-8'));
console.log('text added');
fs.unlinkSync('./day1.txt');
console.log('file deleted');
fs.writeFile("./uab.txt","hii i am not async file",(e)=>{
    console.log(e)
});
console.log('done');
module.exports;