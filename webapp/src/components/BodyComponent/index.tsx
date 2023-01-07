import React from 'react';
import './index.scss'
import SliderComponent from '../SliderComponent';
import ArticlesComponent from '../ArticlesComponent';

function BodyComponent() {
return (
    <React.Fragment>
      <SliderComponent /> 
      <ArticlesComponent />
    </React.Fragment>
)
}

export default BodyComponent;