

function mouseDown(event) {
  camera.lastRotation = 0
  window.mouseDown = true

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

//  console.log("mouse down detected")
// console.log(event)


  	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );
  	// calculate objects intersecting the picking ray
  	const intersects = raycaster.intersectObjects( scene.children );
    for ( let i = 0; i < intersects.length; i ++ ) {

      		if (intersects[ i ].object.name == "WASD") {
            console.log("WASD clicked")
            hideUI()
            window.wasdEnabled = true
          }

          for (var i2 = 0; i2 < painting.length; i2 ++) {
            if (intersects[ i ].object.name == painting[i2].img) {
              console.log("painting "+painting[i2].img+" clicked")
            }
          }

    	}
  	//console.log(intersects)
}

function hideWasd() {
  for(var i = 0; i < scene.children.length; i++) {
    if (scene.children[i].name == "WASD") {
      scene.remove(scene.children[i]);
      i --
    }
  }
}

function hideUI() {
  for(var i = 0; i < scene.children.length; i++) {
    if (scene.children[i].name == "WASD") {
      scene.remove(scene.children[i]);
      i --
    }
    if (scene.children[i].name == "ForwardsImage") {
      scene.remove(scene.children[i]);
      i --
    }
    if (scene.children[i].name == "BackwardsImage") {
      scene.remove(scene.children[i]);
      i --
    }
  }
}

function mouseUp() {
  window.mouseDown = false
}


var lastMouseCrd = [0,0]

function mouseMove(event) {
  if (/*window.wasdEnabled && */window.mouseDown) {
    // console.log(lastMouseCrd[0] - event.clientX)
    var changeX = lastMouseCrd[0] - event.clientX
    var changeY = lastMouseCrd[1] - event.clientY
    camera.rotation.y += (changeX/200)
    //camera.rotation.x += (changeY/200)
  }
  lastMouseCrd = [event.clientX, event.clientY]
}

export function mouseControl() {
  console.log("taking mouse control")

  document.onmousedown = mouseDown


  document.onmousemove = mouseMove
  document.onmouseup = mouseUp
}
