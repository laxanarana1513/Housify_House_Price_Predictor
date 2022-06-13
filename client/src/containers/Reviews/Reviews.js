import React from 'react';
import classes from './Reviews.css';
import Breadcrumps from '../../components/UI/Breadcrumps/Breadcrumps';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/indexactions';
import ShowReviews from './ShowReviews/ShowReviews';

class Reviews extends React.Component {

    state = {
        controls: {

            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Full Name'
                },
                value: '',
                label: 'Name',
                validation: {
                    required: true,

                },
                valid: false,
                touched: false
            },

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Your Email'
                },
                value: '',
                label: 'Email ID',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },

            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'What Do You Think?',

                },
                value: '',
                label: 'How we can improve',
                validation: {
                    required: true,

                },
                valid: false,
                touched: false
            },

        },
        formIsValid: false,
        showText: false,
        show: true
    }

    // componentDidMount() {
    //     this.props.onFetchReviews(this.props.reviews)
    // }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedControls = {
            ...this.state.controls,
        }
        const updatedControlElement = {
            ...updatedControls[inputIdentifier]
        }
        updatedControlElement.value = event.target.value
        updatedControlElement.touched = true
        updatedControls[inputIdentifier] = updatedControlElement

        let formIsValid = true
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid
        }
        
        this.setState({ controls: updatedControls, formIsValid: formIsValid })
        // console.log(updatedControls)
    }

    
    reviewsHandler = (event) => {
        event.preventDefault()

        const formData = {}
        for (let formElementIdentifier in this.state.controls) {
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value
        }

        const reviews = {
            reviewsData: formData,
            // userId: this.props.userId
        }

        this.props.onReviewsSubmit(reviews)
        
        this.setState({showText: true})
        
        // console.log(reviews)
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

            />

        ))

        if (this.props.loading) {
            form = (
                <div>
                    <Spinner />
                    <h3 style={{ color: 'white', textAlign: 'center' }}>Thanks for submitting</h3>
                </div>
            )

        }


        return (
            <section id="reviews">
                <div className={classes.Reviews}>
                    <Breadcrumps title="Reviews" toLink="/reviews" />
                </div>

                <div className="container" style={{ backgroundColor: '#000000e6', color: 'white' }}>
                    <div className="row pt-5 pb-5 mt-5 mb-5 justify-content-center">
                        <div className="col-md-8 pt-4 pb-4">
                            <h1 className="text-center" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 'bold' }}>Give Us Your Reviews</h1>
                            <form onSubmit={this.reviewsHandler} className="pt-4">
                                {form}

                                <div className="text-center pt-3">
                                    <button className={classes.RButton}>SUBMIT</button>
                                </div>
                            </form>
                        </div>
                        {/* <p>{this.state.showText && this.state.show ? this.state.controls.name.value : null}</p> */}

                    </div>

                </div>
                <ShowReviews />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.reviews.loading,
        userId: state.reviews.userId,
        reviews: state.reviews.reviews
        // token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReviewsSubmit: (reviewsData) => dispatch(actions.reviews(reviewsData)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)