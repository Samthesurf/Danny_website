import { partners } from '../data/site'
import { useEffect } from 'react'
import { Reveal } from '../components/Reveal'

const partnerWays = [
  {
    icon: '/assets/icons3d/money-bag.png',
    title: 'Fund a campaign',
    text: 'Back a specific DACTION campaign from proposal to report. You set the outcomes you care about, we design around them, and you get an honest account of what the money achieved.',
  },
  {
    icon: '/assets/icons3d/puzzle.png',
    title: 'Deliver together',
    text: 'Co-facilitation is how our best programs ran. Your team brings the expertise, ours brings the young people and the local grounding, and the campaign is built jointly rather than handed over.',
  },
  {
    icon: '/assets/icons3d/location.png',
    title: 'Host at your institution',
    text: 'Schools and universities open their doors, put students in the room, and shape what the program covers. Every DACTION campaign to date has run inside a partner institution.',
  },
  {
    icon: '/assets/icons3d/mic.png',
    title: 'Send a speaker',
    text: 'Researchers, executives, and practitioners who can talk plainly about energy, environment, or careers. One seat at a session like Hydrogen Horizons can redirect how a student plans their whole path.',
  },
  {
    icon: '/assets/icons3d/bag.png',
    title: 'Cover the logistics',
    text: 'Transport, venue, materials, refreshments. In-kind support has carried entire campaign days, and it is often the difference between a plan on paper and a program that runs.',
  },
]

export default function Partners() {
  useEffect(() => {
    document.title = 'Partners & Recognition | DACTION Initiative'
  }, [])

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '18ch' }}>Who backs the work.</h1>
          <p className="lede">
            DACTION's programs are delivered in direct partnership with international foundations,
            local organizations, and academic institutions.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="bio-grid" style={{ marginTop: 14, alignItems: 'center' }}>
            <div className="story-photo story-photo--natural">
              <img
                src="/assets/img/partners/daniel-jenny-molloy.jpg"
                alt="Daniel with Dr. Jenny Molloy, 2022"
              />
            </div>
            <div>
              <h2 style={{ maxWidth: '22ch' }}>A mentor behind the work</h2>
              <p>
                Dr. Jenny Molloy has mentored Daniel since they met at an ICGEB course in 2022.
                She's a Senior Research Associate and Shuttleworth Research Fellow in the
                Department of Chemical Engineering and Biotechnology at the University of
                Cambridge, and she has guided Daniel's thinking on connecting engineering with
                environmental leadership ever since, advising him informally on both his own path
                and DACTION's direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <h2>Partner organizations</h2>

          {partners.map((p) => (
            <div className="partner-row" key={p.name}>
              <div className="partner-row-main">
                {p.logo ? (
                  <span className="partner-logo-tip" data-tooltip={p.name}>
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      title={p.name}
                      className="partner-logo"
                    />
                  </span>
                ) : null}
                <div>
                  <span className="p-name">{p.name}</span>
                  <p className="p-desc">{p.description}</p>
                </div>
              </div>
              <span className="p-role">{p.since}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <Reveal>
            <h2 style={{ maxWidth: '26ch' }}>What partnership actually looks like.</h2>
            <p className="lede" style={{ marginTop: 12, maxWidth: '58ch' }}>
              Five ways organizations have plugged into DACTION campaigns so far. Most partnerships
              combine two or three.
            </p>
          </Reveal>

          <div className="partner-ways-grid">
            {partnerWays.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="partner-way">
                  <img src={w.icon} alt="" loading="lazy" />
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
