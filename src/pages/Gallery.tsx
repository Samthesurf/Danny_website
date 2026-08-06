import Placeholder from '../components/Placeholder'
import { gallerySections } from '../data/site'
import { useEffect } from 'react'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | DACTION Initiative'
  }, [])

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <span className="eyebrow">Gallery</span>
          <h1 style={{ maxWidth: '16ch' }}>Our work, in pictures.</h1>
          <p className="lede">
            Photos from each campaign, organized below by program, most recent first. This gallery
            is being filled in as photos are added.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          {gallerySections.map((section) => (
            <div className="gallery-section" key={section.title}>
              <h2 style={{ fontSize: '1.4rem' }}>{section.title}</h2>
              <div className="gallery-grid">
                {Array.from({ length: section.count }).map((_, i) => (
                  <Placeholder variant="square" key={`${section.title}-${i}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
