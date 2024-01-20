import './App.css';

function App() {
  return (
    <>
      <CardWrapper InnerComponent={TextComponent} />
      <CardWrapper2>
        <TextComponent/>
        <h1>yo</h1>
      </CardWrapper2>
    </>
  );
}

function TextComponent() {
  return <div>hi there</div>;
}

function CardWrapper({InnerComponent}) {
  return (
    <div style={{ border: "2px solid black" }}>
      <InnerComponent />
    </div>
  );
}

function CardWrapper2({children}) {
  return (
    <div style={{ border: "2px solid red" }}>
      <children/>
    </div>
  );
}

export default App;