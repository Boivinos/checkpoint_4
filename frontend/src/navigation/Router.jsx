import React from 'react';
import { Routes, Route} from "react-router-dom";
import CardList from '../components/cardList/CardList';
import CardDetails from '../components/cardDetail/cardDetails';
import AddCard from '../components/addCard/addCard';
import Connection from '../components/connection/connection';

const Router = () => {
    return (
        <Routes>
             <Route path="/" element={<Connection />} /> 
             <Route path="/ersatz-deck" element={<CardList />} /> 
             <Route path="/ersatz-deck/card/:id" element={<CardDetails />} /> 
             <Route path="/ersatz-deck/card/ajouter" element={<AddCard />} /> 
        </Routes>
    );
};

export default Router;