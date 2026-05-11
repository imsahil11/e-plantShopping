import { Link } from 'react-router-dom'
import AboutUs from '../components/AboutUs'

function Landing() {
  return (
    <main className="landing">
      <div className="landing-card">
        <div>
          <p className="eyebrow">Houseplants for calm spaces</p>
          <h1>Paradise Nursery</h1>
          <p className="lead">
            Fresh, healthy plants picked for real homes. Build a green corner
            that stays easy to care for.
          </p>
          <Link className="button-primary" to="/plants">
            Get Started
          </Link>
        </div>
        <AboutUs />
      </div>
    </main>
  )
}

export default Landing
