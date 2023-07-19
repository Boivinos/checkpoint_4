import React from 'react';
import { NavLink } from "react-router-dom";

const CardMini = ({cardName,cardCost,cardImage,cardAttack,cardDefense, cardDesc,id}) => {


    return (
        <NavLink to={`/ersatz-deck/card/${id}`}>
        <div className='cardMini'>
           <div className="cardHeader">
            <p>{cardName.length > 25? cardName.slice(0,25)+"...":cardName}</p>
            <div className="cardCostBox"><span className='cardCost'>{cardCost}</span></div>
           </div>   
           <img src={cardImage} className='cardImage' />      
           <p className='cardDescBox'><span className='cardDesc'>{cardDesc}</span></p>
           <div className='cardStatsBox'><span className='cardStats'>{cardAttack}/{cardDefense}</span></div>
        </div>
           </NavLink>
    );
};

export default CardMini;