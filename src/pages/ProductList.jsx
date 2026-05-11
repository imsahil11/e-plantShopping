import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { addItem } from '../store/CartSlice'
import { categoryOrder, plantData } from '../data/plants'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const handleAdd = (plant) => {
    dispatch(addItem(plant))
  }

  // using this to keep the button disabled after add
  const isInCart = (id) => cartItems.some((item) => item.id === id)

  return (
    <div>
      <Navbar />
      <main className="page container">
        <h2 className="page-title">Plant Shop</h2>
        {categoryOrder.map((category) => {
          const plants = plantData.filter((plant) => plant.category === category)
          return (
            <section key={category} className="category-block">
              <h3 className="category-title">{category}</h3>
              <div className="product-grid">
                {plants.map((plant) => {
                  const added = isInCart(plant.id)
                  return (
                    <article key={plant.id} className="product-card">
                      <img src={plant.image} alt={plant.name} />
                      <h4>{plant.name}</h4>
                      <p className="price">${plant.price.toFixed(2)}</p>
                      <button
                        type="button"
                        className="button-primary"
                        onClick={() => handleAdd(plant)}
                        disabled={added}
                      >
                        {added ? 'Added' : 'Add to Cart'}
                      </button>
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}

export default ProductList
