import React from 'react';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';

function App() {
  const flag = true;

  const players = [
    { name: "Virat", score: 88 },
    { name: "Rohit", score: 92 },
    { name: "Rahul", score: 65 },
    { name: "Bumrah", score: 50 },
    { name: "Shami", score: 45 },
    { name: "Iyer", score: 78 },
    { name: "Gill", score: 84 },
    { name: "Pant", score: 55 },
    { name: "Kuldeep", score: 35 },
    { name: "Siraj", score: 60 },
    { name: "Jadeja", score: 74 },
  ];

  const IndianTeam = ["Virat", "Rohit", "Rahul", "Bumrah", "Gill", "Pant"];

  const T20players = ["Hardik", "SKY"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane"];
  const IndianPlayers = [...T20players, ...RanjiTrophyPlayers]; // Merge

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {/* <h1>Indian Team</h1> */}
          <h1>Odd Players</h1>
          <OddPlayers IndianTeam={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers IndianTeam={IndianTeam} />
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
