var paintings = [
  "152414561_714028852647187_6553680962474280933_n.jpg",
  "152422489_1393835924320598_179824803962353269_n.jpg",
  "152435663_1047804788958486_2566929566595162337_n.jpg",
  "152450998_418750205893949_1323928019240639510_n.jpg",
  "152491219_697387210940571_6410557920938686347_n.jpg",
  "152505697_768594837092288_3455881816861959791_n.jpg",
  "152534965_191214112796353_4370932435445720685_n.jpg",
  "152629748_764282030867435_4547661426565101433_n.jpg",
  "152673536_1338186359907342_1952251278993986353_n.jpg",
  "152688504_1151394575309803_3598634197358944615_n.jpg",
  "152706630_1157496274706976_6922795612593609570_n.jpg",
  "152714605_2760246060953269_381365150370597764_n.jpg",
  "152758685_817115078844328_7752354063567990021_n.jpg",
  "152798618_1834297616722627_2686715891837983623_n.jpg",
  "152815811_255055772848929_2761950822017897981_n.jpg",
  "152854291_265252655051244_3546952003699760980_n.jpg",
  "152893627_252404693136084_2612744834760177982_n.jpg",
  "152910300_2962819793975673_8034877600574230534_n.jpg",
  "152926839_131289435544287_1668537639517575804_n.jpg",
  "152929142_924089845061774_5170867508211587228_n.jpg",
  "152959881_746884406245425_2548119114474675286_n.jpg",
  "153034441_1046930292471620_3444015680541062018_n.jpg",
  "153050183_291122532548719_8952574051288634209_n.jpg",
  "153160270_3380217748749423_5264113868135020332_n.jpg",
  "153188434_2802089196775235_3425187609957975858_n.jpg",
  "153217056_753779845343709_2421320161535710236_n.jpg",
  "153248167_1159817131111123_2844317962160425003_n.jpg",
  "153267839_435628047513326_3818144979278986029_n.jpg",
  "153271833_3874700175885635_5479496221551557438_n.jpg",
  "153278737_899297024163450_5271981574421006254_n.jpg",
  "153506134_1079917555860727_1834874589302593481_n.jpg",
  "153514618_491694372218504_5490839903251632455_n.jpg",
  "153654716_3730400087078630_8376481742171075422_n.jpg"
]

var positions = [
  [0, 0, 52],
  [100, 0, 52],
  [200, 0, 52],
  [345, 0, 140],
  [345, 0, 240],
  [345, 0, 340],
  [345, 0, 440],
  [345, 0, 540],
  [345, 0, 640],
  [345, 0, 740],
  [245, 0, 848],
  [145, 0, 848],
  [45, 0, 848],
  [-55, 0, 848],
  [-155, 0, 848],
  [-255, 0, 848],
  [-355, 0, 848],
  [-448, 0, 750],
  [-448, 0, 650],
  [-448, 0, 550],
  [-448, 0, 450],
  [-448, 0, 350],
  [-448, 0, 250],
  [-448, 0, 150],
  [-350, 0, 52],
  [-250, 0, 52],
  [-125, 0, 52]
]

var rotations = [
  0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,0,0,0
]


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

    plane.position.x = positions[id][0]
    plane.position.y = positions[id][1]
    plane.position.z = positions[id][2]

    // add canvas
    const geometry = new THREE.BoxGeometry( plane.scale.x*10, plane.scale.y*10, 2 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    const cube = new THREE.Mesh( geometry, material );

    cube.position.x = positions[id][0]
    cube.position.y = positions[id][1]
    cube.position.z = positions[id][2]

    if (rotations[id] == 0) {
      cube.position.z -= 1.51
    }
    if (rotations[id] == 1) {
      cube.position.x += 1.51
      cube.rotation.y = (Math.PI/4) * 6;
      plane.rotation.y = (Math.PI/4) * 6;
    }
    if (rotations[id] == 2) {
      cube.position.z += 1.51
      cube.rotation.y = (Math.PI/4) * 4;
      plane.rotation.y = (Math.PI/4) * 4;
    }
    if (rotations[id] == 3) {
      cube.position.x -= 1.51
      cube.rotation.y = (Math.PI/4) * 2;
      plane.rotation.y = (Math.PI/4) * 2;
    }

    scene.add( cube );

}

function createPaintingImage(id, scene) {
    var loader = new THREE.TextureLoader();
    var geometry, material, plane

    var texture = loader.load( './img/painting/'+paintings[id], function ( tex ) {
      // tex and texture are the same in this example, but that might not always be the case
      console.log( tex.image.width, tex.image.height );
      console.log( texture.image.width, texture.image.height );
      console.log( texture.image.width/texture.image.height );
      var ratio = texture.image.width/texture.image.height
      console.log("10 "+(10*ratio))
      plane.scale.x = 5
      plane.scale.y = (5/ratio)
      positionPlane(id, plane, scene)
    } );

    var materialPic = new THREE.MeshLambertMaterial({
      map: texture
    });
    materialPic.transparent = true

    geometry = new THREE.PlaneGeometry( 10, 10 );
    material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometry, materialPic );

    plane.position.x = -50
    plane.position.y = 25
    plane.position.z = 350

    return plane
}

export function spawnPaintings(scene) {
  scene.add(createPaintingImage(0, scene))
  scene.add(createPaintingImage(1, scene))
  scene.add(createPaintingImage(2, scene))
  scene.add(createPaintingImage(3, scene))
  scene.add(createPaintingImage(4, scene))
  scene.add(createPaintingImage(5, scene))
  scene.add(createPaintingImage(6, scene))
  scene.add(createPaintingImage(7, scene))
  scene.add(createPaintingImage(8, scene))
  scene.add(createPaintingImage(9, scene))
  scene.add(createPaintingImage(10, scene))
  scene.add(createPaintingImage(11, scene))
  scene.add(createPaintingImage(12, scene))
  scene.add(createPaintingImage(13, scene))
  scene.add(createPaintingImage(14, scene))
  scene.add(createPaintingImage(15, scene))
  scene.add(createPaintingImage(16, scene))
  scene.add(createPaintingImage(17, scene))
  scene.add(createPaintingImage(18, scene))
  scene.add(createPaintingImage(19, scene))
  scene.add(createPaintingImage(20, scene))
  scene.add(createPaintingImage(21, scene))
  scene.add(createPaintingImage(22, scene))
  scene.add(createPaintingImage(23, scene))
  scene.add(createPaintingImage(24, scene))
  scene.add(createPaintingImage(25, scene))
  scene.add(createPaintingImage(26, scene))
}
/*
var loader = new THREE.TextureLoader();
var texture = loader.load( "./img.png", function ( tex ) {
  // tex and texture are the same in this example, but that might not always be the case
  console.log( tex.image.width, tex.image.height );
  console.log( texture.image.width, texture.image.height );
} );*/
