    
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
//importamoos las paginas



const App = () => {
    return (
        
        <BrowserRouter>     
            <Layout>
                <Switch>
                    
                </Switch> 
            </Layout>          
        </BrowserRouter>
    );
}
export default App;
