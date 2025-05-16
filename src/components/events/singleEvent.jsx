import React from 'react'
import Image from "next/image";

const SingleEvent = ({data}) => {
  return (
    <div className='single_event'>
      <h2>{data.title}</h2>
      <Image className='single_event_img'src={data.image} alt={data.title} width={1000} height={500}></Image>
      <p>{data.description}</p>
      <div>
      <input type="email" name="email" id="" /> <button>Submit</button>
      </div>

    </div>
  )
}

export default SingleEvent
