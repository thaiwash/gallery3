

var worldArray = [
[true, true, true, true, true, true, true, true, true, true],
[true, false, false, false, false, false, false, false, false, true],
[true, false, false, false, false, false, false, false, false, true],
[true, false, false, false, false, false, false, false, false, true],
[true, false, false, false, false, false, false, false, false, true],
[true, false, false, false, false, false, false, false, false, true],
[true, false, false, false, false, false, false, false, false, true],
[true, false, false, false, false, false, false, false, false, true],
[true, false, false, false, false, false, false, false, false, true],
[true, true, true, true, true, true, true, true, true, true],
]
/*
var worldArray = [
	[true]
]
*/
function createCubeFrom(img) {
		var texture = new THREE.TextureLoader().load( img );

		var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
		var material = new THREE.MeshBasicMaterial( { map: texture } );

	  var mesh = new THREE.Mesh( geometry, material );
    return mesh
}

function floorCube() {
		var texture = new THREE.TextureLoader().load( 'img/floor.png' );

		var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
		var material = new THREE.MeshBasicMaterial( { map: texture } );

	  var mesh = new THREE.Mesh( geometry, material );
    return mesh
}

export function spawnWorld(scene) {

      for (var y = 0; y < 10; y ++) {
        for (var x = 0; x < 10; x ++) {
          if(worldArray[y][x]) {
            var wall = createCubeFrom("img/wall_texture3.png")
            wall.position.x = (100*x) - 500
            wall.position.z = (100*y)
            scene.add( wall );


          }
					var floor = createCubeFrom('img/floor.png')
          floor.position.x = (100*x) - 500
          floor.position.z = (100*y)
          floor.position.y = -100
          scene.add( floor );

					var floor = createCubeFrom('img/ceiling.png')
          floor.position.x = (100*x) - 500
          floor.position.z = (100*y)
          floor.position.y = 100
          scene.add( floor );

        }
      }

}
