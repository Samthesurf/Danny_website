import { Link } from 'react-router-dom'
import { impactStats, programs } from '../data/site'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { useCountUp } from '../components/useCountUp'

/**
 * Parse a stat string like "$4,000+" / "500+" / "5" into a numeric target plus
 * its prefix/suffix so we can count the number up and re-attach the decoration.
 */
function parseStat(num: string): { prefix: string; target: number; suffix: string } {
  const match = num.match(/^([^\d]*)([\d,]+)(.*)$/)
  if (!match) return { prefix: '', target: 0, suffix: num }
  const [, prefix, digits, suffix] = match
  return { prefix, target: parseInt(digits.replace(/,/g, ''), 10), suffix }
}

function formatWithCommas(n: number, template: string): string {
  // Preserve the comma style of the original digits.
  return template.includes(',') ? n.toLocaleString('en-US') : String(n)
}

function AnimatedStat({ num, label, active }: { num: string; label: string; active: boolean }) {
  const { prefix, target, suffix } = parseStat(num)
  const digits = num.replace(/^[^\d]*/, '').replace(/[^\d]*$/, '')
  const value = useCountUp(target, active)
  return (
    <div className="stat">
      <span className="num">
        {prefix}
        {formatWithCommas(value, digits)}
        {suffix}
      </span>
      <span className="label">{label}</span>
    </div>
  )
}

function StatsRow() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stat-row" ref={ref}>
      {impactStats.map((s) => (
        <AnimatedStat key={s.label} num={s.num} label={s.label} active={active} />
      ))}
    </div>
  )
}

/** One clickable tile in the 'Our work' campaign strip. */
function WorkThumb({ p, delay }: { p: (typeof programs)[number]; delay: number }) {
  const hasPhoto = Boolean(p.image)
  return (
    <Reveal delay={delay}>
      <Link
        to={`/programs/${p.slug}`}
        className={`work-thumb${hasPhoto ? '' : ' work-thumb--logo'}`}
        aria-label={p.title}
      >
        {hasPhoto ? (
          <img src={p.image} alt={p.title} loading="lazy" />
        ) : (
          <img src={p.logo} alt={`${p.title} logo`} loading="lazy" />
        )}
        <span className="work-thumb__label">{p.title}</span>
      </Link>
    </Reveal>
  )
}

