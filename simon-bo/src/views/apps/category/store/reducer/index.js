// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedCategory: null
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { 
        ...state, 
        allData: action.data 
      }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_CATEGORY':
      return { ...state, selectedCategory: action.selectedCategory }
    case 'ADD_CATEGORY':
      return { ...state }
    case 'DELETE_USER':
      return { ...state }
    default:
      return { ...state }
  }
}
export default categories
