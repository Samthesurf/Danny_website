import { Link } from 'react-router-dom'

interface BackLinkProps {
  to: string
  children: React.ReactNode
  /** Arrow direction. Defaults to back (left). */
  direction?: 'left' | 'right'
  /** 'default' on light backgrounds; 'navy' on the dark prev/next navigation band. */
  tone?: 'default' | 'navy'
}

/** Crisp "back"/nav link with a circular arrow icon (used on program + bio detail pages). */
export default function BackLink({
  to,
  children,
  direction = 'left',
  tone = 'default',
}: BackLinkProps) {
  const cls = ['back-link']
  if (tone === 'navy') cls.push('back-link--navy')
  if (direction === 'right') cls.push('back-link--right')
  return (
    <Link to={to} className={cls.join(' ')}>
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
