var events = require('events');

function Door(colour) {
  this.colour = colour;
  events.EventEmitter.call(this);

  this.open = function()
  {
     //this.emit('open');
     this.emit('error');
  }
}

Door.prototype.__proto__ = events.EventEmitter.prototype;

var frontDoor = new Door('brown');

frontDoor.on('open', function() {
    console.log('ring ring ring');
  });
frontDoor.on('error',function(){
    console.log('error');
});
frontDoor.open();