import { Link } from 'react-router-dom'
import { timeline, impactStats } from '../data/site'
import { Reveal } from '../components/Reveal'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About | DACTION Initiative'
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero-simple">
        <div className="wrap">
          <h1 style={{ maxWidth: '18ch' }}>Why we exist, and how we got here.</h1>
          <p className="lede">
            DACTION Initiative is a youth-led environmental nonprofit based in Lekki, Lagos. We
            design and deliver hands-on programs across Nigeria, built and run by young people, for
            the communities and ecosystems they affect.
          </p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid--2">
            <Reveal>
              <div className="card mv-card">
                <img className="mv-ico" src="/assets/icons3d/leaf.png" alt="" />
                <h3>Our mission</h3>
                <p>
                  Youth-led programs, from beach cleanups and reforestation to clean energy
                  education and soil restoration, that produce real, visible outcomes for the
                  communities and ecosystems we work in.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card mv-card">
                <img className="mv-ico" src="/assets/icons3d/target.png" alt="" />
                <h3>Our vision</h3>
                <p>
                  A future where young people across Africa combine scientific training, strong
                  community partnerships, and the confidence to execute, so they lead the
                  continent's response to environmental and energy challenges rather than simply
                  taking part in it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section section--alt">
        <div className="wrap">
          <h2 style={{ maxWidth: '22ch' }}>OUR STORY</h2>
          <div className="story-grid">
            <Reveal>
              <div className="story-side">
                <div className="story-photo">
                  <img
                    src="/assets/img/ocean-conservation/school-03.jpg"
                    alt="Daniel Olajuyigbe presenting DACTION's ocean conservation work"
                  />
                </div>
                <div className="card story-card">
                  <div className="stat">2022</div>
                  <p>
                    DACTION won its first international grant, partnering with RESWAYE to bring
                    ocean conservation to five secondary schools in Akure.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="story-text">
                <blockquote>
                  Young Nigerians cared deeply about the environment, but almost none of the
                  programs meant to engage them were designed by young people.
                </blockquote>
                <p>
                  DACTION began in June 2022, more as a question than a plan. Daniel Olajuyigbe,
                  then an undergraduate engineering student at Afe Babalola University, kept
                  noticing the same gap: the programs meant to engage young people were almost
                  always run by adults, for children, with little room for youth to lead.
                </p>
                <p>
                  He started DACTION to close that gap: an organization young people would run
                  themselves, from choosing what to work on, to raising the funding, to answering
                  honestly for what worked and what didn't.
                </p>
                <p>
                  Since then, the work has moved toward whatever gap felt most urgent that year:
                  coastal cleanups and reforestation in Lekki, a hybrid energy dialogue on
                  hydrogen's place in Nigeria's future, and now a soil and food-systems summit, plus
                  its first institutional partnership backing a new Model United Nations at Daniel's
                  alma mater.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="wrap">
          <div className="stats">
            {impactStats.map((s) => (
              <Reveal key={s.label}>
                <div className="stat-box">
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section--sand">
        <div className="wrap">
          <h2 style={{ maxWidth: '24ch' }}>Five campaigns, most recent first.</h2>
          <div className="timeline">
            {timeline.map((item) => {
              const year = item.year.split('·')[0].trim()
              return (
                <div className="timeline-item" key={`${item.year}-${item.title}`}>
                  <h3>
                    {item.title} <span className="tl-year">({year})</span>
                  </h3>
                  <p>{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--navy">
        <div className="wrap">
          <h2>What we value.</h2>
          <div className="val-grid">
            <div className="val">
              <img src="/assets/icons3d/rocket.png" alt="" />
              <h4>Youth leadership</h4>
              <p>At every level of design and delivery.</p>
            </div>
            <div className="val">
              <img src="/assets/icons3d/heart.png" alt="" />
              <h4>Direct partnership</h4>
              <p>With the communities we work in.</p>
            </div>
            <div className="val">
              <img src="/assets/icons3d/megaphone.png" alt="" />
              <h4>Honest reporting</h4>
              <p>Including what didn't go to plan.</p>
            </div>
            <div className="val">
              <img src="/assets/icons3d/tools.png" alt="" />
              <h4>Bridge careers</h4>
              <p>Connecting engineering with sustainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-block">
            <h2>
              Working on ocean, climate, or youth leadership? Let's talk.
            </h2>
            <p>If there's common ground with what we do, we'd love to hear from you.</p>
            <Link to="/contact" className="btn btn--accent">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}