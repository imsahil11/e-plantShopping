import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const getTotalItems = (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0)

function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const totalItems = getTotalItems(items)
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')
  const cartClass = ({ isActive }) =>
    isActive ? 'nav-link cart-link active' : 'nav-link cart-link'

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          Paradise Nursery
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/plants" className={linkClass}>
            Plants
          </NavLink>
          <NavLink to="/cart" className={cartClass}>
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
            Cart
            <span className="cart-count" aria-live="polite">
              {totalItems}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
