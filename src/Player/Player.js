import playerData from '../Data/Data.json';
import List from '../component/Header/List/list'
import React, { useState } from 'react';
import './player.css';
const Player = () => {
    const player10 = playerData;
    const [player,setPlayer] = useState(player10);
    return (
        <div className="player-container">
             <div className="player">
                    {
                        player.map(pl=> <List player={pl}> </List>   )
                    }
             </div>
      
       <div className="cart-cointainer">
            <h2>Team Cost</h2>
            <button className="button"> Fixed</button>
       </div>
         <div>  
            
      
         </div>
       
        </div> 
        
        
       
    );
};

export default Player;