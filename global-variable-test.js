
//In this example u will  get the desired result as the global variable is not used  in the next callback but it is passed as arguement
var globalvar;
var test = function(cb){
   
     setTimeout(function(){
          
         cb(Math.floor((Math.random() * 10) + 1));
     
     },Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000);  
    
}


var test2 = function(rand,cb){

      setTimeout(function(){
          cb(rand);
      },Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000)
}


var execute =  function(i){
        console.log(i)
	test(function(rand){
             console.log(i+' for '+rand);
	     globalvar = rand;
	     test2(globalvar,function(value){
		  console.log(i+' for '+value);
	     });

	});
}

for(var i = 0;i < 8;  i++){
   execute(i);
}


//another example
//In this example u will not get the desired result as the global variable is used  in the next callback

/*var globalvar2;
var test3 = function(cb){
   
     setTimeout(function(){
          
         cb(Math.floor((Math.random() * 10) + 1));
     
     },Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000);  
    
}


var test4 = function(rand,cb){

      setTimeout(function(){
          cb(rand);
      },Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000)
}


var execute2 =  function(i){
        console.log(i)
	test3(function(rand){
             console.log(i+' for '+rand);
	     globalvar = rand;
	     test4(globalvar,function(value){
		  console.log(i+' for '+value);
	     });

	});
}

for(var i = 0;i < 8;  i++){
   execute2(i);
}
*/






