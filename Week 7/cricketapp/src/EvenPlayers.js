import React from 'react';

const EvenPlayers = ({ IndianTeam }) => {
  const evenTeam = IndianTeam.filter((_, index) => index % 2 === 0);
  return (
    <ul>
      {evenTeam.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
};

export default EvenPlayers;
