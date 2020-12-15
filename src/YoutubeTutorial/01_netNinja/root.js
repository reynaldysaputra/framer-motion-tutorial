import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouteLink from './RouteLink';

function RootApplication() {
    return(
        <BrowserRouter>
            <RouteLink/>
        </BrowserRouter>
    )
}

export default RootApplication;