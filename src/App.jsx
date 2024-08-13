import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotCard from './components/BotCard';
import './App.css';
// component fpr fetching the bots 
const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
// fetching of bot fron the json file 
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);
// adddition of a bot to the army 
  const handleAddBot = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };
// removing of a bot from the army 
  const handleReleaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };
// discharging a bot from service 
  const handleDischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => setArmy(army.filter(b => b.id !== bot.id)));
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} handleAddBot={handleAddBot} />
      <YourBotArmy 
        army={army} 
        handleReleaseBot={handleReleaseBot} 
        handleDischargeBot={handleDischargeBot} 
      />
    </div>
  );
};

export default App;
 

 
