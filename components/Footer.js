import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footerMain'>
        <div className='footerContainer'>
            <div>Copyright © {new Date().getFullYear()} Village Networks Technologies</div>
            <div><a href='/terms'>Terms & Conditions</a></div>
        </div>
    </div>
  )
}

export default Footer
