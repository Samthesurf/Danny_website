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
            <p>
              <a href={CONTACT.linkedinCompany} target="_blank" rel="noopener">
                LinkedIn company page &rarr;
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
          <h2 style={{ maxWidth: '22ch', color: '#F5F8FA' }}>We're always glad to talk.</h2>
          <p style={{ marginTop: 14, maxWidth: '66ch', color: '#B9C7D6' }}>
            Reach out if you're interested in partnering with us, funding a campaign, or bringing
            DACTION into your institution. Reach out if you'd like to join the team as a volunteer
            or director, or if you're a student figuring out your own path into sustainability work
            and want to talk it through. Reach out if you've got an opportunity, a grant, an event,
            a collaboration, that you think we should know about, or an idea for what DACTION
            should take on next. And reach out if you just have a question, for the organization or
            for any member of our team specifically. However you found us, we want to hear from you.
          </p>
        </div>
      </section>
    </>
  )
}
