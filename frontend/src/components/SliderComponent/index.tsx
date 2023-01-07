import React, {useEffect} from 'react';
import {fetchSliders} from '../../store/SliderSlice'
import Carousel from 'react-bootstrap/Carousel'
import {useAppDispatch, useAppSelector} from '../../store/hook'
import './index.scss'

function SliderComponent() {
  const sliders = useAppSelector(state => state.sliderSlice.sliders)
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchSliders(0));
  }, [])

  const renderSliders = () => {
    return sliders.map((slider: any) => {
      return (
        <Carousel.Item>
        <img
          className="d-block w-100 image-item"
          src={process.env.PUBLIC_URL + slider.urlImg}
          alt={slider.tittle}
        />
        <Carousel.Caption>
          <h3>{slider.tittle}</h3>
          <p>{slider.content}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })
  }

  return (
    <Carousel>
      {renderSliders()}
    </Carousel>

  )
}

export default React.memo(SliderComponent);