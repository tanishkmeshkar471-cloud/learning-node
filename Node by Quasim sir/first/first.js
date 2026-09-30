function sum(){
    console.log("sum",3+4);
    
}

function sub(){
    console.log("sub",7-4);
    
}

// module.exports={sum,sub}  //for export single fuction        //{}for export multiple fucntions

module.exports={f1:sum,f2:sub}