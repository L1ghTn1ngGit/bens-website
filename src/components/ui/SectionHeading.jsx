/**
 * SectionHeading Component
 * Consistent heading style for all sections
 * 
 * Props:
 * - title: Main heading text
 * - subtitle: Optional subtitle/description
 * - centered: Whether to center the text (default: true)
 * - className: Additional custom classes
 */

function SectionHeading({ 
  title, 
  subtitle, 
  centered = true, 
  className = '' 
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      
      {/* Decorative Line */}
      <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      
      {/* Subtitle if provided */}
      {subtitle && (
        <p className={`text-lg text-gray-600 ${centered ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
