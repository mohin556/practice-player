import React from 'react';
import './list.css';

const list = (props) => {
    console.log(props.player.image);
    const {name,age,country,image,salary,gender} = props.player;
    
    return (
      <div className="full-container">
             <div className="list-container">
      
      <div className="image">
       
         <img src={image} width="250" height="430" alt=""/>
      </div>
   
          <div className="details">
              <h4>name:{name}</h4>
              <h4>age :{age}</h4>
              <h4>country:{country}</h4>
              <h4>${salary}</h4>
              <h4>gender:{gender}</h4>

                    <button className="player-button">
                        Add Player
                    </button>  
          </div>
               
      </div>




      </div>
    );
};

export default list;