const spawn = require('child_process').spawn;
const ls = spawn('node ./test.js');

ls.stdout.on('data', function(data){
  console.log(data.toString());
});

ls.stderr.on('data', function(data){
  console.log(data.toString());
});

ls.on('close', function(code){
  console.log('child process exited with code ${code}');
});
ls.on('error',function(error){

   console.log(error.toString());
})
