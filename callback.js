var test =  function(cb){

	   setTimeout(function(){

           cb(function(){

           	    console.log('no ok')
           });
	   
	   },1000);
}

test(function(callback){
    
       console.log('ok');
       callback();
       console.log('pizza');
});

