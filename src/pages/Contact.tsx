import { CONTACT } from '../data/site'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | DACTION Initiative'
  }, [])

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1 style={{ maxWidth: '14ch' }}>Reach the team.</h1>
          <p className="lede">
            Whether you're a school, a potential partner, a funder, or just curious about our work,
            we'd love to hear from you. We aim to respond within a few business days.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap grid grid--2">
          <div className="card">
            <h3>Organization</h3>
            <p>
              DACTION Initiative
              <br />
              Chevy View Estate, Chevron Drive
              <br />
              Lekki, Lagos, Nigeria
            </p>
            <p style={{ marginTop: 16 }}>
              <a href={`mailto:${CONTACT.orgEmail}`}>{CONTACT.orgEmail}</a>
            </p>
            <p>
              <a href={CONTACT.instagram} target="_blank" rel="noopener">
                Instagram, @daction_initiative
              </a>
            </p>
          </div>
          <div className="card">
            <h3>Founder &amp; Executive Director</h3>
            <p>
              Daniel Olajuyigbe
              <br />
              BEng Aeronautical &amp; Astronautical Engineering
              <br />
              First Class Honours, Afe Babalola University
            </p>
            <p style={{ marginTop: 16 }}>
              <a href={`mailto:${CONTACT.founderEmail}`}>{CONTACT.founderEmail}</a>
            </p>
            <p>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener">
                LinkedIn profile &rarr;
              </a>
            </p>
            <p>
              <a href={CONTACT.captainPlanetProfile} target="_blank" rel="noopener">
                Captain Planet Foundation profile &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap">
          <p className="note" style={{ color: '#C3D0DE', maxWidth: '60ch' }}>
            Interested in partnering with DACTION, or curious about a specific campaign? Reach out
            by email, we're always glad to talk.
          </p>
        </div>
      </section>
    </>
  )
}
