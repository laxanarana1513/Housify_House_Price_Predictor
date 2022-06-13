import React from 'react';
import { connect } from 'react-redux';
// import Spinner from '../../../components/UI/Spinner/Spinner';
// import * as actions from '../../../store/actions/indexactions';
import classes from './ShowReviews.css';
import ReviewsContent from './ReviewsContent/ReviewsContent';
// import Review from './Review/Review';

class ShowReviews extends React.Component {

    render() {

        return (
            <div className={classes.Review}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center mb-4" style={{ color: 'white' }}>
                                <h1 className={classes.Head}>Clients Reviews</h1>
                            </div>
                        </div>

                    </div>

                    <div className="row my-4">
                        <div className="col-6 text-left">
                            <a className="btn btn-primary mb-3 mx-1" href="#carouselExampleIndicators2" role="button"
                                data-slide="prev">
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>



                        <div className="col-12">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner">

                                    <ReviewsContent active="active" />

                                    <ReviewsContent />


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews.reviews,
        loading: state.reviews.loading,
        // userId: state.
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowReviews)