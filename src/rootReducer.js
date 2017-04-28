import { combineReducers } from 'redux'

import * as imageupload from './components/ImageUpload'

export default combineReducers({
    imageupload: imageupload.reducer
})
