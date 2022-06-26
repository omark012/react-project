import React, { useState } from 'react';
import CardItem from './CardItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const Card = ({ data }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  // Logic for displaying Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const currentPosts = data.slice(0, indexOfLastPost);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 10 more records in 1.5 secs
    console.log('fetching');
    setTimeout(() => {
      setCurrentPage((prevPage) => prevPage + 1);
    }, 1500);
  };

  return (
    <div className='container my-5'>
      <h2 className='text-center my-5'>Heading Space</h2>
      <InfiniteScroll
        dataLength={currentPosts.length}
        next={fetchMoreData}
        hasMore={currentPosts.length !== data.length}
        loader={<Spinner />}
      >
        <div className="container-fluid">
          <div className="row">
            {currentPosts.map((element) => {
              return (
                <div className="col-10 col-md-4" key={element.id}>
                  <CardItem id={element.id} launch_name={element.name} launch_date={element.static_fire_date_utc} flight_number={element.flight_number} details={element.details} imgUrl={element.links.patch.small} upcoming={element.upcoming} />
                </div>
              )
            }
            )}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Card