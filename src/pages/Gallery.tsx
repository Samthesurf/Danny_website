import { gallerySections } from '../data/site'
import { useEffect } from 'react'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | DACTION Initiative'
  }, [])

  // Campaigns with real photos are shown; upcoming events (no event photos yet)
  // are noted inside their subsection below.
  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '16ch' }}>Our work, in pictures.</h1>
          <p className="lede">
            Photos from each campaign, organized below by program and by moment, most recent
            first. New photos are added as each campaign is delivered.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          {gallerySections.map((section) => (
            <div className="gallery-section" id={section.id} key={section.title}>
              <h2 style={{ fontSize: '1.4rem' }}>{section.title}</h2>
              {section.moments.map((moment) => (
                <div className="gallery-sub" key={moment.title}>
                  <h3>{moment.title}</h3>
                  {moment.images && moment.images.length > 0 ? (
                    <div className="gallery-grid">
                      {moment.images.map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${section.title} - ${moment.title}`}
                          loading="lazy"
                          className="gallery-img"
                        />
                      ))}
                    </div>
                  ) : null}
                  {moment.note ? (
                    <p style={{ marginTop: moment.images && moment.images.length > 0 ? 18 : 0, marginBottom: 28, maxWidth: '60ch', color: 'var(--ink-soft)' }}>
                      {moment.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
