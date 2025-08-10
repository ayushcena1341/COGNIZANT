import React from 'react';

const OddPlayers = ({ IndianTeam }) => {
  const oddTeam = IndianTeam.filter((_, index) => index % 2 !== 0);
  return (
    <ul>
      {oddTeam.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
};

export default OddPlayers;
