import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Page02 from '../pages/Page02';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/page02" component={Page02} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;