import React from 'react';
import './App.css';

function App() {
  const title = "Office Space";
  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 62000, Address: "Mumbai" },
    { Name: "WeWork", Rent: 58000, Address: "Bangalore" },
    { Name: "Smartworks", Rent: 61000, Address: "Hyderabad" }
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>{title}, at Affordable Range</h1>

      {offices.map((item, index) => {
        const rentClass = item.Rent <= 60000 ? "textRed" : "textGreen";

        return (
          <div key={index} style={{ marginBottom: "30px" }}>
            <img
              src="/office.jpg"
              width="25%"
              height="25%"
              alt="Office Space"
            />
            <h1>Name: {item.Name}</h1>
            <h3 className={rentClass}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
