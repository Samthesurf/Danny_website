import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { siteNav, CONTACT } from "../data/site";

function Brand({ variant = "color" }: { variant?: "color" | "white" }) {
  return (
    <Link to="/" className="brand" aria-label="DACTION Initiative home">
      <img
        src={variant === "white" ? "/assets/logo-white.svg" : "/assets/logo.png"}
        alt="DACTION Initiative logo"
      />
    </Link>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span className={`hamburger${open ? " is-open" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Shrink the floating nav once the visitor scrolls past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Keep the mobile panel pinned just under the (possibly shrinking) header.
  useLayoutEffect(() => {
    const setTop = () => {
      const h = headerRef.current?.offsetHeight ?? 86;
      document.documentElement.style.setProperty("--mobile-nav-top", `${h}px`);
    };
    setTop();
    window.addEventListener("resize", setTop);
    window.addEventListener("scroll", setTop, { passive: true });
    return () => {
      window.removeEventListener("resize", setTop);
      window.removeEventListener("scroll", setTop);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="wrap">
        <div className="nav-shell">
          <Brand />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Hamburger open={menuOpen} />
          </button>
          <nav className="primary" aria-label="Primary">
            {siteNav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="nav-cta">
              Partner with us
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile slide-down panel */}
      <div
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          {siteNav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta mobile-nav__cta">
            Partner with us
          </Link>
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
    href: CONTACT.linkedinCompany,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: `mailto:${CONTACT.orgEmail}`,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* Decorative oversized line-art emblem watermark, entering from the right edge */}
      <img
        src="/assets/logo-emblem-line.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="footer-watermark"
      />
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <Brand variant="white" />
            </div>
            <p className="footer-tagline">
              A youth-led environmental nonprofit running hands-on programs
              across Nigeria.
            </p>
            <address className="footer-address">{CONTACT.address}</address>
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
            <h4>Get in touch</h4>
            <ul className="footer-contact">
              {SOCIAL.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target={s.name === "Email" ? undefined : "_blank"}
                    rel={s.name === "Email" ? undefined : "noopener noreferrer"}
                    className="footer-contact__link"
                  >
                    <span className="footer-contact__icon">{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
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
