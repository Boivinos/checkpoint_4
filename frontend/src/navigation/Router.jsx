import React from 'react';
import { Routes, Route} from "react-router-dom";
import CardList from '../components/cardList/CardList';
import CardDetails from '../components/cardDetail/cardDetails';
import AddCard from '../components/addCard/addCard';

const Router = () => {
    return (
        <Routes>
             <Route path="/ersatz-deck" element={<CardList />} /> 
             <Route path="/ersatz-deck/card/:id" element={<CardDetails />} /> 
             <Route path="/ersatz-deck/card/ajouter" element={<AddCard />} /> 
        </Routes>
    );
};

export default Router;