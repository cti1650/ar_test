const Dinosaur = () => {
  return (
    <a-entity
      position="0 0 0"
      scale="0.05 0.05 0.05"
      gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
    ></a-entity>
  );
};
const WireFrameBox = () => {
  return <a-box position="0 0.5 0" wireframe="true"></a-box>;
};
const ARFrame = (props) => {
  return (
    <a-scene arjs>
      <a-marker preset="hiro" id="app">
        {props.children}
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};
const App2 = () => {
  const [rendered, setRendered] = React.useState(true);
  const comp = React.useCallback(() => {
    return (
      <ARFrame>
        <Dinosaur />
      </ARFrame>
    );
  }, []);
  return <React.Fragment>{comp()}</React.Fragment>;
};

const App = () => {
  return (
    <ARFrame>
      <Dinosaur />
    </ARFrame>
  );
};
ReactDOM.render(<App />, document.getElementById(".app"));
