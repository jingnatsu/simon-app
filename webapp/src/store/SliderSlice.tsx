import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import SliderService from '../services/SliderService';
import { AxiosError } from 'axios'
import {RootState} from './ReduxStore'

const defaultSlider = [{
  tittle: "First slide label",
  content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  urlImg: process.env.PUBLIC_URL + '/images/slider/1.jpg'
}]

interface Slider {
  tittle: string
  content: string
  urlImg: string
}

interface SliderState {
  error: string | null | undefined
  sliders: Slider[],
  loading: boolean,
  currentRequestId: string | null | undefined
}

interface ValidationErrors {
  errorMessage: string
  //field_errors: Record<string, string>
}

const initialState = {
  sliders: defaultSlider,
  loading: false,
  error: "",
  currentRequestId: "",
} as SliderState

 export const fetchSliders = createAsyncThunk< Slider[], number, { rejectValue: ValidationErrors }>(
  'sliders/getSliders',
  async ( limit: number, { rejectWithValue }) => {
    try {
      const response = await SliderService.getSliders();
      console.log(response);
      return response.data
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err // cast the error for access
    if (!error.response) {
      throw err
    }
      return rejectWithValue(error.response.data);
    }
    
  }
)

const sliderSlice = createSlice({
  name: 'sliderState',
  initialState: initialState,
  reducers: {
   updateSliders: (state:SliderState, {payload} : PayloadAction<Slider[]>) => {
     state.sliders = payload;
   } 
  },
  extraReducers: (builder) => {
   // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
   builder.addCase(fetchSliders.fulfilled, (state, { payload }) => {
    state.sliders = payload
    })
    builder.addCase(fetchSliders.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error.message
      }
    })
  }
})

export const { updateSliders } = sliderSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectSlider = (state: RootState) => state.sliderSlice.sliders;
export default sliderSlice.reducer;