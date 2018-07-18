import React, { Component } from 'react';
import Form from '../../components/Form/Form';

class Register extends Component {

    state = {
        formControls:  [
            {
                name: "UserName",
                id: "username1",
                type: "text",
                value: "",
                validation: {
                    touched: false,
                    valid: false,
                    minLength: 4
                }
            },
            {
                name: "Email",
                id: "email2",
                type: "email",
                value: "",
                validation: {
                    touched: false,
                    valid: false
                }
            }, {
                name: "Password",
                id: "pass2",
                type: "password",
                value: "",
                validation: {
                    touched: false,
                    minLength: 6,
                    valid: false
                }
            }, {
                name: "Re-Password",
                id: "pass3",
                type: "password",
                value: "",
                validation: {
                    touched: false,
                    minLength: 6,
                    valid: false,
                    confirmation: true
                }
            }
        ]
    };

    changeState = (formControls) => {
        this.setState({formControls});
    }

    render() { 
        return <Form changeState={this.changeState} formControls={this.state.formControls}/>;
    }
}
 
export default Register;