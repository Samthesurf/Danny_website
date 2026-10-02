import { gallerySections } from '../data/site'
import { useEffect, useState, useCallback } from 'react'

interface ActiveImage {
  src: string
  title: string
  sectionTitle: string
  index: number
  total: number
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null)

  useEffect(() => {
    document.title = 'Gallery | DACTION Initiative'
  }, [])

  // Collect all gallery images flat for navigation
  const allImages = gallerySections.flatMap((section) =>
    section.moments.flatMap((moment) =>
      (moment.images || []).map((src) => ({
        src,
        title: moment.title ?? '',
        sectionTitle: section.title,
      }))
    )
  )

  const openImage = (src: string, momentTitle: string | undefined, sectionTitle: string) => {
    const idx = allImages.findIndex((img) => img.src === src)
    setActiveImage({
      src,
      title: momentTitle ?? '',
      sectionTitle,
      index: idx >= 0 ? idx : 0,
      total: allImages.length,
    })
  }

  const closeImage = useCallback(() => {
    setActiveImage(null)
  }, [])

  const nextImage = useCallback(() => {
    if (!activeImage) return
    const nextIdx = (activeImage.index + 1) % allImages.length
    const next = allImages[nextIdx]
    setActiveImage({
      src: next.src,
      title: next.title,
      sectionTitle: next.sectionTitle,
      index: nextIdx,
      total: allImages.length,
    })
  }, [activeImage, allImages])

  const prevImage = useCallback(() => {
    if (!activeImage) return
    const prevIdx = (activeImage.index - 1 + allImages.length) % allImages.length
    const prev = allImages[prevIdx]
    setActiveImage({
      src: prev.src,
      title: prev.title,
      sectionTitle: prev.sectionTitle,
      index: prevIdx,
      total: allImages.length,
    })
  }, [activeImage, allImages])

  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    if (!activeImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImage, closeImage, nextImage, prevImage])

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '16ch' }}>Our work, in pictures.</h1>
          <p className="lede">
            Photos from each campaign, organized below by program and by moment, most recent
            first. Click any photo to expand it to full size. New photos are added as each campaign is delivered.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          {gallerySections.map((section) => (
            <div className="gallery-section" id={section.id} key={section.title}>
              <h2 style={{ fontSize: '1.4rem' }}>{section.title}</h2>
              {section.moments.map((moment, mi) => (
                <div className="gallery-sub" key={moment.title ?? `${section.id}-moment-${mi}`}>
                  {moment.title ? <h3>{moment.title}</h3> : null}
                  {moment.images && moment.images.length > 0 ? (
                    <div className="gallery-grid">
                      {moment.images.map((src) => (
                        <button
                          key={src}
                          type="button"
                          className="gallery-thumb-btn"
                          onClick={() => openImage(src, moment.title, section.title)}
                          aria-label={`View full image: ${section.title}${moment.title ? ` - ${moment.title}` : ''}`}
                        >
                          <img
                            src={src}
                            alt={`${section.title}${moment.title ? ` - ${moment.title}` : ''}`}
                            loading="lazy"
                            className="gallery-img"
                          />
                        </button>
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

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div
          className="lightbox-backdrop"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeImage}
            aria-label="Close full view"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {activeImage.total > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-nav--prev"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                aria-label="Previous photo"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  <path
                    d="M14.5 5.5L8 12l6.5 6.5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="lightbox-nav lightbox-nav--next"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                aria-label="Next photo"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  <path
                    d="M9.5 5.5L16 12l-6.5 6.5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImage.src}
              alt={`${activeImage.sectionTitle} - ${activeImage.title}`}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <span>
                {activeImage.title
                  ? `${activeImage.sectionTitle} \u00b7 ${activeImage.title}`
                  : activeImage.sectionTitle}
              </span>
              <span className="lightbox-counter">({activeImage.index + 1} / {activeImage.total})</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
