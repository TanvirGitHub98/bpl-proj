import React from 'react';
import deleteImg from '../../assets/Vector.png'

const SelectedPlayerCard = ({player,handleDelete}) => {

    return (
        
        <div className='max-w-[1320px] mx-auto mt-3 flex items-center justify-between border border-gray-300 p-3 rounded-xl'>
            <div className="left flex gap-4 items-center">
                <div>
                    <img className='w-[100px] h-[100px] rounded-xl' src={player.image} alt="" />
                </div>
                <div>
                    <h1 className='font-bold'>{player.name}</h1>
                    <p className='text-gray-400 text-[12px]'>{player.battingHand}</p>
                </div>

            </div>
            <div className="right">
                <img className='cursor-pointer' onClick={()=>handleDelete(player)} src={deleteImg} alt="Delete image"  />

            </div>
        </div>
    );
};

export default SelectedPlayerCard;