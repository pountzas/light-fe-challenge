import React from 'react'

function Bell({ stroke }) {
  const strokeColor = stroke || 'black'
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.15315 14.0001C9.03594 14.2021 8.86771 14.3699 8.6653 14.4865C8.46289 14.603 8.2334 14.6644 7.99982 14.6644C7.76623 14.6644 7.53674 14.603 7.33433 14.4865C7.13192 14.3699 6.96369 14.2021 6.84648 14.0001M12 5.3335C12 4.27263 11.5786 3.25521 10.8284 2.50507C10.0783 1.75492 9.06087 1.3335 8 1.3335C6.93913 1.3335 5.92172 1.75492 5.17157 2.50507C4.42143 3.25521 4 4.27263 4 5.3335C4 10.0002 2 11.3335 2 11.3335H14C14 11.3335 12 10.0002 12 5.3335Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default Bell