import { useParams, Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import BackLink from '../components/BackLink'
import { teamMembers } from '../data/site'
import { useEffect } from 'react'

export default function MemberBio() {
  const { slug } = useParams<{ slug: string }>()
  const member = teamMembers.find((m) => m.slug === slug)

  useEffect(() => {
    document.title = member ? `${member.name} | DACTION Initiative` : 'Team | DACTION Initiative'
  }, [member])

  if (!member) {
    return (
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '18ch' }}>Team member not found.</h1>
          <p className="lede">
            <Link to="/team">Back to the team</Link>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="section--tight">
      <div className="wrap">
        <BackLink to="/team" direction="left">All team members</BackLink>
        <div className="bio-grid" style={{ marginTop: 24 }}>
          <div>
            {member.headshot ? (
              <img
                src={member.headshot}
                alt={`Portrait of ${member.name}`}
                className="bio-portrait"
              />
            ) : (
              <Placeholder variant="portrait" label="Photo coming soon" />
            )}
          </div>
          <div>
            <h1 style={{ fontSize: '2rem' }}>{member.name}</h1>
            <span className="role" style={{ marginTop: 2 }}>
              {member.role}
            </span>
            {member.bio.slice(0, Math.ceil(member.bio.length / 2)).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {member.work && (
              <img
                src={member.work}
                alt={`${member.name} at work`}
                className="bio-work"
                loading="lazy"
                style={{ margin: '18px 0' }}
              />
            )}
            {member.bio.slice(Math.ceil(member.bio.length / 2)).map((paragraph, i) => (
              <p key={member.bio.length / 2 + i}>{paragraph}</p>
            ))}
            {member.note && <p style={{ fontStyle: 'italic', color: 'var(--ink-soft)' }}>{member.note}</p>}
            <Link to="/team" className="btn btn--ghost">
              Back to the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
