let fs=require('fs')

// console.log(fs);

// fs.writeFile("firstFile.txt","this is new file created by fs module ",(er)=>{
//     if(er){console.log("file created");
//     }
//     else{
//         console.log("file created...");
        
//     }
// })

// fs.writeFile("firstFile.txt","hello from node js",(e)=>{
//     if(e){
//         console.log("erro",e);
//     }
//     else{
//         console.log("success");
        
//     }
// })

// fs.readFile("firstFile.txt","utf-8",(e,data)=>{
//     if(e){
//         console.log("error",e);
        
//     }
//     else{
//         console.log(data);
        
//     }
// })

// fs.appendFile("firstFile.txt"," Another text",(e)=>{
//     if(e){
//         console.log("Error",e);
//     }
//     else{
//         console.log("success");
        
//     }
// })

// fs.mkdir("new Folder",(e)=>{
//     if(e){
//         console.log(e);
        
//     }
//     else{
//         console.log("created");
        
//     }
// })

fs.writeFile("./new Folder/folderFile.txt","this file created in new folder",(e)=>{
    if(e){
        console.log("error",e);
    }
    else{
        console.log("success");
    }
})

fs.unlink('firstFile.txt',(e)=>{
    if(e){
        console.log(e);
        
    }
    else{
        console.log("deleted");
        
    }
})
