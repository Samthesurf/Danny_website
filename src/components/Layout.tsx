import { Link, NavLink, Outlet } from 'react-router-dom'
import { siteNav, CONTACT } from '../data/site'

function Brand({ height = '40px' }: { height?: string }) {
  return (
    <Link to="/" className="brand" aria-label="DACTION Initiative home">
      <img src="/assets/logo.svg" alt="DACTION Initiative logo" style={{ height }} />
    </Link>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Brand />
        <nav className="primary" aria-label="Primary">
          {siteNav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Brand height="34px" />
            </div>
            <p>{CONTACT.address}</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <a href={`mailto:${CONTACT.orgEmail}`}>{CONTACT.orgEmail}</a>
              <br />
              <a href={CONTACT.instagram} target="_blank" rel="noopener">
                @daction_initiative
              </a>
            </p>
          </div>
          <div>
            <h4>Navigate</h4>
            <p>
              <Link to="/about">About</Link>
              <br />
              <Link to="/programs">Programs</Link>
              <br />
              <Link to="/team">Team</Link>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 DACTION Initiative</span>
          <span>Lekki, Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
