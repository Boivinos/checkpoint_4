import React, { useEffect, useState, useRef }  from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import CardMini from '../cardCard/CardMini';
import { useForm } from "react-hook-form"

const CardDetails = () => {
    const [cardData, setCardData] = useState(undefined)
    const [validation, setValidation] = useState(false)   
    const { id } = useParams();
    const navigate = useNavigate()
    const inputRef = useRef(null)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cards/${id}`)
      .then((response) => setCardData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  const onSubmit = (data) =>{
    const formData = new FormData();
    formData.append("image", inputRef.current.files[0]);
    formData.append("attack", data.attack);
    formData.append("defense", data.defense);
    formData.append("card_name", data.card_name);
    formData.append("cost", data.cost);
    formData.append("description", data.description);

    axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/cards/${id}`, formData)
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

const handleDelete = () => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/cards/${id}`)
    .then(()=> { 
        navigate("/ersatz-deck")
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
      {cardData &&
<>
            <h2>Editer {cardData.card_name}</h2>           
            <div className="detailsWrapper">
                <CardMini
                  id={cardData.id}
                  cardName={cardData.card_name}
                   cardCost={cardData.cost}
                   cardImage={cardData.image}
                   cardAttack={cardData.attack}
                   cardDefense={cardData.defense}
                   cardDesc={cardData.description}            
                />
                      <form className='editCard' onSubmit={handleSubmit(onSubmit)}>
                      <div className="input">
      <input defaultValue={cardData.card_name}
       {...register("card_name", 
       {required: true
       })} />
      {errors.card_name && <span className='formError'>Pas de carte sans nom !</span>}
      </div> 
      <div className="input">
      <textarea defaultValue={cardData.description}
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
      <input className='submitButton' type="submit" />
      {validation &&  <span>Votre carte a bien été modifiée !</span>}
    </form>
            </div>
      
            </>
            }
            <button onClick={()=> handleDelete()}>En cas d'urgence, cliquez ici pour supprimer</button>
        </div>
    );
};

export default CardDetails;