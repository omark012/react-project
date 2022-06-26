import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../img/logo.png'


const CardItem = ({ id, launch_name, launch_date, flight_number, details, imgUrl, upcoming }) => {

  const navigate = useNavigate();

  return (
    <>
      <div className="card my-4 p-2" style={{ width: "18rem", cursor: 'pointer' }} onClick={() => navigate(`/launch/${id}`)}>
        <img src={imgUrl ? imgUrl : logo} className="card-img-top" alt="Image Here" />
        <div className="card-body">
          <h5 className="card-title">{launch_name} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {upcoming ? 'Upcoming' : 'Past'}
          </span>
          </h5>
          <p className="card-text">{details ? `${details.slice(0, 80)}...` : 'No Details Available'}</p>
          <p className='card-text extra-details mb-1'>{`Launch Date : ${launch_date ? launch_date : 'N/A'}`}</p>
          <p className='card-text extra-details'>Flight Number : {flight_number}</p>
        </div>
      </div>

    </>
  )
}

export default CardItem