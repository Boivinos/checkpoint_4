import React from 'react';

const CardMini = () => {

    const cardName = "Magicienne au rabais"
    const cardCost = 2
    const cardImage = "https://images.ctfassets.net/s5n2t79q9icq/4s3ygGWPG5QRL2SDOMZ3HA/51d9e0188b4578dff5aab889bf846e57/en_articles_archive_card-image-gallery_strixhaven-school-mages-art-cards-2021-04-15-meta-image.jpeg"
    const cardAttack = 1
    const cardDefense = 2
    const cardDesc = "Une magicienne vraiment pas zinzin, elle connait juste wingardium leviosaaaaa"

    return (
        <div className='cardMini'>
           <div className="cardHeader">
            <p>{cardName}</p>
            <div className="cardCostBox"><span className='cardCost'>{cardCost}</span></div>
           </div>
           <img src={cardImage} className='cardImage' />
        </div>
    );
};

export default CardMini;