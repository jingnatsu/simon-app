import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import SliderService from '../services/SliderService';
import { AxiosError } from 'axios'
import {RootState} from './ReduxStore'

const defaultSlider = [{
  id: 0,
	tittle: "Cánh đồng bất tận",
	shortDesc: "Con kinh nhỏ nằm vắt qua một cánh đồng rộng. Và khi chúng tôi quyết định dừng lại, mùa hạn hung hãn dường như cũng gom hết nắng đổ xuống nơi này. Những cây lúa chết non trên đồng, thân đã khô cong như tàn nhang chưa rụng, nắm vào bàn tay là nát vụn. Cha tôi tháo cái khung tre chắn dưới sàn ghe, bầy vịt lúc nhúc chen ra, cuống quýt, nháo nhào quẫy ngụp xuống mặt nước váng phèn. Một lớp phèn mới, vàng sẫm quánh lại trên bộ lông của những con vịt đói, nhớp nháp bám trên vai Điền khi nó trầm mình bơi đi cặm cọc, giăng lưới rào bầy vịt lại.",
	category: "Truyện ngắn",
	urlImg:  "/images/slider/1.jpg",
	created_date: 12212121212
}]

interface Article {
  id: number
  tittle: string
  shortDesc: string
  category: string
  urlImg: string
  created_date: number
}

export interface ArticleFull {
  id: number
  tittle: string
  article: string
  category: string
  urlImg: string
  totalComment: number
  created_date: number

}

interface ArticleState {
  error: string | null | undefined,
  article: ArticleFull,
  articles: Article[],
  
  loading: boolean,
  currentRequestId: string | null | undefined
}

interface ValidationErrors {
  errorMessage: string
  //field_errors: Record<string, string>
}

const initialState = {
  articles: defaultSlider,
  article: {},
  loading: false,
  error: "",
  currentRequestId: "",
} as ArticleState

 export const fetchArticles = createAsyncThunk< Article[], number, { rejectValue: ValidationErrors }>(
  'article/getArticles',
  async ( limit: number, { rejectWithValue }) => {
    try {
      const response = await SliderService.getArticles();
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

// export const getArticleFull = createAsyncThunk< ArticleFull, number, { rejectValue: ValidationErrors }>(
//   'article/getFullArticle',
//   async ( articleId: number, { rejectWithValue }) => {
//     try {
//       const response = await SliderService.getFullArticle(articleId);
//       console.log(response);
//       return response.data
//     } catch (err) {
//       let error: AxiosError<ValidationErrors> = err // cast the error for access
//     if (!error.response) {
//       throw err
//     }
//       return rejectWithValue(error.response.data);
//     }
//
//   }
// )

const articleSlice = createSlice({
  name: 'articleSlice',
  initialState: initialState,
  reducers: {
   updateArticles: (state:ArticleState, {payload} : PayloadAction<Article[]>) => {
     state.articles = payload;
   } 
  },
  extraReducers: (builder) => {
   // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
   builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
    state.articles = payload
    })
    builder.addCase(fetchArticles.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error.message
      }
    })
    // builder.addCase(getArticleFull.fulfilled, (state, { payload }) => {
    //   state.article = payload
    //   })
    //   builder.addCase(getArticleFull.rejected, (state, action) => {
    //     if (action.payload) {
    //       // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
    //       state.error = action.payload.errorMessage
    //     } else {
    //       state.error = action.error.message
    //     }
    //   })
    
  }
})

export const { updateArticles } = articleSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectSlider = (state: RootState) => state.articleSlice.articles;
export default articleSlice.reducer;