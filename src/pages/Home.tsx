import { Link } from 'react-router-dom'
import { impactStats } from '../data/site'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'DACTION Initiative | Youth-Led Environmental Action, Nigeria'
  }, [])

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Lekki, Lagos, Nigeria &middot; Est. 2021</span>
            <h1>Young people, leading real environmental change.</h1>
            <p className="lede">
              DACTION Initiative is a youth-led nonprofit running hands-on environmental
              programs across Nigeria: ocean conservation, coastal cleanups, reforestation,
              clean energy education, and sustainable food systems.
            </p>
            <div className="hero-actions">
              <Link to="/programs" className="btn btn--accent">
                See our programs
              </Link>
              <Link to="/about" className="btn btn--ghost">
                Our story
              </Link>
            </div>
          </div>
          <img
            src="/assets/img/ocean-conservation/ocean-01.jpg"
            alt="Students at an ocean conservation outreach session"
            className="hero-img"
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="stat-row">
            {impactStats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="num">{s.num}</span>
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Why DACTION</span>
          <h2 style={{ maxWidth: '24ch' }}>Small team. Real outcomes. No fluff.</h2>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="card">
              <h3>Youth-led, start to finish</h3>
              <p>
                Every campaign is designed and run by young people, not handed down by adults on
                their behalf. DACTION's team plans, fundraises, delivers, and answers for the
                results.
              </p>
            </div>
            <div className="card">
              <h3>Built with the community</h3>
              <p>
                We work directly with the schools, waste collectors, and coastal communities our
                programs touch, so the people affected help shape what we do.
              </p>
            </div>
            <div className="card">
              <h3>Engineering discipline, applied</h3>
              <p>
                Led by a First Class engineering graduate, DACTION brings a careful, evidence-first
                mindset to grassroots environmental work, connecting technical careers with
                community climate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap grid grid--2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Latest</span>
            <h2 style={{ maxWidth: '20ch' }}>A founding partnership at Daniel's own university.</h2>
            <p style={{ marginTop: 12 }}>
              DACTION recently became a founding funding partner of ABUADMUN, a new Model United
              Nations association at Afe Babalola University, backing it with a multi-year funding
              commitment as it holds its first conference in November 2026.
            </p>
            <Link to="/programs#abuadmun" className="btn btn--ghost">
              Read more
            </Link>
          </div>
          <div className="home-partner-logo">
            <img
              src="/assets/logos/abuadmun-partnership.png"
              alt="DACTION x ABUADMUN partnership logo"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Our work</span>
          <h2 style={{ maxWidth: '22ch' }}>Five campaigns, one throughline.</h2>
          <p style={{ marginTop: 10, maxWidth: '64ch' }}>
            From ocean conservation classrooms to a hydrogen energy meetup and an upcoming soil and
            food-systems summit, DACTION's programs shift each year to meet the most pressing
            environmental need in front of us, while staying rooted in the same method: youth-led,
            community-built, honestly reported.
          </p>
          <Link to="/programs" className="btn" style={{ marginTop: 12 }}>
            View all programs
          </Link>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap">
          <span className="eyebrow">Backed by</span>
          <div className="grid grid--3" style={{ marginTop: 10 }}>
            <div>
              <h3 style={{ color: '#F5F8FA' }}>Captain Planet Foundation</h3>
              <p>Atlanta, Georgia, USA</p>
            </div>
            <div>
              <h3 style={{ color: '#F5F8FA' }}>RESWAYE</h3>
              <p>Lagos, Nigeria</p>
            </div>
            <div>
              <h3 style={{ color: '#F5F8FA' }}>ABUADMUN</h3>
              <p>Ekiti State, Nigeria</p>
            </div>
          </div>
          <Link to="/partners" className="btn btn--accent" style={{ marginTop: 18 }}>
            See all partners
          </Link>
        </div>
      </section>
    </>
  )
}
