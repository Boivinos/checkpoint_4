import React, {useState, useRef} from 'react';
import {useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import placeHolder from "../../assets/placeholer.jpg"
import axios from 'axios';

const AddCard = () => {
    const [validation, setValidation] = useState(false) 
    const inputRef = useRef(null)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,   
        formState: { errors },
      } = useForm()
    const [cardData, setCardData] = useState(
        {
            attack: 0,
            defense: 0,
            cost: 0,
            description: "Description à remplir",
            card_name: "Nom à remplir",
            image: placeHolder
        }
    )

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", inputRef.current.files[0]);
        formData.append("attack", data.attack);
        formData.append("defense", data.defense);
        formData.append("card_name", data.card_name);
        formData.append("cost", data.cost);
        formData.append("description", data.description);
    
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cards`, formData)
        .then((response)=> { 
           setValidation(true)
             setCardData(response.data);
        })
        .catch(
            (error) => {
              console.error(error);
            }
          );
    }

    return (
        <div className='cardDetails'>
            <div
        className="returnButtonWrapper"
        onClick={() => navigate(-1)}
        onKeyDown={() => navigate(-1)}
        role="button"
        tabIndex={0}
      >
        <img src="https://i.ibb.co/PchSHGr/60793.png" alt="" />
        <p>Retour</p>
      </div>

      <h2>Ajouter une carte</h2>  
      <div className="detailsWrapper">
      <div className='cardMini'>
           <div className="cardHeader">
            <p>{cardData.card_name.length > 25? cardData.card_name.slice(0,25)+"...":cardData.card_name}</p>
            <div className="cardCostBox"><span className='cardCost'>{cardData.cost}</span></div>
           </div>   
           <img src={cardData.image} className='cardImage' />      
           <p className='cardDescBox'><span className='cardDesc'>{cardData.description}</span></p>
           <div className='cardStatsBox'><span className='cardStats'>{cardData.attack}/{cardData.defense}</span></div>
        </div>
                      <form className='editCard' onSubmit={handleSubmit(onSubmit)}>
                      <div className="input">
      <input placeholder={cardData.card_name}
       {...register("card_name", 
       {required: true
       })} />
      {errors.card_name && <span className='formError'>Pas de carte sans nom !</span>}
      </div>      
      <div className="input">
      <textarea placeholder={cardData.description}
            id="ContactForm_inputMessage"
            {...register("description", {
              required: true         
            })}  
          />
          {errors.description && <span className='formError'>T'as rien mis ici gros naze</span>}
      </div>
      <div className="numInput">    
            <span>Cout</span>
      <input
  type="number"
  defaultValue={cardData.cost}
  {...register("cost", {
    valueAsNumber: true,
  })}
/>
</div>
<div className="numInput">
            <span>Attaque</span>
      <input
  type="number"
  defaultValue={cardData.attack}
  {...register("attack", {
    valueAsNumber: true,
  })}
/>
</div>
<div className="defenseWrapper">
<div className="numInput">
            <span>Défense</span>
      <input
  type="number"
  defaultValue={cardData.attack}
  {...register("defense", {
    valueAsNumber: true,
    min: 1
  })}
/>
</div>
{errors.defense && <span className='formError'>Espèce de gland zéro de défense ta créa dead insta</span>}
</div>
<label>
    Ajouter une image : 
    <input        
        type="file"
        name="image"
        ref={inputRef}
    >
</input>
</label>
      <input className='submitButton' type="submit" value="Ajouter" />
      {validation &&  <span>Votre carte a bien été ajoutée !</span>}
    </form>
            </div>
        </div>
    );
};

export default AddCard;