import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js";
import Card from "./Card.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>CS 230L</h1>
        <h2>Section-03</h2>
        <p>WVU ID: 800357876</p>
        <p>Hi, I am Izaak Whetsell</p>
      </div>
      <Card/>
    </div>
  );
}

export default App;
