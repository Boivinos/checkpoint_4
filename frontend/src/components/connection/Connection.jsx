import React, { useState, useContext } from 'react';
import {useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import UserContext from '../context/UserContext';

const Connection = () => {
    const [connexionError, setConnexionError] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext);    
    const {
        register,
        handleSubmit,   
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{
        setConnexionError(false)
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/connexion`, data)
        .then((response)=> { 
            if (response.data === "user not found") {
                setConnexionError(true)
            } else {
                localStorage.clear()
                localStorage.setItem("user", JSON.stringify(response.data));
                setUser(JSON.parse(localStorage.getItem("user")))
                navigate("/ersatz-deck/")
        }
      
        })
        .catch(
            (error) => {
              console.error(error);
            }
          );
      }
    return (
        <div className='cardList'> 
     <h2>Bienvenue sur Magic Ersatz ! (en vrai c'est pas zinzin)</h2>
     <form className='connectionform' onSubmit={handleSubmit(onSubmit)}>                     
      <input placeholder="Email"
       {...register("email", 
       {required: true
       })} />
      {errors.email && <span className='formError'>Tu peux pas te co sans email faut pas abuser</span>}
      <input placeholder="Mot de passe" type="password"
       {...register("password", 
       {required: true
       })} />
      {errors.password && <span className='formError'>Faut aussi un mdp omg</span>}      
   
      <input className='submitButton' type="submit" value="Se connecter" />
{connexionError && <span className='formError'>Email ou mdp inconnu</span>}
    </form>
        </div>
    );
};

export default Connection;