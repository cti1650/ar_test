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
