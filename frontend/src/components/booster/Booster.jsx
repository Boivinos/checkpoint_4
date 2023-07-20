import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';
import Timer from './Timer';
import OpenBooster from './OpenBooster';

const Booster = () => {
const {user} = useContext(UserContext)
const [booster, setBooster] = useState(undefined)
const [screen, setScreen] = useState("initial")
useEffect(()=> {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/booster/${user && user.id}`)
    .then((response)=> { 
       setBooster(parseInt(response.data.booster_restant));
    })       
    .catch(
        (error) => {
          console.error(error);
        }
      );

},[user])

    return (
        <div className='cardList'>
            {booster && screen !== "open" ? <h2>Tu peux ouvrir un booster, attention il t'en reste {booster} </h2>:""}
            {!booster && screen !== "open" && <h2>Tu n'as plus de booster, cheh !</h2>}
            {screen === "open" && (<h2>Clique sur une carte pour l'ajouter à ton deck</h2> )}
             <div className="boosterWrapper">
            {booster && screen === "initial" ? (<button onClick={()=> setScreen("timer")}>Ouvrir un booster !</button>):""}
            {screen === "timer" && (<Timer
            setScreen={setScreen}
            />)}
            {screen === "open" && ( <OpenBooster
            booster={booster}
            /> )}
             </div>
        </div>
    );
};

export default Booster