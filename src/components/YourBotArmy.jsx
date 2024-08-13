import React from 'react';
// This component is for displaying the users bot army 
const YourBotArmy = ({ army, handleReleaseBot, handleDischargeBot }) => {
  return (
    <div className="your-bot-army">
      {army.map(bot => (
        <div key={bot.id} className="army-bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <button onClick={() => handleReleaseBot(bot)}>Release</button>
          <button onClick={() => handleDischargeBot(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
