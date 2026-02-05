/**
 * Card Component
 * A reusable card container with consistent styling
 * 
 * Props:
 * - children: Card content
 * - className: Additional custom classes
 * - hoverable: Whether card has hover effect (default: true)
 */

function Card({ 
  children, 
  className = '', 
  hoverable = true 
}) {
  return (
    <div 
      className={`
        bg-white 
        p-6 
        shadow-md 
        border border-gray-100
        transition-all duration-300
        ${hoverable ? 'hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card
