import React from 'react';

const Scorebelow70 = ({ players }) => {
  const filtered = players.filter(player => player.score < 70);

  return (
    <ul>
      {filtered.map((player, index) => (
        <li key={index}>
          {player.name} - Score: {player.score}
        </li>
      ))}
    </ul>
  );
};

export default Scorebelow70;
