//this example is for non-blocking
//it's not possible in blocking
var test =  function(cb){
  
  return setTimeout(function(){ return  cb(); },5000); 
  
}

var test2 = function(){
   
    test(function(){
        return 'i love pratima';
    });
    

}

var result = test2();
console.log(result);
