import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageUpload from './components/ImageUpload'; 

const App = (
    <div>
        <h1>Hello World!</h1>
        <ImageUpload></ImageUpload>
    </div>
);


render(
    App,
    document.getElementById('root')
);
