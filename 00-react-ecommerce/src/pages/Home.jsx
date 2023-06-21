import React, { useState, useEffect } from 'react'
import { getAllItems, getCategories } from '@/services/itemsServices'
import ProductCard from '@/components/products/ProductCard'
import SideMenu from '@/components/sidemenu/SideMenu'

const Home = () => {
  const [itemsData, setItemsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItems()
        if (response) {
          setItemsData(response)
          setLoading(false)
        }
      } catch (error) {
        console.log('An error occurred:', error.message)
      }
    }
    fetchItemData()
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories(selectedCategory)
        if (response) {
          setItemsData(response)
          setLoading(false)
          console.log(response)
        }
      } catch (error) {
        console.log('An error occurred:', error.message)
      }
    }
    fetchCategories()
  }, [selectedCategory])

  return (
    <div className='home'>
      <h1>Home</h1>
      <SideMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setItemsData={setItemsData} />
      {selectedCategory === null
        ? (
            loading
              ? (
                <h1>Cargando...</h1>
                )
              : (
                <div className='product-card-container'>
                  {itemsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                )
          )
        : (
          <div className='product-card-container'>
            {itemsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          )}
    </div>
  )
}

export default Home
