import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  // 🔼 Increment Handler (calls two functions)
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  // 🔽 Decrement Handler
  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  // 👋 Say Hello
  const sayHello = () => {
    console.log("Hello! Counter was incremented.");
  };

  // 👋 Say welcome with argument
  const sayWelcome = (msg) => {
    alert("Welcome message: " + msg);
  };

  // 🖱️ Handle Synthetic Click Event
  const handleClick = (event) => {
    alert("I was clicked");
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button><br /><br />
      <button onClick={handleDecrement}>Decrement</button><br /><br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button><br /><br />
      <button onClick={handleClick}>Click on me</button><br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
