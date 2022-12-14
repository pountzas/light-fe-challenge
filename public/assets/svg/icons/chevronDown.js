import React from 'react'

function ChevronDown({ stroke }) {
  const strokeColor = stroke || 'white'
  return (
    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66663 1L5.66663 5L9.66663 1" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export default ChevronDown