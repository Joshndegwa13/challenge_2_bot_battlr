import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
// This component is for listing down the bots which are there 
const BotCollection = ({ bots, handleAddBot }) => {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onAddBot={handleAddBot} />
      ))}
    </div>
  );
};

export default BotCollection;
