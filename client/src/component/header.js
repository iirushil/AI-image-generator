import React from 'react'

const header = () => {
  return (
    <div className = 'flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border hover scale:105'>
      <p>Best Transform words into Art </p>
      <img src = {assets.start_icon} alt = "" />
      </div>
      <h1 className=''></h1>
    </div>
  )
}

export default header
