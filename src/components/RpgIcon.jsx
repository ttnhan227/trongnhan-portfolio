export default function RpgIcon({ id, size = 32, alt = '', className = '' }) {
  // Use the exact icon path from the downloaded assets folder
  const iconPath = `/images/assets/icons/32x32/${id}.png`
  
  return (
    <img
      src={iconPath}
      alt={alt}
      width={size}
      height={size}
      className={`rpg-pixel-icon ${className}`}
      loading="lazy"
    />
  )
}
