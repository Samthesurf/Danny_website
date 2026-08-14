import { useEffect, useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { CONTACT } from '../data/site'

/** Web3Forms access key — get a free one at https://web3forms.com */
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'ddb1b410-44b0-4734-986d-a78ec7c93c38'

const SUBJECT_MAP: Record<string, string> = {
  general: 'General Inquiry',
  partnership: 'Partnership / Institutional Collaboration',
  funding: 'Grant / Funding Inquiry',
  volunteer: 'Volunteering / Joining the Team',
  speaking: 'Speaking / Event Invitation',
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | DACTION Initiative'
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'general',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const topic = SUBJECT_MAP[formData.subject] || formData.subject

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[DACTION Website] ${topic} from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          organization: formData.organization || 'N/A',
          topic,
          message: formData.message,
        }),
      })

      if (!res.ok) throw new Error(`Web3Forms returned ${res.status}`)
      setStatus('sent')
      setFormData({ name: '', email: '', organization: '', subject: 'general', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const set = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  return (
    <>
      <section className="hero-simple">
        <div className="wrap">
          <Reveal>
            <h1 style={{ maxWidth: '14ch' }}>Reach the team.</h1>
            <p className="lede">
              Whether you're a school, a potential partner, a funder, or just curious about our work,
              we'd love to hear from you. We aim to respond within a few business days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap grid grid--2" style={{ alignItems: 'start' }}>
          <Reveal>
            <div className="card">
              <h3>Send a message</h3>
              <p style={{ marginBottom: 20, color: 'var(--ink-soft)', fontSize: '0.94rem' }}>
                Fill in the details below and we will get back to you directly via email.
              </p>

              {status === 'sent' ? (
                <div className="form-success">
                  <h4>Message sent!</h4>
                  <p>
                    Thanks for reaching out. We'll review your message and get back to you
                    as soon as possible. In the meantime, feel free to follow{' '}
                    <a href={CONTACT.instagram} target="_blank" rel="noopener">
                      @daction_initiative on Instagram
                    </a>{' '}
                    for updates.
                  </p>
                  <button
                    className="btn btn--ghost"
                    style={{ marginTop: 12, cursor: 'pointer' }}
                    onClick={() => setStatus('idle')}
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Your Name <span className="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Amina Bello"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => set('name', e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="you@domain.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => set('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="contact-org" className="form-label">
                        Organization / School (optional)
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        placeholder="e.g. University / NGO / Company"
                        className="form-input"
                        value={formData.organization}
                        onChange={(e) => set('organization', e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-subject" className="form-label">
                        Topic <span className="required">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        className="form-select"
                        value={formData.subject}
                        onChange={(e) => set('subject', e.target.value)}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership &amp; Collaboration</option>
                        <option value="funding">Grant &amp; Funding Opportunity</option>
                        <option value="volunteer">Volunteering / Joining the Team</option>
                        <option value="speaking">Speaking / Event Invitation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="How can we help or collaborate?"
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => set('message', e.target.value)}
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      type="submit"
                      className="btn btn--accent"
                      style={{ cursor: 'pointer', minWidth: 180 }}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    <p className="form-privacy-note">
                      {status === 'error'
                        ? 'Something went wrong. Please try again or email us directly.'
                        : 'Delivered directly to our inbox.'}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: 'grid', gap: '24px' }}>
              <div className="card">
                <h3>Direct Contact</h3>
                <p>
                  DACTION Initiative
                  <br />
                  Chevy View Estate, Chevron Drive
                  <br />
                  Lekki, Lagos, Nigeria
                </p>
                <p style={{ marginTop: 16 }}>
                  <a href={`mailto:${CONTACT.orgEmail}`}>{CONTACT.orgEmail}</a>
                </p>
                <p>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener">
                    Instagram, @daction_initiative
                  </a>
                </p>
                <p>
                  <a href={CONTACT.linkedinCompany} target="_blank" rel="noopener">
                    LinkedIn company page &rarr;
                  </a>
                </p>
              </div>

              <div className="card">
                <h3>Founder &amp; Executive Director</h3>
                <p>
                  Daniel Olajuyigbe
                  <br />
                  BEng Aeronautical &amp; Astronautical Engineering
                  <br />
                  First Class Honours, Afe Babalola University
                </p>
                <p style={{ marginTop: 16 }}>
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener">
                    LinkedIn profile &rarr;
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap">
          <Reveal>
            <h2 style={{ maxWidth: '22ch', color: '#F5F8FA' }}>We're always glad to talk.</h2>
            <p style={{ marginTop: 14, maxWidth: '66ch', color: '#B9C7D6' }}>
              Reach out if you're interested in partnering with us, funding a campaign, or bringing
              DACTION into your institution. Reach out if you'd like to join the team as a volunteer
              or director, or if you're a student figuring out your own path into sustainability work
              and want to talk it through. Reach out if you've got an opportunity, a grant, an event,
              a collaboration, that you think we should know about, or an idea for what DACTION
              should take on next. And reach out if you just have a question, for the organization or
              for any member of our team specifically. However you found us, we want to hear from you.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}