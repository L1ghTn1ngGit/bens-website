/**
 * Button Component
 * A reusable button component with different style variants
 * Performance optimized with React.memo
 * 
 * Props:
 * - children: Button text/content
 * - variant: 'primary' | 'secondary' | 'accent' (default: 'primary')
 * - href: Optional link URL (renders as <a> if provided)
 * - onClick: Optional click handler
 * - className: Additional custom classes
 */

import { memo } from 'react'

function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  ...props 
}) {
  // Define styles for each variant
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
  }

  // Base styles shared by all buttons
  const baseStyles = `
    inline-flex items-center justify-center
    px-6 py-3 rounded-lg
    font-medium text-sm
    transition-all duration-200
    active:scale-95
    cursor-pointer
    ${variants[variant]}
    ${className}
  `

  // If href is provided, render as a link
  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a 
        href={href} 
        className={baseStyles}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  // Otherwise render as a button
  return (
    <button 
      onClick={onClick} 
      className={baseStyles}
      {...props}
    >
      {children}
    </button>
  )
}

export default memo(Button)
