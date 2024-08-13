import React from 'react';
// This component is for the bot cards with their individual descriptions/details
const BotCard = ({ bot, onAddBot }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={() => onAddBot(bot)}>Add to Army</button>
    </div>
  );
};

export default BotCard;
