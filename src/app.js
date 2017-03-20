import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropzone from 'react-dropzone';

let DropzoneDemo = React.createClass({
    onDrop: function(acceptedFiles, rejectedFiles){
        console.log('Accepted Files:', acceptedFiles);
        console.log('Rejected files', rejectedFils);
    },
    render: function() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop}>
                    <div>Try drop some files here, or click to select files to upload</div>
                </Dropzone>
            </div>
        );
    }
});

const App = (
    <div>
        <h1>Hello World!</h1>
        <DropzoneDemo></DropzoneDemo>
    </div>
);


render(
    App,
    document.getElementById('root')
);
