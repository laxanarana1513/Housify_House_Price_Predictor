import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    reviews: [],
    loading: false,
    userId: null,
    
}

const reviewsSuccess = (state, action) => {
    const newReview = updateObject(action.reviewsData, {id: action.reviewId})
    return updateObject(state, {
        loading: false,
        reviews: state.reviews.concat(newReview),
        // userId: action.userId
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REVIEWS_START:
            return updateObject(state, {loading: true})
        
        case actionTypes.REVIEWS_SUCCESS:
            return reviewsSuccess(state,action)
        
        case actionTypes.REVIEWS_FAIL:
            return updateObject(state, {loading: false})

        
        // case actionTypes.FETCH_REVIEWS_START:
        //     return updateObject(state, {loading: true})

        // case actionTypes.FETCH_REVIEWS_SUCCESS:
        //     return updateObject(state, {
        //         reviews: action.reviews,
        //         loading: false,
        //         userId: action.userId
        //     })

        // case actionTypes.FETCH_REVIEWS_FAIL:
        //     return updateObject(state, {loading: false})
    
        default: return state
            
    }
}

export default reducer