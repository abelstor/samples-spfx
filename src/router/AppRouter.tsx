
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '@/pages';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface AppRouterInterface {

    context: WebPartContext;
}

export const AppRouter: React.FC<AppRouterInterface> = (props) => {

    return (
        <Routes>
            <Route path="/" element={<Home {...props} />} />
        </Routes>
    )
}
