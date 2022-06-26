import React from 'react'
import loading from '../img/giphy.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
       <img style={{width:'5%'}} src={loading} alt="loading..." />
    </div>
  )
}

export default Spinner