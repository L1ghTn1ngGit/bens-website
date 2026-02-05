/**
 * Button Component
 * A reusable button component with different style variants
 * 
 * Props:
 * - children: Button text/content
 * - variant: 'primary' | 'secondary' | 'accent' (default: 'primary')
 * - href: Optional link URL (renders as <a> if provided)
 * - onClick: Optional click handler
 * - className: Additional custom classes
 */

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
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg',
  }

  // Base styles shared by all buttons
  const baseStyles = `
    inline-flex items-center justify-center
    px-6 py-3 
    font-medium 
    transition-all duration-300
    cursor-pointer
    ${variants[variant]}
    ${className}
  `

  // If href is provided, render as a link
  if (href) {
    return (
      <a 
        href={href} 
        className={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
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

export default Button
