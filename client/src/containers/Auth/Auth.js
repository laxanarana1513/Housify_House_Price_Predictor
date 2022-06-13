import React from 'react';
import classes from './Auth.css';
import Breadcrumps from '../../components/UI/Breadcrumps/Breadcrumps';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/indexactions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Auth extends React.Component {


    state = {
        controls: {

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Your Email ID'
                },
                value: '',
                label: 'Email ID',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,

                // touched: false
            },

            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter Your Password'
                },
                value: '',
                label: 'Password',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                // touched: false
            },
        },
        isSignUp: true
    }

    componentDidMount() {
        if (this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath()
        }
    }

    checkValidity(value, rules) {
        let isValid = true
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }


        return isValid
    }


    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }

        }
        this.setState({ controls: updatedControls })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
    }

    switchLoginHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp, display: true }
        })
    }


    render() {


        const formElementsArray = []
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                label={formElement.config.label}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
            />

        ))

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null

        if (this.props.error) {
            errorMessage = (
                <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>
                    {this.props.error.message}
                </p>
            )
        }

        let authRedirect = null
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <section id="auth">
                {authRedirect}
                <div className={classes.Auth}>
                    <Breadcrumps title="Login/Sign Up" ptop="5.3rem" toLink="/auth" />

                </div>
                <div className="container" >
                    <div className="row pt-5 pb-5 justify-content-center">
                        <div className="col-md-6 pt-5 pb-5" style={{ backgroundColor: 'rgb(25 24 24 / 89%)', marginTop: "-11.3rem", color: 'white', padding: "35px", boxShadow: "4px 4px 23px grey" }}>
                            {errorMessage}
                            <form onSubmit={this.submitHandler} >
                                {form}

                                <div className={classes.AButton}>

                                    <h6 style={{ color: 'white', marginBottom: "18px" }}>Switch To
                                        <strong onClick={this.switchLoginHandler} style={{ cursor: 'pointer', color: 'darkred' }}>
                                            {this.state.isSignUp ? ' SIGN IN' : ' SIGN UP'}
                                        </strong>
                                    </h6>

                                    <button >{this.state.isSignUp ? 'SIGN UP' : 'SIGN IN'}</button>
                                </div>

                            </form>



                        </div>


                    </div>

                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)