const SideMenu = ({ selectedCategory, setSelectedCategory, setItemsData }) => {
  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"]

  const handleState = (category) => {
    setItemsData([])
    setSelectedCategory(category)
  }

  return (
    <div className='side-menu'>
      <h2>Categories</h2>
      <ul className='category-list'>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleState(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideMenu
