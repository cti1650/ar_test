const ARFrame = (props) => {
  console.log("load ARFrame");
  console.log(props);
  return <React.Fragment>{props.children}</React.Fragment>;
};
const App2 = () => {
  const [rendered, setRendered] = React.useState(true);
  console.log("App2 done");
  const comp = React.useCallback(() => {
    return (
      <ARFrame>
        <Dinosaur />
      </ARFrame>
    );
  }, []);
  return <React.Fragment>{comp()}</React.Fragment>;
};

const HiroApp = () => {
  const [flag, setFlag] = React.useState(false);
  const handleChange = React.useCallback(
    (e) => {
      setFlag((prev) => {
        return !prev;
      });
    },
    [flag]
  );
  console.log("HiroApp done");
  return (
    <ARFrame>
      {flag ? <Airplane /> : <Dinosaur />}
      <div className="fixed bottom-0 left-0 z-50 bg-gray-100 border-gray-300 m-1 py-2 px-4 rounded select-none">
        <label>
          <input
            type="checkbox"
            onClick={handleChange}
            value={flag}
            className="mr-2"
          ></input>
          <span>オブジェクト切り替え</span>
        </label>
      </div>
    </ARFrame>
  );
};
const KanjiApp = () => {
  console.log("KanjiApp done");
  return (
    <ARFrame>
    </ARFrame>
  );
};
const ParentObject = () => {
  console.log("ParentObject done");
  return (
    <ARFrame>
    </ARFrame>
  );
};
// ReactDOM.render(<ParentObject />, document.getElementById("parent"));
ReactDOM.render(<HiroApp />, document.getElementById("hiro_maker"));
// ReactDOM.render(<KanjiApp />, document.getElementById("kanji_maker"));
