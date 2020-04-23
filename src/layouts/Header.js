import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChefPageHeader from '../Headers/ChefPageHeader';
import GuessPageHeader from '../Headers/GuessPageHeader';
import StandardHeader from '../Headers/StandardHeader';


const Header = (props) => {
    return (
        <Switch>
            <Route path="/szefowie" exact render={() => <ChefPageHeader />} />
            <Route path="/zgadujacy" exact render={() => <GuessPageHeader gameEnded={props.gameEnded} />} />
            <Route path="/" component={StandardHeader} />
            <Route component={StandardHeader} />
        </Switch>
    );
}

export default Header;