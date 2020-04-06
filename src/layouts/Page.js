import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Page02 from '../pages/Page02';
import ErrorPage from '../pages/ErrorPage';
import ChefPage from '../pages/ChefPage';
import GuessPage from '../pages/GuessPage';

const Page = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => <HomePage numbers={props.numbers} changeNumber={props.changeNumber} />} />
                <Route path="/page02" render={() => <Page02 role={props.role} changeRole={props.changeRole} />} />
                <Route path="/szefowie" render={() => <ChefPage />} />
                <Route path="/zgadujacy" render={() => <GuessPage />} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;