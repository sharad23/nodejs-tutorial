module.exports = function(){
     var abc=  {};
     abc.test = function(cb){
         
          cb(null,'ok');
     } 
     
     return abc;
}
