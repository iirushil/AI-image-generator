import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../assets/assets'

const navbar = () => {
  return (
    <div>
      <Link to = '/'>
      <img src = {assets.logo} alt = "" className = 'w-28 sm:w-32 lg:w-40' />
      </Link>
      <div>
        <div>
          <button>
            <img src={assets.credit_star} alt = "" />
            <p>Credit Left : 5</p>
          </button>
          <p>hi , Rushil </p>
          <div>
            <img src = {assets.profile_icon} className='w-10 drop-shadow' alt = "" ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar
