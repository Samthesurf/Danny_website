import { useParams, Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
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
    <>
      <section className="hero-simple">
        <div className="wrap">
          <span className="eyebrow">{member.role}</span>
          <h1 style={{ maxWidth: '20ch' }}>{member.name}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap bio-grid">
          <Placeholder variant="portrait" label="Photo coming soon" />
          <div>
            <span className="eyebrow">Bio</span>
            <p>{member.blurb}</p>
            <p style={{ maxWidth: '60ch' }}>
              {member.name.split(' ')[0]}'s full bio is being written. In the meantime, you can
              read about the work {member.name.split(' ')[0]} leads on the programs page.
            </p>
            <Link to="/team" className="btn btn--ghost">
              Back to the team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
