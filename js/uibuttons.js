var wasdImage

function createWasdImage(loader) {
    // Load an image file into a custom material
    var materialPic = new THREE.MeshLambertMaterial({
      map: loader.load('./img/wasd.png')
    });
    materialPic.transparent = true

    // todo: add as camera child
    const geometry = new THREE.PlaneGeometry( 18, 12 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry, materialPic );
    plane.position.z = 100
    plane.position.x = -50
    plane.position.y = 25
    plane.name = "WASD"
    return plane
}

function createForwardsImage(loader) {
      var materialPic = new THREE.MeshLambertMaterial({
        map: loader.load('./img/icons8-right-96.png')
      });
      materialPic.transparent = true

      const geometry = new THREE.PlaneGeometry( 20, 20 );
      const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
      const plane = new THREE.Mesh( geometry, materialPic );
      plane.position.z = 100
      plane.position.x = 40
      plane.position.y = 0
      plane.name = "ForwardsImage"
      window.ForwadsButtonPlane = plane
      return plane
}

function createBackwardsImage(loader) {
        var materialPic = new THREE.MeshLambertMaterial({
          map: loader.load('./img/icons8-left-96.png')
        });
        materialPic.transparent = true

        const geometry = new THREE.PlaneGeometry( 20, 20 );
        const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        const plane = new THREE.Mesh( geometry, materialPic );
        plane.position.z = 100
        plane.position.x = -40
        plane.position.y = 0
        plane.name = "BackwardsImage"
        return plane
}


export function loadUIButtons(scene) {
  console.log("button creation")



  // Create a texture loader so we can load our image file
  var loader = new THREE.TextureLoader();

  scene.add( createWasdImage(loader) );
  scene.add( createForwardsImage(loader) );
  scene.add( createBackwardsImage(loader) );


}
