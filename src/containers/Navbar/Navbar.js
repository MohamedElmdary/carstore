import React, { Component } from 'react';
import NavbarItem from '../../components/NavbarItem/NavbarItem';
import { connect } from 'react-redux';
import './Navbar.scss';

class Navbar extends Component {

    render() {
        const navBarItems = [
            {name: "home", to: "/", exact: true},
            {name: "products", to: "/products"},
            {name: "contact", to: "/contact"}, 
            this.props.token ? null : {name: "login", to: "/login", btn: true}
        ];
        
        const items = navBarItems.map(item => {
            if (item === null) return null;
            return <NavbarItem 
                        key={item.name} 
                        exact={item.exact}
                        btn={item.btn}
                        name={item.name} 
                        to={item.to}/>;
        });

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

const mapStateToProps = state => {
    return {
        token: state.auth.token !== null ? true : false
    }
};
 
export default connect(mapStateToProps)(Navbar);