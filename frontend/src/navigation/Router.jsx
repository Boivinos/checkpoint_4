import React from 'react';
import { Routes, Route} from "react-router-dom";
import CardList from '../components/cardList/CardList';

const Router = () => {
    return (
        <Routes>
             <Route path="/ersatz-deck" element={<CardList />} /> 
        </Routes>
    );
};

export default Router;