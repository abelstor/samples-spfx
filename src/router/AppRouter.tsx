import * as React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Home, Matriz } from '@/pages';
import { NavBar } from '@/components';

export interface AppRouterInterface {

    context: WebPartContext;
}

const AppRouter: React.FC<AppRouterInterface> = (props) => {

    return (
        <Router basename="/">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="matriz" element={<Matriz {...props} />} />
            </Routes>
        </Router>
    )
};

export default AppRouter;