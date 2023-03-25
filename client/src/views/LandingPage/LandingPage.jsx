import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getVideogames, getGenres, getPlatforms } from "../../redux/actions";

const LandingPage = () => {
  return (
    <div>
      <Loading />
      <h1>Video Games Page</h1>
      <div>Landing</div>
      <img src="" alt="" />
      <Link to="/home"><button >PRESS START</button></Link>
    </div>
  )
}

export default LandingPage;