import SquareButton from "./components/SquareButton";

function App() {
  return (
    <div className="app-container">
      <div className="button-row">
        <SquareButton />
        <SquareButton />
        <SquareButton />
      </div>
      <div className="button-row">
        <SquareButton />
        <SquareButton />
        <SquareButton />
      </div>
      <div className="button-row">
        <SquareButton />
        <SquareButton />
        <SquareButton />
      </div>
    </div>
  );
}

export default App;
