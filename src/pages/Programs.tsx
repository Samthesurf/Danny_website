import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { programs } from '../data/site'
import { useEffect } from 'react'

export default function Programs() {
  useEffect(() => {
    document.title = 'Programs | DACTION Initiative'
  }, [])

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '16ch' }}>Our work, campaign by campaign.</h1>
          <p className="lede">
            Five flagship programs so far, shown most recent first. Each has its own page with the
            full story, what we set out to do, and what actually happened.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="prog-grid">
            {programs.map((p) => (
              <div className="prog-card" id={p.id} key={p.slug}>
                {p.image ? (
                  <img src={p.image} alt={p.title} className="prog-card-img" />
                ) : p.logo ? (
                  <div className="prog-card-logo">
                    <img src={p.logo} alt={`${p.title} logo`} />
                  </div>
                ) : (
                  <Placeholder variant="card" label="Photo coming soon" />
                )}
                <div className="prog-card-body">
                  <span className="prog-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                  <Link to={`/programs/${p.slug}`} className="link-arrow">
                    Read the full story &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap">
          <p className="note" style={{ color: '#C3D0DE' }}>
            Want to see photos from any of these campaigns? Visit the{' '}
            <Link to="/gallery" style={{ color: '#fff', textDecoration: 'underline' }}>
              gallery
            </Link>
            , organized by program.
          </p>
        </div>
      </section>
    </>
  )
}
