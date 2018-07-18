import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarItem = (props) => {
    let item = (
        <li className="nav-item">
            <NavLink exact to={props.to} className="nav-link">{props.name.toUpperCase()}</NavLink>
        </li>
    );
    if (props.btn) {
        item = (
            <li className="nav-item">
                <NavLink to={props.to} className="nav-link">
                    <button  className="btn btn-sm btn-outline-primary">{props.name.toUpperCase()}</button>
                </NavLink>
            </li>
        );
    }

    return item;
}

export default navbarItem;