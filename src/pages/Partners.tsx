import { partners, recognition } from '../data/site'
import { useEffect } from 'react'

export default function Partners() {
  useEffect(() => {
    document.title = 'Partners & Recognition | DACTION Initiative'
  }, [])

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <span className="eyebrow">Partners &amp; Recognition</span>
          <h1 style={{ maxWidth: '18ch' }}>Who backs the work.</h1>
          <p className="lede">
            DACTION's programs are delivered in direct partnership with international foundations,
            local organizations, and academic institutions.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <span className="eyebrow">Partner organizations</span>

          {partners.map((p) => (
            <div className="partner-row" key={p.name}>
              <div>
                <span className="p-name">{p.name}</span>
                <p className="p-desc">{p.description}</p>
              </div>
              <span className="p-role">{p.since}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <span className="eyebrow">Recognition</span>
          <h2 style={{ maxWidth: '24ch' }}>Milestones earned along the way.</h2>

          <div className="grid grid--2" style={{ marginTop: 30 }}>
            {recognition.map((r) => (
              <div className="card" key={`${r.year}-${r.text.slice(0, 24)}`}>
                <h3 style={{ fontSize: '1.05rem' }}>{r.year}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
