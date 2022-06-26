import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setCategory }) => {


  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to='/' onClick={() => setCategory('')} className="navbar-brand">SpaceX</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={() => setCategory('')}>
              <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item" onClick={() => setCategory('upcoming')}>
              <Link to='/upcoming' className="nav-link">Upcoming</Link>
            </li>
            <li className="nav-item" onClick={() => setCategory('past')}>
              <Link to='/past' className="nav-link">Past</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar