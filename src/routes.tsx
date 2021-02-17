import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Repository from './Pages/Repository';
import Home from './Pages/Home';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Home } />
            <Route path="/repository/:id" exact component={ Repository } />
        </BrowserRouter>
    )
}

export default Routes;