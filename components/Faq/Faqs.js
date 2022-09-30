import React from 'react'
import axios from 'axios'


export async function getServerSideProps(context) {
    const res = await fetch(`https://dad-jokes.p.rapidapi.com/random/joke`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }
  

export default function Faqs({data}) {
    console.log({data})
  return (
    <div>
      
    </div>
  )
}
