import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { teamMembers } from '../data/site'
import { useEffect } from 'react'

export default function Team() {
  useEffect(() => {
    document.title = 'Team | DACTION Initiative'
  }, [])

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '16ch' }}>The core team.</h1>
          <p className="lede">
            DACTION's campaigns are run by a small, hands-on leadership team, with extra
            volunteers brought in for each program. Click through to read more about each person.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="grid grid--3">
            {teamMembers.map((member) => (
              <Link to={`/team/${member.slug}`} className="team-card" key={member.slug}>
                <Placeholder variant="portrait" label="Photo coming soon" />
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <h2 style={{ maxWidth: '26ch' }}>Beyond the core team: every campaign brings in its own volunteers.</h2>
          <p style={{ marginTop: 14, maxWidth: '64ch' }}>
            Beyond the standing team above, individual campaigns call on extra people for
            speaking, logistics, media, graphics, registration, and judging. You'll find each
            campaign's team listed on its own program page.
          </p>
          <Link to="/programs" className="btn btn--ghost">
            View programs
          </Link>
        </div>
      </section>
    </>
  )
}
