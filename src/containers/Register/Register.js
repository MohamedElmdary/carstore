import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import axios from 'axios';

class Register extends Component {

    state = {
        formControls:  [
            {
                controlName: "name",
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
                controlName: "email",
                name: "Email",
                id: "email2",
                type: "email",
                value: "",
                validation: {
                    touched: false,
                    valid: false
                }
            }, {
                controlName: "password",
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
                controlName: "re_password",
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

    registerNewUser = (e) => {
        e.preventDefault();
        const formControls = [...this.state.formControls];
        let validation = true;
        formControls.forEach(control => {
            validation = (validation && control.validation.valid);
        });

        if (formControls[3].value !== formControls[2].value) {
            validation = false;
        }
        if (validation) {
            const data = {};
            formControls.forEach(control => {
                data[control.controlName] = control.value;
            });
            axios.post("/user/register", data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => {
                    if (err) throw err;
                })
        }
    }

    render() { 
        return <Form onSubmitForm={this.registerNewUser} submitName="Sign Up" changeState={this.changeState} formControls={this.state.formControls}/>;
    }
}
 
export default Register;