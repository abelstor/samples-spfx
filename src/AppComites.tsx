import { WebPartContext } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { AppRouter } from './router';

export interface AppComitesInterface {

    context: WebPartContext;
}

export const AppComites: React.FC<AppComitesInterface> = (props) => {

    return (
        <Router basename="/">
            <AppRouter {...props} />
        </Router>
    )
};