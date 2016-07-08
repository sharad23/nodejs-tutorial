var cluster = require('cluster')
var os = require('os')
var numCPUs = require('os').cpus().length;
// console.log('again and again')
if (cluster.isMaster) {
  console.log("parent process "+process.pid)
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {

    //change this line to Your Node.js app entry point.
  //  console.log("this will execute four times with "+process.pid)
   var random = Math.floor((Math.random() * 10) + 1) * 1000
   console.log(process.pid+" will have "+random);
   setTimeout(function(){

         console.log(process.pid+" had delay "+random)
         process.exit();
   },random);
}

//same program without clustering

/*for(var i = 0;i <  4;i++){
  var random = Math.floor((Math.random() * 10) + 1) * 1000
  console.log(i+" will have "+random);
  setTimeout(function(){

        console.log(i+" had delay "+random)
       //  process.exit();
  },random);
}*/

/*function test(i,random){

      setTimeout(function(){
             console.log(i+" will have "+random)
      },random)
}
//same program the correct way
for(var i = 0;i <  4;i++){
  var random = Math.floor((Math.random() * 10) + 1) * 1000
  console.log(i+" will have "+random);
  test(i,random)
}
*/

//another approach with callback
/*function test(i,rand,cb){
  setTimeout(function(){
          return cb(i,rand)
  },random)
}
for(var i = 0;i <  4;i++){
  var random = Math.floor((Math.random() * 10) + 1) * 1000
  console.log(i+" will have "+random);
  console.log(i)
  test(i,random,function(i,random){
            console.log(i+" had "+random)
  });
}
*/
