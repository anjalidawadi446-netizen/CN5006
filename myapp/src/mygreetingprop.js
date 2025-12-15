import './App.css';

function GreetingElementWithProp(props) {
  console.log('prop is:', props.msg);

  return (
    <div className="App">
      <h1>{props.msg}</h1>
    </div>
  );
}

export default GreetingElementWithProp;
