import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Inscription = ({setInscription, setInscriptionSuccess}) => {
    const {
        register,
        handleSubmit,   
        formState: { errors },
      } = useForm()

      const onInscription = (data)  =>{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/inscription`, data)
        .then((response)=> { 
            if (response.data === "user created") {
         setInscription(false)      
         setInscriptionSuccess(true)      
        }        
    })              
        .catch(
            (error) => {
              console.error(error);
            }
          );
        }

    return (
        <form className='connectionform' onSubmit={handleSubmit(onInscription)}> 
     <input placeholder="Nom"
       {...register("user_name", 
       {required: true
       })} />  
       {errors.user_name &&  <span className='formError'>Donne ton blaze omg</span>}                  
      <input placeholder="Email"
       {...register("email", 
       {required: true
       })} />
      {errors.email &&<span className='formError'>Tu peux pas t'inscrire sans email faut pas abuser</span>}
      <input placeholder="Mot de passe" type="password"
       {...register("password", 
       {required: true
       })} />
      {errors.password && <span className='formError'>Faut aussi un mdp omg</span>}      
   
      <input className='submitButton' type="submit" value="S'inscrire" />
<button className='inscription' onClick={() => setInscription(false)}>Retour</button>
    </form> 
    );
};

export default Inscription;