window.painting = [{
  img: "152414561_714028852647187_6553680962474280933_n.jpg",
  position: [0, 0, 52],
  rotation: 0,
  cameraPosition: [0, 0, 52]
}]

function setRotation(rot, obj) {
		var rotation = Math.PI/2
		if (rot == 1) {
		}
		if (rot == 2) {
			//obj.rotation.y = 0.5;
			obj.rotation.z = Math.PI/2;
		}
		if (rot == 3) {
			//obj.rotation.y = 0.5;
			obj.rotation.z = (Math.PI/4) * 4;
		}
		if (rot == 4) {
			//obj.rotation.y = 0.5;
			obj.rotation.z = (Math.PI/4) * 6;
		}
    return obj
}

function positionPlane(id, plane, scene) {

    plane.position.x = painting[id].position[0]
    plane.position.y = painting[id].position[1]
    plane.position.z = painting[id].position[2]

    console.log("here")

    // add canvas
    const geometry = new THREE.BoxGeometry( plane.scale.x*10, plane.scale.y*10, 2 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    const cube = new THREE.Mesh( geometry, material );

    cube.position.x = painting[id].position[0]
    cube.position.y = painting[id].position[1]
    cube.position.z = painting[id].position[2]

    if (painting[id].rotation == 0) {
      cube.position.z -= 1.51
    }
    if (painting[id].rotation == 1) {
      cube.position.x += 1.51
      cube.rotation.y = (Math.PI/4) * 6;
      plane.rotation.y = (Math.PI/4) * 6;
    }
    if (painting[id].rotation == 2) {
      cube.position.z += 1.51
      cube.rotation.y = (Math.PI/4) * 4;
      plane.rotation.y = (Math.PI/4) * 4;
    }
    if (painting[id].rotation == 3) {
      cube.position.x -= 1.51
      cube.rotation.y = (Math.PI/4) * 2;
      plane.rotation.y = (Math.PI/4) * 2;
    }

    scene.add( cube );

}

function createPaintingImage(id, scene) {
    var loader = new THREE.TextureLoader();
    var geometry, material, plane

    var texture = loader.load( './img/painting/'+painting[id].img, function ( tex ) {
      // tex and texture are the same in this example, but that might not always be the case
      console.log( tex.image.width, tex.image.height );
      console.log( texture.image.width, texture.image.height );
      console.log( texture.image.width/texture.image.height );
      var ratio = texture.image.width/texture.image.height
      console.log("10 "+(10*ratio))
      plane.scale.x = 5
      plane.scale.y = (5/ratio)

      plane.name = painting[id].img

      positionPlane(id, plane, scene)
    } );

    var materialPic = new THREE.MeshLambertMaterial({
      map: texture
    });
    materialPic.transparent = true

    geometry = new THREE.PlaneGeometry( 10, 10 );
    material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometry, materialPic );


    return plane
}

export function spawnPaintings(scene) {
  scene.add(createPaintingImage(0, scene))
}
