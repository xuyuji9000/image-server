import * as types from '../actionTypes'

export default function reducer(state={
    image_url: ''
}, action) {
    switch(action.type) {
        case types.UPDATE_IMAGE_URL: {
            return {
                ...state,
                image_url: action.payload
            }
            break
        }
        default: {
            return state;
        }
    }
}
