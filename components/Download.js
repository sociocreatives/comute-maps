import React from 'react'
import Link from 'next/link'
import apple from '../public/apple.svg'
import google from '../public/google.svg'
import Image from 'next/image'

function Download() {
  return (
    <div className='downloads'>
      <div >
        <Link href="/">
            <Image
                src={google}
                alt="google"
                width={200}
                height={80}/>
        </Link>
      </div>
      <div>
      <Link href="/">
          <Image
              src={apple}
              alt="apple"
              width={200}
              height={80}/>

      </Link>
    </div>
    </div>
  )
}

export default Download
