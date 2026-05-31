import React from 'react';
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard';

const SelectedPlayers = ({purchasePlayers, setPurchasePlayers,handleDelete}) => {
  
    return (
        
        <div className='max-w-[1320px] mx-auto mt-3'>
           {
            purchasePlayers.map(player=>(
                <SelectedPlayerCard player={player} handleDelete={handleDelete}></SelectedPlayerCard>
            ))
           }
        </div>
    );
};

export default SelectedPlayers;