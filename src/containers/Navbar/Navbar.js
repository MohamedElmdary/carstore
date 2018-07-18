import React, { Component } from 'react';
import NavbarItem from '../../components/NavbarItem/NavbarItem';
import './Navbar.scss';

class Navbar extends Component {

    state = {
        navBarItems: [
            {name: "home", to: "/"},
            {name: "products", to: "/products"},
            {name: "contact", to: "/contact"},
            {name: "login", to: "/login", btn: true},
        ]
    }

    render() { 

        const items = this.state.navBarItems.map(item => (
            <NavbarItem key={item.name} 
                        btn={item.btn} 
                        name={item.name} 
                        to={item.to}/>
        ));

        return (
            <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand">Navbar</span>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {items}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;