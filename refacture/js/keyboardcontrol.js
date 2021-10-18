
var movingForwards = false
var movingBackwards = false
var movingLeft = false
var movingRight = false


function keyDown(event) {


    if (event.key == "w") {
      movingForwards = true
    }
    if (event.key == "s") {
      movingBackwards = true
    }
    if (event.key == "a") {
      movingLeft = true
    }
    if (event.key == "d") {
      movingRight = true
    }
}

function keyUp(event) {

  if (event.key == "w") {
    movingForwards = false
  }
  if (event.key == "s") {
    movingBackwards = false
  }
  if (event.key == "a") {
    movingLeft = false
  }
  if (event.key == "d") {
    movingRight = false
  }
}

function updateKeyEvents() {
  /*if (!window.wasdEnabled) {
    return
  }*/


  if (movingForwards) {
    camera.translateZ(-1)
  }
  if (movingBackwards) {
    camera.translateZ(1)
  }
  if (movingRight) {
    camera.translateX(1)
  }
  if (movingLeft) {
    camera.translateX(-1)
  }
}


export function keyboardControl() {
  console.log("taking keyboard control")

  document.addEventListener('keydown', function(event) {
    keyDown(event)
  });
  document.addEventListener('keyup', function(event) {
    keyUp(event)
  });

  var keycontrolInterval = setInterval(function() { updateKeyEvents() }, 10)
}
