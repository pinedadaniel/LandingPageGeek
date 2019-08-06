
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
//importamoos las paginasimport 
import Hero from './HeroComponent/Hero'



const App = () => {
    return (

        <BrowserRouter>
            <Layout>
                <Switch>
                    <Hero />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;
