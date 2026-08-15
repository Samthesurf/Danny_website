import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { teamMembers } from '../data/site'
import { useEffect } from 'react'

export default function Team() {
  useEffect(() => {
    document.title = 'Team | DACTION Initiative'
  }, [])

  const founder = teamMembers.find((m) => m.slug === 'daniel-olajuyigbe')
  const directors = teamMembers.filter((m) => m.slug !== 'daniel-olajuyigbe')

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '16ch' }}>The people behind the work.</h1>
          <p className="lede">
            DACTION is led by a founder and eight directors, each responsible for a distinct part
            of how the organization runs. Click through to read more about anyone below.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          {founder && (
            <Link
              to={`/team/${founder.slug}`}
              className="founder-feature"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {founder.headshot ? (
                <img
                  src={founder.headshot}
                  alt={`Portrait of ${founder.name}`}
                  className="founder-feature__img"
                />
              ) : (
                <Placeholder variant="portrait" label="Photo coming soon" />
              )}
              <div>
                <h2 style={{ fontSize: '2.1rem', marginBottom: 2 }}>{founder.name}</h2>
                <span className="role role--gold">{founder.role}</span>
                <p style={{ maxWidth: '56ch' }}>{founder.blurb}</p>
                <span className="link-arrow" style={{ color: 'var(--blue-deep)' }}>
                  Read Daniel's bio &rarr;
                </span>
              </div>
            </Link>
          )}

          <div className="grid grid--3" style={{ marginTop: 36 }}>
            {directors.map((member) => (
              <Link to={`/team/${member.slug}`} className="team-card" key={member.slug}>
                {member.headshot ? (
                  <div className={`team-card__avatar team-card__avatar--${member.slug}`}>
                    <img
                      src={member.avatar ?? member.headshot}
                      alt={`Portrait of ${member.name}`}
                      className={`team-card__img team-card__img--${member.slug}`}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <Placeholder variant="portrait" label="Photo coming soon" />
                )}
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.blurb}</p>
                <span className="link-arrow" style={{ color: 'var(--blue-deep)', display: 'inline-block', marginTop: 4 }}>
                  Read {member.name.split(' ')[0]}'s bio &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <span className="eyebrow">Beyond the Core Team</span>
          <h2 style={{ maxWidth: '26ch' }}>
            Each campaign draws on its own volunteer roster.
          </h2>
          <p style={{ marginTop: 14, maxWidth: '64ch' }}>
            Beyond the leadership above, individual campaigns bring in volunteers for speaking,
            logistics, media, graphics, registration, and judging. You'll find each campaign's
            team listed on its own program page.
          </p>
          <Link to="/programs" className="btn btn--ghost">
            View programs
          </Link>
        </div>
      </section>
    </>
  )
}
