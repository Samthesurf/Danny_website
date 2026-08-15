import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | DACTION Initiative'
  }, [])

  return (
    <section className="nf-section">
      {/* Oversized watermark behind the content, mirroring the footer emblem treatment */}
      <span className="nf-bg" aria-hidden="true">
        404
      </span>
      <div className="wrap nf-inner">
        <div className="nf-icon" aria-hidden="true">
          <img
            src="/assets/icons3d/compass.webp"
            alt=""
            width="400"
            height="399"
            loading="eager"
          />
        </div>
        <p className="eyebrow">Error 404</p>
        <h1 className="nf-title">You&apos;ve wandered off the map</h1>
        <p className="lede nf-lede">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Every explorer loses
          their way sometimes, so let&apos;s get you back on course.
        </p>
        <div className="nf-actions">
          <Link to="/" className="btn">
            Back to home
          </Link>
          <Link to="/programs" className="btn btn--ghost">
            Explore our programs
          </Link>
        </div>
        <div className="nf-links">
          <span className="nf-links__label">Popular pages:</span>
          <Link to="/about">About us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  )
}
