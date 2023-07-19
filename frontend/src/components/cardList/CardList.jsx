import React, { useEffect, useState }  from 'react';
import CardMini from '../cardCard/CardMini';
import axios from 'axios';

const CardList = () => {
    const [cardData, setCardData] = useState([])

useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cards`)
      .then((response) => setCardData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

    return (
        <div className='cardList'> 
        <h2>Voici votre ersatz de deck :</h2>
        <div className='cardsContainer'>
            {cardData.map((card)=> {
                return (
                    <CardMini
                    id={card.id}
                    cardName={card.card_name}
                     cardCost={card.cost}
                     cardImage={card.image}
                     cardAttack={card.attack}
                     cardDefense={card.defense}
                     cardDesc={card.description}
                />
                )
            })}
      
        </div>
         
        </div>
    );
};

export default CardList;