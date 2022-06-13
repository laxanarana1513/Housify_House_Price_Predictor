import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const reviewsStart = () => {
    return {
        type: actionTypes.REVIEWS_START
    }
}

export const reviewsSuccess = (id, reviewsData) => {
    return {
        type: actionTypes.REVIEWS_SUCCESS,
        reviewId: id,
        reviewData: reviewsData
    }
}

export const reviewsFail = (error) => {
    return {
        type: actionTypes.REVIEWS_FAIL,
        error: error
    }
}

export const reviews = (reviewsData) => {
    return dispatch => {
        dispatch(reviewsStart())
        axios.post('/reviews.json', reviewsData)
            .then(response => {
                // console.log(reviewsData)
                dispatch(reviewsSuccess(response.data.name, reviewsData))
            })
            .catch(error => {
                dispatch(reviewsFail(error))
            })
    }
}


// export const fetchReviewsStart = () =>{
//     return {
//         type: actionTypes.FETCH_REVIEWS_START
//     }
// }

// export const fetchReviewsSuccess = (reviews) =>{
//     return {
//         type: actionTypes.FETCH_REVIEWS_SUCCESS,
//         reviews: reviews
//     }
// }

// export const fetchReviewsFail = (error) =>{
//     return {
//         type: actionTypes.FETCH_REVIEWS_FAIL,
//         error: error
//     }
// }

// export const fetchReviews = (reviewsData) =>{
//     return dispatch => {
//         dispatch(fetchReviewsStart())
        
//         // const name = 'reviews/' + userId + '/reviewsData.json'
//         axios.get('/reviews.json')
//             .then(res => {
//                 // console.log(res)
//                 // console.log(reviewsData)
//                 const fetchedReviews = []
//                 for (let key in res.data) {
//                     fetchedReviews.push({
//                         ...res.data[key],
//                         id: key
//                     })
//                 }
//                 // console.log(fetchReviews)
//                 dispatch(fetchReviewsSuccess(reviewsData))
//                 console.log(reviewsData)
//             })
//             .catch(error => {
//                 dispatch(fetchReviewsFail(error))
//             })
//     }
// }
