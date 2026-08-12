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
                  Turn environmental awareness into action people can see today, and the careers
                  that carry it forward tomorrow. We design and deliver youth-led programs across
                  ocean conservation, renewable energy, and sustainability in careers and business,
                  producing real, visible outcomes for the communities and ecosystems we work in.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card mv-card">
                <img className="mv-ico" src="/assets/icons3d/target.png" alt="" />
                <h3>Our vision</h3>
                <p>
                  Young Africans leading the continent's environmental future. We're working
                  toward a future where young people across Africa combine scientific training,
                  hands-on community experience, and the confidence to lead, not just take part in,
                  the continent's response to environmental and energy challenges, from grassroots
                  action all the way into the careers and industries that shape it.
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
                  It didn't start with a plan. It started with a question.
                </blockquote>
                <p>
                  DACTION Initiative began in 2022, more as an inspiration to get involved in
                  sustainability and impact than a fixed plan. Daniel Olajuyigbe, then an
                  undergraduate engineering student at Afe Babalola University, kept noticing the
                  same gap wherever he looked: there was real opportunity for young Nigerians to get
                  involved in sustainability and climate work, but most didn't know it existed, or
                  how to actually make the most of it when it did. Most programs in the space were
                  also built with adults in mind, not designed around youth-led action, so there was
                  little real room for young people to lead. DACTION was built to answer that gap.
                </p>
                <p>
                  He started DACTION to close that gap: an organization young people would run
                  themselves, choosing what to work on, raising the funding, and answering honestly
                  for what worked.
                </p>
                <p>
                  From the beginning, that work has stayed inside three consistent interests: ocean
                  conservation, renewable energy, and sustainability in careers and business.
                  DACTION's first real test came the same year, when the organization won its first
                  international grant and partnered with RESWAYE to bring ocean conservation
                  education and recycling infrastructure into five secondary schools in Akure. It
                  proved that a small, youth-led team could plan a real campaign and see it through.
                </p>
                <p>
                  From there, DACTION kept pursuing whichever opportunity fit those three interests
                  best. Coastal cleanups and reforestation in Lekki followed in 2024. An energy
                  dialogue on hydrogen's place in Nigeria's future came in 2025, pulling in an NNPC
                  executive and international researchers from Germany and Canada. Now, DACTION is
                  preparing a soil and food-systems summit at a Nigerian university, and has taken on
                  its first institutional funding commitment, backing a new Model United Nations
                  association at Daniel's alma mater.
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

      {/* WHY WE WORK ACROSS SO MANY FRONTS */}
      <section className="section section--alt">
        <div className="wrap">
          <h2 style={{ maxWidth: '26ch' }}>
            The problems aren't separate, so we don't treat them that way.
          </h2>
          <div className="grid grid--2" style={{ marginTop: 26, alignItems: 'start' }}>
            <div>
              <p>
                DACTION's work sits inside three consistent interests: ocean conservation,
                renewable energy, and sustainability in careers and business. Every campaign we've
                run traces back to one of those three, whether that's a classroom conservation
                drive, a hydrogen energy meetup, or an upcoming soil health summit. We go after the
                grants and opportunities that fit those interests, and that's what actually decides
                what we work on each year, not a lack of focus.
              </p>
              <p>
                We believe the long-term fix for sustainability is getting it built into how
                careers and businesses actually operate, not treated as a side project. But that
                only works if young people get involved first: out in their communities, building
                awareness, running advocacy, delivering real programs, and seeing for themselves
                that change is possible. That street-level experience is what eventually carries
                people into the kind of careers and leadership roles where sustainability gets
                built in for good.
              </p>
            </div>
            <div>
              <p>
                Working across several fronts also reflects who's actually on our team. Our
                volunteers and directors come from different backgrounds and care about different
                pieces of the sustainability picture, engineering, data, communications,
                conservation science, energy, advocacy, so giving each project room to match those
                interests means more people doing work they're genuinely invested in, and a
                stronger, more varied track record to show for it.
              </p>
              <p>
                We're actively growing on all three fronts at once: deeper ocean and coastal
                conservation work, expanded renewable energy programming, and continued youth
                advocacy and storytelling. We're building on partnerships like the Captain Planet
                Foundation while staying open to new collaborations that share our commitment to
                youth-led, evidence-based environmental action.
              </p>
              <Link to="/contact" className="btn btn--ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES / HOW WE WORK */}
      <section className="section section--navy">
        <div className="wrap grid grid--2" style={{ alignItems: 'start' }}>
          <div>
            <h2>What we value.</h2>
            <ul className="plain" style={{ marginTop: 10 }}>
              <li>Youth leadership at every level of design and delivery</li>
              <li>Direct partnership with the communities we work in</li>
              <li>Honest, plain reporting on what each campaign actually achieved</li>
              <li>Bridging everyday careers, like engineering, with sustainability</li>
            </ul>
          </div>
          <div>
            <h2>How we work.</h2>
            <ul className="plain" style={{ marginTop: 10 }}>
              <li>Programs are shaped with the people they affect, not delivered top down</li>
              <li>A lean core team keeps every campaign tightly run and easy to hold accountable</li>
              <li>Campaigns aim to leave something behind: bins, trees, a lasting connection, not just a one-day event</li>
            </ul>
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