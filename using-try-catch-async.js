//this will give error but works if there is synchronus code in try
/*try {
    setTimeout(function(){
        var err = new Error('example')
        throw err
    }, 1000)

}
catch (err) {
    // Example error won't be caught here... crashing our app
    // hence the need for domains
    console.log(err);
}*/


process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log('test');
    console.log(err)
})

setTimeout(function(){
    var err = new Error('example')
    throw err
},1000)
// the asynchronous or synchronous code that emits the otherwise uncaught error
// throw new Error('example');
