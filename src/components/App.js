
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
//importamoos las paginasimport 
import Hero from './HeroComponent/Hero'
import Aliados from './AliadosComponent/Aliados'



const App = () => {
    return (

        <BrowserRouter>
            <Layout>

                <Hero />
                <Aliados />

            </Layout>
        </BrowserRouter>
    );
}
export default App;
