import React from 'react';
import CardMini from '../cardCard/CardMini';

const CardList = () => {
    return (
        <div className='cardList'> 
        <h2>Voici votre ersatz de deck :</h2>
          <CardMini/>
        </div>
    );
};

export default CardList;