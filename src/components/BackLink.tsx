import { Link } from 'react-router-dom'

interface BackLinkProps {
  to: string
  children: React.ReactNode
  /** Arrow direction. 'left' puts a left-facing arrow on the LEFT side; 'right' puts a right-facing arrow on the RIGHT side. */
  direction?: 'left' | 'right'
  /** 'default' on light backgrounds; 'navy' on the dark prev/next navigation band. */
  tone?: 'default' | 'navy'
}

const Arrow = () => (
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
      <path d="M5 12h14M19 12l-6-6M19 12l-6 6" />
    </svg>
  </span>
)

/** Nav link with a positioned arrow. 'right' = arrow on the right side; 'left' = arrow on the left side. */
export default function BackLink({ to, children, direction = 'right', tone = 'default' }: BackLinkProps) {
  const cls = ['back-link']
  if (tone === 'navy') cls.push('back-link--navy')
  if (direction === 'left') cls.push('back-link--left')
  return (
    <Link to={to} className={cls.join(' ')}>
      {direction === 'left' ? <Arrow /> : null}
      {children}
      {direction === 'right' ? <Arrow /> : null}
    </Link>
  )
}
