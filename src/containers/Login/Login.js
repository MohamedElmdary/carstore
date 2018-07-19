import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { connect } from 'react-redux';
import * as authActions from '../../store/auth/auth.actions';

class Login extends Component {

    state = {
        formControls:  [
            {
                controlName: "email",
                name: "Email",
                id: "email1",
                type: "email",
                value: "",
                validation: {
                    touched: false,
                    valid: false
                }
            }, {
                controlName: "password",
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

    loginUser = (e) => {
        e.preventDefault();
        const formControls = [...this.state.formControls];
        let validation = true;
        formControls.forEach(control => {
            validation = (validation && control.validation.valid);
        });

        if (validation) {
            const data = {};
            formControls.forEach(control => {
                data[control.controlName] = control.value;
            });
            this.props.onLoginUser(data);
        }
    }


    render() { 
        return (
            <Form onSubmitForm={this.loginUser} submitName="Sign In" changeState={this.changeState} formControls={this.state.formControls}>
                <div className="form-group">
                    <Link className="form-check-label" to="/register">New? Join Us!</Link>
                </div>
            </Form>
        );
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: (data) => dispatch(authActions.loginUser(data))
    }
};

export default connect(null, mapDispatchToProps)(Login);