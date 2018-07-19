import React, { Component } from 'react';
import FormControl from '../FormControl/FormControl';

class Form extends Component {

    changedHandler(event, id) {
        const formControls = [...this.props.formControls];
        const changedControlIndex = formControls.findIndex(control => control.id === id);
        const changedControl = {...formControls[changedControlIndex]};
        changedControl.value = event.target.value;
        if (changedControl.validation.touched === false) {
            changedControl.validation.touched = true;
        }

        if (changedControl.type === "email") {
            // eslint-disable-next-line
            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
            changedControl.validation.valid = reg.test(String(event.target.value).toLowerCase())
        } else {
            changedControl.validation.valid = event.target.value.length >= changedControl.validation.minLength ? true : false;
        }

        if (changedControl.validation.confirmation === true) {
            const confirmNeeded = formControls[changedControlIndex - 1];
            changedControl.validation.valid = changedControl.validation.valid && (changedControl.value === confirmNeeded.value ? true : false);
        }
        
        formControls[changedControlIndex] = changedControl;
        this.props.changeState(formControls);
    }

    render() { 
        return (
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-sm-10 col-11 mx-auto" style={{marginTop: '100px'}}>
                            <div>
                                <form>
                                    {this.props.formControls.map(control => {
                                        return <FormControl id={control.id} 
                                                            key={control.id}
                                                            valid={control.validation.valid}
                                                            touched={control.validation.touched}
                                                            type={control.type}
                                                            value={control.value}
                                                            name={control.name}
                                                            changedHandler={(event) => this.changedHandler(event, control.id)}/>
                                    })}
                                    {this.props.children}
                                    <button type="submit" className="btn btn-block btn-primary" onClick={this.props.onSubmitForm}>{this.props.submitName}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Form;