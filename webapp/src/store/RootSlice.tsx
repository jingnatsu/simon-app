import { combineReducers} from '@reduxjs/toolkit';
import sliderSlice from './SliderSlice';
import articleSlice from './ArticleSlice';

const RootReducer = combineReducers({
  sliderSlice: sliderSlice,
  articleSlice: articleSlice
});

export default RootReducer
