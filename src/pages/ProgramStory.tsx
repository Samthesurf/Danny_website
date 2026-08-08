import { useParams, Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { programs } from '../data/site'
import { useEffect } from 'react'

export default function ProgramStory() {
  const { slug } = useParams<{ slug: string }>()
  const program = programs.find((p) => p.slug === slug)
  const prev = program?.prevSlug
    ? programs.find((p) => p.slug === program.prevSlug)
    : undefined
  const next = program?.nextSlug
    ? programs.find((p) => p.slug === program.nextSlug)
    : undefined

  useEffect(() => {
    document.title = program ? `${program.title} | DACTION Initiative` : 'Program | DACTION Initiative'
  }, [program])

  if (!program) {
    return (
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '18ch' }}>Program not found.</h1>
          <p className="lede">
            <Link to="/programs">Back to all programs</Link>
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <Link to="/programs" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
            &larr; All programs
          </Link>
          <div style={{ marginTop: 18 }}>
            <span className={`pill-status pill-status--${program.status}`}>
              {program.statusLabel}
            </span>
          </div>
          <h1 style={{ maxWidth: '20ch', marginTop: 14 }}>{program.title}</h1>
          <div className="meta-row">
            <span>
              <strong>Location:</strong> {program.location}
            </span>
            <span>
              <strong>Focus:</strong> {program.focus}
            </span>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          {program.image ? (
            <img
              src={program.image}
              alt={program.title}
              className="story-hero"
            />
          ) : (
            <Placeholder variant="wide" label="Photo coming soon" />
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid--2">
          <div>
            <span className="eyebrow">The story</span>
            <h2 style={{ maxWidth: '22ch' }}>{program.storyHeadline}</h2>
            {program.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div>
            <span className="eyebrow">At a glance</span>
            <div className="stat-row" style={{ marginTop: 6 }}>
              {program.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="num">{stat.num}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="tag-row">
              {program.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {program.featureLink && (
              <p style={{ marginTop: 16 }}>
                <a href={program.featureLink.url} target="_blank" rel="noopener">
                  {program.featureLink.label} &rarr;
                </a>
              </p>
            )}
            {program.logo ? (
              <div className="story-logo" style={{ marginTop: 24 }}>
                <img src={program.logo} alt={`${program.title} logo`} />
              </div>
            ) : (
              <Placeholder variant="card" label="Photo coming soon" style={{ marginTop: 24 }} />
            )}
          </div>
        </div>
      </section>

      {program.people && (
        <section className="section section--alt">
          <div className="wrap">
            <span className="eyebrow">{program.people.eyebrow}</span>
            <h2 style={{ maxWidth: '22ch' }}>{program.people.heading}</h2>
            <div className="people-grid">
              {program.people.people.map((person) => (
                <div className="p-item" key={`${person.name}-${person.role}`}>
                  <Placeholder variant="avatar" label="" />
                  <div className="p-name">{person.name}</div>
                  <div className="p-role">{person.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--navy">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          {prev ? (
            <Link to={`/programs/${prev.slug}`} style={{ color: '#fff', fontWeight: 600 }}>
              &larr; {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/programs/${next.slug}`} style={{ color: '#fff', fontWeight: 600 }}>
              {next.title} &rarr;
            </Link>
          ) : (
            <Link to="/programs" style={{ color: '#fff', fontWeight: 600 }}>
              All programs
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
