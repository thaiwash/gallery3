

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
      		if (intersects[ i ].object.name == "ForwardsImage") {
            console.log("ForwardsImage clicked")
            hideWasd()
            lerp(1)
            //window.wasdEnabled = true
          }
      		if (intersects[ i ].object.name == "BackwardsImage") {
            console.log("BackwawrdsImage clicked")
            hideWasd()
            lerp(-1)
            //window.wasdEnabled = true
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

window.lookingAtPicture = 0

function lerp(direction) {
  console.log("move camera")
  console.log(positions)
  console.log(camera)

  lookingAtPicture = lookingAtPicture + direction
  if (lookingAtPicture == -1) {
    lookingAtPicture = positions.length-1
  }
  if (lookingAtPicture == positions.length) {
    lookingAtPicture = 0
  }

  camera.lerpStartTime = (new Date()).getTime()
  camera.lerpStartPosition = camera.position
  var lerpTo = new THREE.Vector3(
    positions[lookingAtPicture][0],
    positions[lookingAtPicture][1],
    positions[lookingAtPicture][2])

  camera.lerpTo = lerpTo
  if (rotations[lookingAtPicture] == 0) {
    camera.lerpTo.z += 100
  } else if (rotations[lookingAtPicture] == 1) {



    camera.lerpTo.x -= 100

    if (camera.lastRotation != rotations[lookingAtPicture]) {
      camera.rotateY(-Math.PI/2)
      camera.lastRotation = rotations[lookingAtPicture]
    }
  }


  camera.isLerping = true

}
/*

function updateCameraPosition() {
	var now = (new Date()).getTime()
	var elapsed = now - lerpStartTime

	if (isLerping) {
		//console.log(elapsed)
		//console.log(lerpingTime)
		//console.log(elapsed/lerpingTime)
		var lerpWith = elapsed/lerpingTime


		if (lerpWith > 1 ) {
			isLerping = false
			lerpWith = 1
		}

		var lerpingVector = new THREE.Vector3()

		lerpingVector.lerpVectors(cameraStartPosition, lerpTo, lerpWith)
		camera.position.copy(lerpingVector)
		//camera.lookAt(paintings[lookingAtPicture])
	}
}
*/

function mouseUp() {
  window.mouseDown = false
}


var lastMouseCrd = [0,0]

function mouseMove(event) {
  if (window.wasdEnabled && window.mouseDown) {
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
