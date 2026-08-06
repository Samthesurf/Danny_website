import { Link } from 'react-router-dom'
import { timeline } from '../data/site'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About | DACTION Initiative'
  }, [])

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1 style={{ maxWidth: '18ch' }}>Why we exist, and how we got here.</h1>
          <p className="lede">
            DACTION Initiative is a youth-led environmental nonprofit based in Lekki, Lagos. We
            design and deliver hands-on programs across Nigeria, built and run by young people, for
            the communities and ecosystems they affect.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid--2">
          <div>
            <span className="eyebrow">Mission</span>
            <h2>Turn environmental awareness into action people can see.</h2>
            <p>
              We design and deliver youth-led programs, from beach cleanups and reforestation to
              clean energy education and soil restoration, that produce real, visible outcomes for
              the communities and ecosystems we work in.
            </p>
          </div>
          <div>
            <span className="eyebrow">Vision</span>
            <h2>Young Africans leading the continent's environmental future.</h2>
            <p>
              We're working toward a future where young people across Africa combine scientific
              training, strong community partnerships, and the confidence to execute, so they lead
              the continent's response to environmental and energy challenges rather than simply
              taking part in it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <span className="eyebrow">Our story</span>
          <h2 style={{ maxWidth: '20ch' }}>It didn't start with a plan. It started with a question.</h2>
          <div className="grid grid--2" style={{ marginTop: 30, alignItems: 'start' }}>
            <div>
              <p>
                DACTION Initiative began in June 2021, as more of a question than a plan. Daniel
                Olajuyigbe, then an undergraduate engineering student at Afe Babalola University,
                kept noticing the same gap wherever he looked: young Nigerians cared deeply about
                the environment around them, but almost none of the programs meant to engage them
                were actually designed by young people. Most were run by adults, for children, with
                little room for youth to lead.
              </p>
              <p>
                He started DACTION to close that gap: an organization that young people would run
                themselves, from choosing what to work on, to raising the funding, to answering
                honestly for what worked and what didn't.
              </p>
              <p>
                The first real test of that idea came a year later. In 2022, DACTION won its first
                international grant and partnered with RESWAYE to bring ocean conservation education
                and recycling infrastructure into five secondary schools in Akure. It wasn't the
                mission the organization was built around so much as proof that a small, youth-led
                team could plan a real campaign and see it through.
              </p>
            </div>
            <div>
              <p>
                From there, the work kept moving toward whatever gap felt most urgent that year.
                Coastal cleanups and reforestation in Lekki followed in 2024. A hybrid energy
                dialogue on hydrogen's place in Nigeria's future came in 2025, pulling in an NNPC
                executive and researchers from three countries. Now, DACTION is preparing a soil and
                food-systems summit at a Nigerian university, and has taken on its first
                institutional funding commitment, backing a new Model United Nations association at
                Daniel's alma mater.
              </p>
              <p>
                What's stayed constant through every shift is the method: young people design the
                campaign, a small team executes it directly, and the organization reports back
                plainly on what actually happened, not just what was hoped for.
              </p>
              <p>
                DACTION today is still a volunteer-led organization, run alongside its founder's
                engineering studies and career, built by people who believe environmental leadership
                shouldn't have to wait for permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Timeline</span>
          <h2 style={{ maxWidth: '22ch' }}>Five campaigns, most recent first.</h2>
          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <span className="eyebrow">Why we work across so many fronts</span>
          <h2 style={{ maxWidth: '26ch' }}>The problems aren't separate, so we don't treat them that way.</h2>
          <div className="grid grid--2" style={{ marginTop: 26, alignItems: 'start' }}>
            <div>
              <p>
                Since 2021, DACTION's work has touched ocean conservation, coastal cleanups,
                reforestation, renewable energy education, and soil health. That range isn't a lack
                of focus. A community without recycling infrastructure is often the same community
                facing coastal erosion, energy poverty, and food insecurity, and treating those as
                one connected problem lets a small, youth-led team respond to whatever gap is most
                urgent right now, instead of being boxed into a single issue while everything around
                it goes unaddressed.
              </p>
              <p>
                It's also why DACTION stays open to new partnerships, new geographies, and new forms
                of environmental storytelling, from beach cleanups to hydrogen energy dialogues to
                youth artivism competitions. We follow the need and the opportunity for real impact
                wherever they lead, while holding onto the same throughline in everything we do:
                youth leadership, direct community partnership, and honest reporting on what
                actually happened.
              </p>
            </div>
            <div>
              <p>
                Looking ahead, DACTION is actively growing on several fronts at once: deeper ocean
                and coastal conservation work, expanded renewable energy advocacy, and more youth
                artivism and storytelling projects that put creative work in service of
                environmental awareness. We're building on partnerships like the Captain Planet
                Foundation while staying open to new collaborations that share our commitment to
                youth-led, evidence-based environmental action.
              </p>
              <p>
                If your organization is working on ocean conservation, clean energy, climate
                storytelling, or youth leadership development, and you think there's common ground
                with what we do, we'd like to hear from you.
              </p>
              <Link to="/contact" className="btn btn--ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap grid grid--2">
          <div>
            <span className="eyebrow">What we value</span>
            <ul className="plain" style={{ marginTop: 10 }}>
              <li>Youth leadership at every level of design and delivery</li>
              <li>Direct partnership with the communities we work in</li>
              <li>Honest reporting, including what didn't go to plan</li>
              <li>Bridging everyday careers, like engineering, with sustainability</li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">How we work</span>
            <ul className="plain" style={{ marginTop: 10 }}>
              <li>Programs are shaped with the people they affect, not delivered top down</li>
              <li>A lean core team keeps every campaign tightly run and easy to hold accountable</li>
              <li>
                Campaigns aim to leave something behind: bins, trees, a lasting connection, not
                just a one-day event
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
