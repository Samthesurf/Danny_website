import Placeholder from '../components/Placeholder'
import { gallerySections } from '../data/site'
import { useEffect } from 'react'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | DACTION Initiative'
  }, [])

  // Campaigns with real photos are shown; upcoming events (no event photos yet)
  // are noted below the grid.
  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '16ch' }}>Our work, in pictures.</h1>
          <p className="lede">
            Photos from each completed campaign, organized by program below. New photos are added
            as each campaign is delivered.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          {gallerySections.map((section) => (
            <div className="gallery-section" key={section.title}>
              <h2 style={{ fontSize: '1.4rem' }}>{section.title}</h2>
              {section.images && section.images.length > 0 ? (
                <div className="gallery-grid">
                  {section.images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={section.title}
                      loading="lazy"
                      className="gallery-img"
                    />
                  ))}
                </div>
              ) : (
                <Placeholder
                  variant="wide"
                  label="Photos coming after the event"
                  style={{ maxWidth: 560 }}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}