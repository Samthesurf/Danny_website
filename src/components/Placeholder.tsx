interface PlaceholderProps {
  variant: 'hero' | 'card' | 'wide' | 'square' | 'portrait' | 'avatar' | 'sm'
  label?: string
  style?: React.CSSProperties
  className?: string
}

/** Gradient photo placeholder used everywhere a real photo will land. */
export default function Placeholder({ variant, label, style, className }: PlaceholderProps) {
  const cls = ['placeholder', variant !== 'sm' ? `placeholder--${variant}` : 'placeholder--sm']
  if (className) cls.push(className)
  return (
    <div className={cls.join(' ')} style={style} aria-hidden="true">
      <svg
        className="ph-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"
          stroke="white"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="14" r="3.4" stroke="white" strokeWidth="1.4" />
      </svg>
      {label ? <span className="ph-label">{label}</span> : null}
    </div>
  )
}
