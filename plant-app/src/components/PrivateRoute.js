import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
	<Route
		{...rest}
		render={props => {
			if (localStorage.getItem('token')) {
				<Component {...props} />;
			} else {
				<Redirect to="/login" />;
			}
		}}
	/>;
}

export default PrivateRoute;
