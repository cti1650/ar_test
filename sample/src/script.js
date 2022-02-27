const ARFrame = (props) => {
  console.log("load ARFrame");
  console.log(props);
  return <React.Fragment>{props.children}</React.Fragment>;
};

const OptionBox = ({onClick,title,checked}) => {
  return (
    <button
      className={["border-gray-300 m-1 py-1 px-2 rounded select-none",checked ? "bg-red-300": "bg-gray-100"].join(" ")}
      onClick={() => {
        onClick(title)
      }}
      value={title}
      >
        {title}
      </button>
  );
}

const dataSet = [
  {title:"Airplane",component:Airplane},
  {title:"Dinosaur",component:Dinosaur},
  {title:"GlbSample",component:GlbSample},
  {title:"WireFrameBox",component:WireFrameBox},
  {title:"Move",component:Move},
];

const HiroApp = () => {
  const [selectItem, setSelectItem] = React.useState("WireFrameBox");
  const getComponent = React.useCallback(() => {
    const data = [...dataSet].filter(item=>{
      return item.title === selectItem;
    });
    return data[0].component();
  },[selectItem]);
  const handleChange = React.useCallback(
    (title) => {
      setSelectItem(prev=>{
        return prev !== title ? title : prev;
      });
    },
    [selectItem]
  );
  console.log("HiroApp done");
  return (
    <ARFrame>
      <div className="fixed bottom-0 left-0 flex flex-col z-50 bg-gray-100 border-gray-300 m-1 py-1 px-2 rounded select-none">
      {dataSet.map(item=>{
        return <OptionBox key={item.title} title={item.title} checked={item.title===selectItem} onClick={handleChange}/>
      })}
      </div>
      {getComponent && getComponent()}
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
ReactDOM.render(<HiroApp />, document.getElementById("hiro_maker"));
