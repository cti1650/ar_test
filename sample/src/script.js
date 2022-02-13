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
  console.log(props)
  return (
    <React.Fragment>
      <a-marker preset="hiro" id="app">
        {props.children}
      </a-marker>
      <a-entity camera></a-entity>
    </React.Fragment>
  );
};
const App2 = () => {
  const [rendered, setRendered] = React.useState(true);
  console.log("done")
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
  console.log("done")
  return (
    <ARFrame>
      <Dinosaur />
    </ARFrame>
  );
};
ReactDOM.render(<App2 />, document.getElementById("app"));
