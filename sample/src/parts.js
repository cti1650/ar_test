const GlbSample = () => {
  console.log("load glbSample");
  return (
    <a-entity
      position="0 0 0"
      scale="0.05 0.05 0.05"
      gltf-model="model/sample/00000.glb"
    ></a-entity>
  );
};
const Dinosaur = () => {
  console.log("load Dinosaur");
  return (
    <a-entity
      position="0 0 0"
      scale="0.05 0.05 0.05"
      gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
    ></a-entity>
  );
};
const WireFrameBox = () => {
  console.log("load Wire Frame Box");
  return <a-box position="0 0.5 0" wireframe="true"></a-box>;
};
const Airplane = () => {
  console.log("load Airplane");
  return (
    <a-entity
      position="0 0 0"
      scale="0.05 0.05 0.05"
      rotation={`0 0 0`}
      gltf-model="model/airplane/scene.gltf"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 4000; easing:linear;"
    >
    </a-entity>
  );
};
const Movie = () => {
  console.log("load Movie");
  return (
    <React.Fragment>
      <a-video
        id="video_movie_data"
        src="#video_namahage"
        position="0 0 0"
        rotation="90 0 0"
        width="2"
        height="2"
      ></a-video>
    </React.Fragment>
  );
};
