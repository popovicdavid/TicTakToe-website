import SquareButton from "./components/SquareButton";

function App() {
  return (
    <div>
      {/* First set of SquareButtons */}
      <div>
        <SquareButton />
        <SquareButton />
        <SquareButton />
      </div>

      {/* second set of SquareButtons */}
      <div>
        <SquareButton />
        <SquareButton />
        <SquareButton />
      </div>

      {/* Third set of SquareButtons */}
      <div>
        <SquareButton />
        <SquareButton />
        <SquareButton />
      </div>
    </div>
  );
}

export default App;
