import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';

const CardMini = ({cardName,cardCost,cardImage,cardAttack,cardDefense, cardDesc,id, choosenCard}) => {

const {user} = useContext(UserContext)
const navigate = useNavigate()

const handleClick = () => {
   if (user?.isAdmin) { 
navigate(`/ersatz-deck/card/${id}`)
}
    
}

    return (
        
        <div className={`cardMini ${user?.isAdmin && "pointCursor"} ${choosenCard == id && "choisie"}`} onClick={handleClick}>
           <div className="cardHeader">
            <p>{cardName.length > 25? cardName.slice(0,25)+"...":cardName}</p>
            <div className="cardCostBox"><span className='cardCost'>{cardCost}</span></div>
           </div>   
           <img src={cardImage} className='cardImage' />      
           <p className='cardDescBox'><span className='cardDesc'>{cardDesc}</span></p>
           <div className='cardStatsBox'><span className='cardStats'>{cardAttack}/{cardDefense}</span></div>
        </div>
           
    );
};

export default CardMini;