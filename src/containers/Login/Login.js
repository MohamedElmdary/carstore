import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';

class Login extends Component {

    state = {
        formControls:  [
            {
                name: "Email or UserName",
                id: "email1",
                type: "email",
                value: "",
                validation: {
                    touched: false,
                    valid: false
                }
            }, {
                name: "Password",
                id: "pass1",
                type: "password",
                value: "",
                validation: {
                    touched: false,
                    minLength: 6,
                    valid: false
                }
            }
        ]
    };

    changeState = (formControls) => {
        this.setState({formControls});
    }


    render() { 
        return (
            <Form changeState={this.changeState} formControls={this.state.formControls}>
                <div className="form-group">
                    <Link className="form-check-label" to="/register">New? Join Us!</Link>
                </div>
            </Form>
        );
    }
}
 
export default Login;