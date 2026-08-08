import { Link, NavLink, Outlet } from "react-router-dom";
import { siteNav, CONTACT } from "../data/site";

function Brand({ height = "40px", variant = "color" }: { height?: string; variant?: "color" | "white" }) {
  return (
    <Link to="/" className="brand" aria-label="DACTION Initiative home">
      <img
        src={variant === "white" ? "/assets/logo-white.svg" : "/assets/logo.png"}
        alt="DACTION Initiative logo"
        style={{ height }}
      />
    </Link>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Brand />
        <nav className="primary" aria-label="Primary">
          {siteNav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

const SOCIAL = [
  {
    name: "Instagram",
    href: CONTACT.instagram,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: CONTACT.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <Brand height="34px" variant="white" />
            </div>
            <p className="footer-tagline">
              A youth-led environmental nonprofit running hands-on programs
              across Nigeria.
            </p>
            <div className="footer-social">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social__link"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT.orgEmail}`}
                className="footer-social__link"
                aria-label="Email"
                title="Email us"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer-links">
              {siteNav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === "/"}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${CONTACT.orgEmail}`}>{CONTACT.orgEmail}</a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                  @daction_initiative
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn profile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Reach us</h4>
            <address className="footer-address">{CONTACT.address}</address>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 DACTION Initiative. All rights reserved.</span>
          <span>Youth-led environmental action, from Lekki, Lagos, Nigeria.</span>
        </div>
      </div>
    </footer>
  );
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
  );
}
