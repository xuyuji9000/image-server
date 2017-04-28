import React from 'react'
import createReactClass from 'create-react-class'
import ImageUpload from './components/ImageUpload' 

const Main = createReactClass({
    render: function() {
        return (
            <div>
                <ImageUpload></ImageUpload>
            </div>
        )
    }
})

export default Main
