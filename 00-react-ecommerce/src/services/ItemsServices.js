import axios from 'axios'

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

const getAllItems = () => {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => {
      console.error(error)
      throw error
    })
}

const getSingleItem = (id) => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => console.log(response.data))
    .catch(error => console.error(error))
}

const getCategories = (category) => {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => {
      console.error(error)
      throw error
    })
}

export {
  getSingleItem,
  getAllItems,
  getCategories
}
