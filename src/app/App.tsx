import TicTacInner from "./layout/TicTacInner/TicTacInner";
import Header from "./layout/Header/Header";

function App() {
  return (
    <div className="main-fullscreen">
      <Header />
      <main className="w-full md:w-xl pl-4 pr-4">
        <TicTacInner />
      </main>
    </div>
  );
}

export default App;
