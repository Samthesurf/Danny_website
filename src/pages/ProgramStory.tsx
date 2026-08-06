import { useParams, Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { programs } from '../data/site'
import { useEffect } from 'react'

export default function ProgramStory() {
  const { slug } = useParams<{ slug: string }>()
  const program = programs.find((p) => p.slug === slug)

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
          <span className="eyebrow">{program.tag}</span>
          <h1 style={{ maxWidth: '20ch' }}>{program.title}</h1>
          <p className="lede">{program.blurb}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Placeholder variant="wide" label="Photo coming soon" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <span className="eyebrow">The full story</span>
          <h2 style={{ maxWidth: '24ch' }}>This page is being written.</h2>
          <p style={{ maxWidth: '64ch' }}>
            The complete story of this campaign, what we set out to do, and what actually happened
            is on its way. Check back soon, or visit the overall program overview for the summary.
          </p>
          <Link to="/programs" className="btn btn--ghost" style={{ marginTop: 12 }}>
            All programs
          </Link>
        </div>
      </section>
    </>
  )
}
