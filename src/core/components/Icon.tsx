// components/NeumorphicIcon.js
const Icon = ({ icon, themeColor }) => {
  // Using DaisyUI's theme class names
  const bgColorClass = `bg-${themeColor}`

  return (
    <button className={`p-1 rounded-full ${bgColorClass} text-base-500 shadow-neumorphic`}>
      {/* Here the icon is inserted */}
      {icon}
    </button>
  )
}

export default Icon
