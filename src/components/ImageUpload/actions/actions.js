import axios from 'axios'
import * as types from '../actionTypes'


export function updateImageUrl(image_url)
{
    return {
        type: types.UPDATE_IMAGE_URL,
        payload: image_url
    }
}
