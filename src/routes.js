import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Fag from './Pages/Fag';
import Local from './Pages/Local';
import Categoria from './Pages/Categoria';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/fags" component={Fag} />
                <Route path="/locais" component={Local} />
                <Route path="/categorias" component={Categoria} />
            </Switch>
        </BrowserRouter>
    );
}
