import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainView } from './views/Main/Main.view';

export const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path="/">
                <MainView />
            </Route>
        </Switch>
    </Router>
);
