
//test1
var divide = function(x,y,next) {
    // if error condition?
    if ( y === 0 ) {
        // "throw" the error safely by calling the completion callback
        // with the first argument being the error
        next(new Error("Can't divide by zero"))
    }
    else {
        // no error occured, continue on
        next(null, x/y)
    }
}

function test(){
        try {
                divide(4, 0, function(err,result){  
                     if(err) throw new Error('elsewhere has failed');
                      
                });
        }

        catch (err) {
                console.log(err);
                
        }

        
};

test();



var test2 = function(data){

       console.log(data);
}

var data = "dasd";

try{
     
      test2('asd');

}
catch(err){
      
      console.log("First this");
      console.log(err);
}
