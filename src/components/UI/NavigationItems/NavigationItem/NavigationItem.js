import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <NavLink to={props.link} exact={props.exact}>
        <li className="NavigationItem">
            {props.children}
        </li>
    </NavLink>
);

export default navigationItem;
