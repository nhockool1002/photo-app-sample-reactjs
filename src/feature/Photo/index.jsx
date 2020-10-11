import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEdit from './pages/AddEdit';
import MainPage from './pages/Main';


Photo.propTypes = {
    
};

function Photo(props) {
    // Get Parent URL
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route path={`${match.url}/add`} component={AddEdit} />
            <Route path={`${match.url}/:photoId`} component={AddEdit} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;