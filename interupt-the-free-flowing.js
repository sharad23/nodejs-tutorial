var arr = []
var settimer = function(route_id){
        var test = setTimeout(function(){
            //broadcast the socket
            console.log('broadcast the socket '+route_id)
            settimer(route_id)
        },3000)
        arr[route_id] = test

}
var start_the_bus = function(route_id){
     console.log('bus started for '+route_id)
     settimer(route_id)
}
var end_the_bus = function(route_id){
     console.log('end the bus '+route_id)
     clearTimeout(arr[route_id])
}
var log = function(route_id){
    console.log('logs arived '+route_id);
    clearTimeout(arr[route_id])
    settimer(route_id)

}

var simulate_the_log = function(route_id,cb){
     var fakeTime =  Math.floor((Math.random() * 10) + 1) * 1000
     setTimeout(function(){
           console.log('fake time for log '+route_id+' is '+fakeTime)
           log(route_id)
           return cb()
     },fakeTime)
}
console.log(arr)
start_the_bus(1)
start_the_bus(2)
start_the_bus(3)
simulate_the_log(1,function(){
       simulate_the_log(1,function(){
             end_the_bus(1)
       });
});
simulate_the_log(2,function(){
    simulate_the_log(2,function(){
            end_the_bus(2)
    });
});
simulate_the_log(3,function(){
  simulate_the_log(3,function(){
            end_the_bus(3)
  });
});
