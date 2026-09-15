const fun=require("./first")  //for import
console.log("main file");
let multi=require("./module/multi")    // ./ for work in existing directory
let file=require("../file")           //  ../ for come outside the directory
import main2 from "./main2.js";  //try to check ES6 modules import/export
// fun.sum()
// fun.sub()

fun.f1()
fun.f2()
multi()
file()
main2()