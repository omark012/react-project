import React from 'react'
import loading from '../img/loading-load.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img style={{ width: '15%' }} src={loading} alt="loading..." />
    </div>
  )
}

export default Spinner