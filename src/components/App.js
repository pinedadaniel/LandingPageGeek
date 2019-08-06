    
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
//importamoos las paginas

import CardData from './Card/CardData';



const App = () => {
    return (
        
        <BrowserRouter>     
            <Layout>
                <Switch>
                    <CardData/> 
                </Switch> 
            </Layout>          
        </BrowserRouter>
    );
}
export default App;
