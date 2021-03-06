var Promise = require('bluebird')
var test2 =  require('./test2')()
var prom = Promise.promisify(test2.test);
//my function which has callback
var divide =  function(x,cb){
       setTimeout(function(){
           if(x == 0)
              cb(1)
           else
              cb(null,10/x)  
       },1000)
}

/*divide(0,function(err,result){
     if(err){
        console.log('Error '+err)
     }
     else{
        console.log(result)
     }
})*/

//methods for promisifying
/*function promisify(a){
	
       return new Promise(function(resolve, reject){
		
                divide(a,function(err, data){
			if (err) {
				reject(err);
			} else {
				resolve(data)
			}
		});
	});
}*/
//2nd approach
/*var promisify = Promise.promisifyAll(divide);
promisify(10).then(function(data){
   console.log(data);
})
.catch(function(error){
   console.log('error')
   console.log(error)
})*/
prom().then(function(data){
       
     console.log(data);

}).catch(function(error){
     
     consoel.log(error);
})




