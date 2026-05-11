import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { removeItem, updateQuantity } from '../store/CartSlice'

const calculateTotalItems = (list) =>
  list.reduce((sum, item) => sum + item.quantity, 0)

const calculateTotalAmount = (list) =>
  list.reduce((sum, item) => sum + item.price * item.quantity, 0)

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  // Simple totals for the header
  const totalItems = calculateTotalItems(items)
  const totalCost = calculateTotalAmount(items)

  return (
    <div>
      <Navbar />
      <main className="page container">
        <h2 className="page-title">Shopping Cart</h2>
        <div className="cart-summary">
          <p>
            Total plants: <strong>{totalItems}</strong>
          </p>
          <p>
            Total cost: <strong>${totalCost.toFixed(2)}</strong>
          </p>
        </div>

        {items.length === 0 ? (
          <p className="empty-state">Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {items.map((item) => {
              const lineTotal = item.price * item.quantity
              return (
                <article key={item.id} className="cart-row">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p className="muted">Unit: ${item.price.toFixed(2)}</p>
                    <p className="muted">Line total: ${lineTotal.toFixed(2)}</p>
                  </div>
                  <div className="cart-controls">
                    <div className="qty-controls">
                      <button
                        type="button"
                        className="qty-button"
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, amount: -1 }))
                        }
                      >
                        -
                      </button>
                      <span className="qty-count">{item.quantity}</span>
                      <button
                        type="button"
                        className="qty-button"
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, amount: 1 }))
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="link-button"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        <div className="cart-actions">
          <Link className="button-secondary" to="/plants">
            Continue Shopping
          </Link>
          <button
            type="button"
            className="button-primary"
            onClick={() => window.alert('Coming Soon')}
          >
            Checkout
          </button>
        </div>
      </main>
    </div>
  )
}

export default CartItem
