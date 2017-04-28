import React, { Component } from 'react'
import { post } from 'axios'
import { connect  } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import ImageUploadActions from './actions'


class ImageUpload extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            file: '',
            imagePreviewUrl: '',
            image_url: '',
        }

        this._handleImageChange = this._handleImageChange.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps)
    {
        if(this.props.image_url != nextProps)
            this.setState({image_url: nextProps.image_url})
    }

    _handleSubmit(e)
    {
        e.preventDefault()
        this.uploadImage(this.state.file)
    }

    _handleImageChange(e)
    {
        e.preventDefault()

        let reader = new FileReader()
        let file = e.target.files[0]

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            })
        }

        reader.readAsDataURL(file)
    }

    uploadImage(imageFile)
    {
        let imageFormData = new FormData()
        imageFormData.append('imageFile', imageFile)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        const url = 'http://localhost:3001/uploadimage/upload'
        const self = this;
        post(url, imageFormData, config)
            .then(function(response){
                console.log(response.data)
                self.props.actions.updateImageUrl(response.data.data)
            })
            .catch(function(error){
                console.log(error)
            })


    }

    render() 
    {
        let {imagePreviewUrl} = this.state
        let $imagePreview = null
        if(imagePreviewUrl)
        {
            $imagePreview = (<img src={imagePreviewUrl} />)
        }
        
        let {image_url} = this.state
        let $imagePostview = null
        if (image_url)
        {
            console.log(image_url)
            $imagePostview = (<img src={image_url} />)
        }

        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input type="file" onChange={this._handleImageChange}/>
                    <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                </form>
                {$imagePreview}
                {$imagePostview}
            </div>
        )
    }
}

ImageUpload.propTypes = {
    image_url: PropTypes.string.isRequired,
    actions: PropTypes.shape({
        updateImageUrl: PropTypes.func.isRequired,
    }),
}

const mapStateToProps = state => ({
    ...state.imageupload
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ImageUploadActions, dispatch)
})

ImageUpload = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageUpload)

export default ImageUpload
