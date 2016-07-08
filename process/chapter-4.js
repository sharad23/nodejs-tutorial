function test(){
    setTimeout(function(){
         console.log(process.pid)
    },1000)
}
test();
console.log('lets ok');
process.kill(process.pid);
