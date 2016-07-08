console.log(process.pid);
function test(){
    setTimeout(function(){
         console.log(process.pid)
    },1000)
}
test();
process.stdout.write('hello  howard');
