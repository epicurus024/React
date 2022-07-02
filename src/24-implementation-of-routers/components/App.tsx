import React from 'react';
import { Route } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import Home from './Home';
import Contact from './Contact';

import './app.css';

const App = () => {
    return (
        <>
            <NavigationMenu />

            <Route exact path="/" component={Home} />
            <Route  exact path="/contact" component={Contact}/>
        </>
    );
};

export default App;
