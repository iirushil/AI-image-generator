import React from 'react'

const header = () => {
  return (
    <div className = 'flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border hover scale:105'>
      <p>Best Transform words into Art </p>
      <img src = {assets.start_icon} alt = "" />
      </div>
      <h1 className='text-4x1 max-w-[300px] sm:text-6x1 sm:max-w-[590px] mx-auto mt-10 text-center'>Transform words into<span className='text-red-600 font-bold'>Art</span> in seconds.</h1>
      <p>unleash boundless creativity with AI- Turn your thoughts into stunning visual art instantly . Just type , and watch the magic unfold.</p>
      <button>Generate</button>
    </div>
  )
}

export default header