export default function Home() {
  const [posterOpen, setPosterOpen] = useState(false)

  useEffect(() => {
    document.title = 'DACTION Initiative | Youth-Led Environmental Action, Nigeria'
  }, [])

  // Close the podcast flyer lightbox on Escape and lock body scroll while open.
  useEffect(() => {
    if (!posterOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPosterOpen(false)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [posterOpen])

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <Reveal>
            <h1>Young people, leading real environmental change.</h1>
            <p className="lede">
              DACTION Initiative is a youth-led nonprofit based in Lekki, Lagos, running hands-on
              environmental programs across Nigeria: ocean conservation, coastal cleanups,
              reforestation, clean energy education, and sustainable food systems.
            </p>
            <div className="hero-actions">
              <Link to="/programs" className="btn btn--accent">
                See our programs
              </Link>
              <Link to="/about" className="btn btn--ghost">
                Our story
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <img
              src="/assets/img/hydrogen-horizons/session-05.jpg"
              alt="Attendees at DACTION's Hydrogen Horizons meetup"
              className="hero-img"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <StatsRow />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <h2 style={{ maxWidth: '24ch' }}>A small team, serious about the work.</h2>
          </Reveal>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <Reveal delay={0}>
              <div className="card">
                <h3>Youth-led, start to finish</h3>
                <p>
                  Every campaign is designed and led by young people themselves, from the first idea
                  through to delivery. DACTION's team plans, fundraises, delivers, and answers for
                  the results.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card">
                <h3>Built with the community</h3>
                <p>
                  We work directly with the schools, waste collectors, and coastal communities our
                  programs touch, so the people affected help shape what we do.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="card">
                <h3>Engineering discipline, applied</h3>
                <p>
                  Led by a First Class engineering graduate, DACTION brings a careful, evidence-first
                  mindset to grassroots environmental work, connecting technical careers with
                  community climate action.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap grid grid--2" style={{ alignItems: 'center' }}>
          <Reveal>
            <h2 style={{ maxWidth: '20ch' }}>Daniel on the "Pending the Bar" podcast.</h2>
            <p style={{ marginTop: 12 }}>
              Daniel's first podcast appearance, on the ABUAD Law Students' Society's "Pending the
              Bar, How-To Series," breaks down the Sustainable Development Goals in practical
              terms: how to find the goals you actually care about, how to start with no prior
              experience, how to align them with a career path, and how that path led to founding
              DACTION. The 45-minute episode also covers how to find opportunities, apply for
              grants, and turn ideas into real projects.
            </p>
            <a
              href="https://open.spotify.com/episode/0Rldj1H7E8Jo3OBBcW3EkY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Listen on Spotify
            </a>
          </Reveal>
          <Reveal delay={150}>
            <button
              type="button"
              className="podcast-poster-btn"
              onClick={() => setPosterOpen(true)}
              aria-label="View full Pending the Bar podcast flyer"
            >
              <img
                src="/assets/img/daniel-podcast-lss.jpg"
                alt="Pending the Bar podcast flyer featuring Daniel Olajuyigbe"
                className="podcast-poster"
                loading="lazy"
              />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <h2 style={{ maxWidth: '22ch' }}>Four campaigns. Three consistent interests.</h2>
            <p style={{ marginTop: 10, maxWidth: '64ch' }}>
              Every DACTION campaign traces back to one of three things we care about most: ocean
              conservation, renewable energy, and sustainability in careers and business. We go
              after the grants and opportunities that fit those interests, which is why our programs
              range from classroom conservation drives to a hydrogen energy meetup, each one
              designed and run by the young people drawn to that particular issue.
            </p>
          </Reveal>
          <div className="work-strip">
            {[
              'earth-summit',
              'hydrogen-horizons',
              'youth-vs-climate-change',
              'ocean-conservation',
            ]
              .map((slug) => programs.find((p) => p.slug === slug))
              .filter((p): p is (typeof programs)[number] => Boolean(p))
              .map((p, i) => (
                <WorkThumb key={p.slug} p={p} delay={i * 90} />
              ))}
          </div>
          <Reveal delay={200}>
            <Link to="/programs" className="btn" style={{ marginTop: 26 }}>
              View all programs
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap">
          <Reveal>
            <h2 style={{ fontSize: '1.4rem' }}>Backed by</h2>
          </Reveal>
          <div className="backed-grid">
            <Reveal delay={0}>
              <div className="backed-card">
                <div className="backed-card__logo">
                  <span className="logo-chip" data-tooltip="Captain Planet Foundation">
                    <img
                      src="/assets/logos/cpf-logo.png"
                      alt="Captain Planet Foundation logo"
                      title="Captain Planet Foundation"
                    />
                  </span>
                </div>
                <p>Atlanta, Georgia, USA</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="backed-card">
                <div className="backed-card__logo">
                  <span className="logo-chip" data-tooltip="RESWAYE">
                    <img src="/assets/logos/reswaye.png" alt="RESWAYE logo" title="RESWAYE" />
                  </span>
                </div>
                <p>Lagos, Nigeria</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link to="/partners" className="btn btn--accent" style={{ marginTop: 26, display: 'inline-block' }}>
              See all partners
            </Link>
          </Reveal>
        </div>
      </section>

      {posterOpen && (
        <div
          className="lightbox-backdrop"
          onClick={() => setPosterOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Pending the Bar podcast flyer"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setPosterOpen(false)}
            aria-label="Close full view"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <img
              src="/assets/img/daniel-podcast-lss.jpg"
              alt="Pending the Bar podcast flyer featuring Daniel Olajuyigbe"
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <span>Pending the Bar, How-To Series</span>
              <span className="lightbox-counter">Episode One: SDGs with Daniel Olajuyigbe</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
