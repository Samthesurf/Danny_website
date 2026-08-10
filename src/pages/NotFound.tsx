import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | DACTION Initiative'
  }, [])

  return (
    <section className="hero-simple">
      <div className="wrap">
        <h1 style={{ maxWidth: '18ch' }}>That page doesn't exist.</h1>
        <p className="lede">
          The link may be outdated, or the page may not have been built yet. Head back home to keep
          exploring.
        </p>
        <Link to="/" className="btn" style={{ marginTop: 12 }}>
          Back home
        </Link>
      </div>
    </section>
  )
}
