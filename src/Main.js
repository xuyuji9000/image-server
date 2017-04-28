import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ImageUpload from './components/ImageUpload' 

const Main = function(){
        return (
            <Provider store={store}>
                <ImageUpload></ImageUpload>
            </Provider>
        )
}

export default Main
