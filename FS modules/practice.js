const { log } = require("console");
let fs=require("fs")
fs.writeFile("text.txt","hello this is practice file created using fs modules",(e)=>{
    if(e){
        console.log("Error",e);
        
    }
    else{
        console.log("success");
        
    }
})

fs.appendFile("text.txt"," updated text",(e)=>{
    if(e){
        console.log("error",e);
        
    }
    else{
        console.log("success");
        
    }
})

fs.readFile("text.txt","utf-8",(e,data)=>{
    if(e){
        console.log("Error",e);
        
    }
    else{
        console.log(data);
        
    }
})
