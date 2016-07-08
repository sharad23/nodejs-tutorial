var http = require('http');
var randoms = 10; 
var test = function(cb){
     
     randoms++;
     console.log(randoms);
     setTimeout(function(){
           
           cb(randoms);
           
     },8000);
     
}
var test2 = function(cb){
     
     //randoms++;
     setTimeout(function(){
           randoms++;
           cb();
           
     },1000);
}


test(function(a){
        
        test2(function(){
             
                console.log(a);
        });
        
});
test(function(a){
     
       test2(function(){
             
                console.log(a);
       });
});


//11
//12
//settimeout for 1 
//settimeout for 2
//callback for 1 //random++ //random is 13
//callback
//12
//13

