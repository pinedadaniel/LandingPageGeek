
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
//importamoos las paginasimport 
import Hero from './HeroComponent/Hero';
import CardData from './CardComponent/CardData';
import Aliados from './AliadosComponent/Aliados';
import Faq from './FaqComponent/Faq';

const App = () => {
    return (

        <BrowserRouter>
            <Layout>
                <Hero />
                <CardData />
                <Aliados />
                <Faq />
            </Layout>

        </BrowserRouter>
    );
}
export default App;
