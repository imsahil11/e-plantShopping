import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { addItem } from '../store/CartSlice'
import { categoryOrder, plantData } from '../data/plants'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleAdd = (plant) => {
    dispatch(addItem(plant))
  }

  // using this to keep the button disabled after add
  const isInCart = (id) => cartItems.some((item) => item.id === id)

  return (
    <div>
      <Navbar />
      <main className="page container">
        <div className="product-header">
          <h2 className="page-title">Plant Shop</h2>
          <div className="cart-badge" aria-live="polite">
            <span className="cart-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path
                  d="M7 6h14l-2 8H8L6 3H3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="20" r="1.5" fill="currentColor" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" />
              </svg>
            </span>
            <span className="cart-count">{totalItems}</span>
          </div>
        </div>
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
