import React from 'react'
import { useParams, useNavigate } from 'react-router'
import back from '../img/back.png'

const CardDetail = ({ data, rocketData }) => {

    const { launch_id } = useParams();
    const navigate = useNavigate();

    return (

        data.filter((element) => element.id === launch_id)
            .map((element) => {
                
                const { name, id, launch_date, flight_number, details, success, links, upcoming, rocket } = element;

                let rocketDetails = rocketData.filter((element) => element.id === rocket)
                    .map((element) => {
                        return (
                            {
                                rocket_name: element.name,
                                payload_weights: element.payload_weights,
                            }
                        )
                    });

                return (
                    <div key={id}>

                        <div className="card my-5 container w-50 p-3">

                            <iframe className="ratio ratio-21x9" width="1349" height="480" src={`https://www.youtube.com/embed/${links.youtube_id}`} frameBorder="0" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                    {upcoming ? 'Upcoming' : 'Past'}
                                </span></h5>
                                <h5 className="card-title text-center my-3">{name} <span className={`badge ${success ? 'bg-success' : 'bg-danger'}`}>{success ? 'Successful' : 'Not Successful'}</span></h5>
                                <p className="card-text ">{details ? details : 'No Details Available'}</p>
                                <p className="card-text mb-0"><small className="text-muted">{`Launch Date : ${launch_date ? launch_date : 'N/A'}`}</small></p>
                                <p className="card-text mb-0"><small className="text-muted">Flight Number: {flight_number}</small></p>
                                <p className="card-text"><small className="text-muted">Rocket Name: {rocketDetails[0].rocket_name}</small></p>
                                <div>
                                    <p>
                                        <button className="btn btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            Payload List
                                        </button>
                                    </p>
                                    <div className="collapse mb-3" id="collapseExample">
                                        <ol className="list-group list-group-numbered">
                                            {rocketDetails[0].payload_weights.map((element) => (
                                                <li key={element.id} className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">{element.name}</div>
                                                    </div>
                                                    <span className="badge bg-primary rounded-pill">{element.kg} Kg</span>
                                                </li>
                                            )
                                            )}
                                        </ol>
                                    </div>
                                </div>
                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <a href={links.wikipedia} target='_blank' rel="noreferrer" className="btn btn-secondary">Wikipedia</a>
                                    <a href={links.article} target='_blank' rel="noreferrer" className="btn btn-warning">Article</a>
                                </div>
                                <div className='text-center mt-5' onClick={() => navigate(-1)}>
                                    <img src={back} style={{ width: '9%', cursor: 'pointer' }} alt="< Back" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

    )
}

export default CardDetail