import "./App.css";
import { useState, useEffect } from "react";
import { CampForm } from "./Campform";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/campsites")
      .then(res => res.json())
      .then(data => setData(data.campgrounds));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : JSON.stringify(data)}</p>
        <CampForm />
      </header>
    </div>
  );
}

export default App;
