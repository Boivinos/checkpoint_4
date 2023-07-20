import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import CardMini from '../cardCard/CardMini';
import UserContext from '../context/UserContext';
import {useNavigate } from "react-router-dom";

const OpenBooster = ({booster}) => {
    const [cardData, setCardData] = useState([])
    const [choosenCard, setChoosenCard] = useState(undefined)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/random/booster`)
          .then((response) => setCardData(response.data))
          .catch((error) => console.error(error.message));
      }, []);

const handleChoose = (id) => {
    setChoosenCard(id)
}

const handleClick = (id) => {
    const data = {
        id:id,
        booster_count:booster
    }
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/addCard/${user.id}`,data)
    .then(() => navigate('/ersatz-deck/mon-deck'))
    .catch((error) => console.error(error.message));
   
}


    return (
        <div className='cardsContainer'>
          {cardData.map((card)=> {
                return (
                    
                    <div className='pickCard' onClick={() => handleChoose(card.id)}>
                    <CardMini
                    id={card.id}
                    cardName={card.card_name}
                     cardCost={card.cost}
                     cardImage={card.image}
                     cardAttack={card.attack}
                     cardDefense={card.defense}
                     cardDesc={card.description}   
                     choosenCard={choosenCard}                                       
                />
                </div>
                )
            })}
            <button className={!choosenCard && "hidden"} onClick={() => handleClick(choosenCard)} >Valider</button>            
        </div>
    );
};

export default OpenBooster;