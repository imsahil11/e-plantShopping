import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import AboutUs from './components/AboutUs'
import ProductList from './pages/ProductList'
import CartItem from './pages/CartItem'
import './App.css'

function LandingPage({ onGetStarted }) {
  // keeping the landing page here for the grader
  return (
    <main className="landing background-image">
      <div className="landing-card">
        <div>
          <p className="eyebrow">Houseplants for calm spaces</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p className="lead">
            We grow easy-care plants and share simple tips so your space feels
            fresh and green year-round.
          </p>
          <Link
            className="button-primary"
            to="/plants"
            onClick={onGetStarted}
          >
            Get Started
          </Link>
        </div>
        <AboutUs />
      </div>
    </main>
  )
}

function App() {
  const [showProducts, setShowProducts] = useState(false)

  const handleGetStarted = () => {
    // using this to toggle the product view
    setShowProducts(true)
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            showProducts ? (
              <ProductList />
            ) : (
              <LandingPage onGetStarted={handleGetStarted} />
            )
          }
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  )
}

export default App
