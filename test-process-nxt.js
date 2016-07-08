var sharad = function(football,cb){
       
   /*setTimeout(function(){
     cb(football); 
   },0);
   */
   console.log('okz');
   process.nextTick(function(){
       cb(football);
   });   
};


	
sharad('arsenal',function(sports){

       console.log('I love '+sports+'and'+hobby);
  
});

console.log('another');
var hobby = 'coding';

