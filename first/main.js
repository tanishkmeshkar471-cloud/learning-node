const fun=require("./first")  //for import
console.log("main file");
let multi=require("./module/multi")    // ./ for work in existing directory
let file=require("../file")           //  ../ for come outside the directory

// fun.sum()
// fun.sub()

fun.f1()
fun.f2()
multi()
file()