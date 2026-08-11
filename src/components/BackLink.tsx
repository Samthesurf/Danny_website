import { Link } from 'react-router-dom'

/** Crisp "back" link with a circular arrow icon (used on program + bio detail pages). */
export default function BackLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="back-link">
      <span className="back-link__icon" aria-hidden="true">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M5 12l6-6M5 12l6 6" />
        </svg>
      </span>
      {children}
    </Link>
  )
}
