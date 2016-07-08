setTimeout(function(){
   console.log('ok')
 },5000)
console.log('finito')
process.exit();
process.on('exit',function(){
     setTimeout(function(){
        console.log('this should not  also execute');
     },1000)
     console.log('finished')
});
