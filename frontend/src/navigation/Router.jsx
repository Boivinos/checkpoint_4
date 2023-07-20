import React, {useContext} from 'react';
import { Routes, Route} from "react-router-dom";
import CardList from '../components/cardList/CardList';
import CardDetails from '../components/cardDetail/cardDetails';
import AddCard from '../components/addCard/addCard';
import Connection from '../components/connection/connection';
import AdminProtected from '../components/context/AdminProtected';
import UserContext from '../components/context/UserContext';
import Booster from '../components/booster/Booster';

const Router = () => {
    const {user} = useContext(UserContext)
   
    return (
        <Routes>
             <Route path="/" element={<Connection />} /> 
             <Route path="/ersatz-deck" element={
             <AdminProtected>
             <CardList
               title={"Toutes les cartes, toutes nazes"}
               query={`${import.meta.env.VITE_BACKEND_URL}/api/cards`}
             />
             </AdminProtected>
             } /> 
             <Route path="/ersatz-deck/mon-deck" element={<CardList
             title={`Voici le deck pas ouf de ${user && user.user_name}`}
             query={`${import.meta.env.VITE_BACKEND_URL}/api/deck/${user && user.id}`}
              />} /> 
             <Route path="/ersatz-deck/card/:id" element={<AdminProtected><CardDetails /></AdminProtected>} /> 
             <Route path="/ersatz-deck/card/ajouter" element={<AdminProtected> <AddCard /></AdminProtected >} /> 
             <Route path="/ersatz-deck/booster" element={ <Booster />} /> 
        </Routes>
    );
};

export default Router;