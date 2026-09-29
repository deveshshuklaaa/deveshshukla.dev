export default function Badge({ children, variant = 'default', size = 'sm', className = '' }) {
  return (
    <span className={`badge badge--${variant} badge--${size} ${className}`}>
      {children}
    </span>
  )
}
