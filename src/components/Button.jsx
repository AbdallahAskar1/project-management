import React from 'react'

function Button({children, ...props}) {
  return (
    <button className="px-4 py-2 text-xs md:text-base bg-stone-700 hover:bg-stone-600 rounded text-stone-400" {...props}>
    {children}
  </button>
  )
}

export default Button