import axios from 'axios'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('/api/users/list/all-data').then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data
      })
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const graphqlQuery = {
      query: ` {
        categories(page: ${params.page}, perPage: ${params.perPage}) {
          categories {
            _id
            name
            status
            createdAt
          }
          totalCategories
        }
      }` 
    }
    console.log('createCategory', graphqlQuery);
    await axios({
      method: 'post',
      url: '/graphql',
      data: JSON.stringify(graphqlQuery),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data.data)
      dispatch({
        type: 'GET_DATA',
        data: response.data.data.categories.categories,
        totalPages: response.data.data.categories.totalCategories,
        params
      })
    })
  }
}

// ** Get User
export const getCategory = id => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const graphqlQuery = {
      query: ` {
        category(id: ${id}) {
            _id
            name
            status
            createdAt
       
        }
      }` 
    }
    console.log('createCategory', graphqlQuery);
    await axios({
      method: 'post',
      url: '/graphql',
      data: JSON.stringify(graphqlQuery),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        // dispatch({
        //   type: 'GET_CATEGORY',
        //   selectedCategory: response.data.user
        // })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new user
export const addCategory = category => {
  return (dispatch, getState) => {
    console.log(category)
    const token = localStorage.getItem('token');
    const graphqlQuery = {
      query: `
      mutation {
        createCategory(categoryInput:{name: "${category.categoryName}", status: "${category.status}"}) {
          name
          status
        }
      }`
    }
    console.log('createCategory', graphqlQuery);
    
    axios({
      method: 'post',
      url: '/graphql',
      data: JSON.stringify(graphqlQuery),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    
      .then(response => {
        console.log(response)
        // dispatch({
        //   type: 'ADD_USER',
        //   category
        // })
      })
      .then(() => {
        dispatch(getData(getState().category.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

// ** Delete user
export const deleteUser = id => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/users/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_USER'
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
  }
}
