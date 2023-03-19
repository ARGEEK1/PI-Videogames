import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVideogames, getGenres, getPlatforms } from "../../redux/actions";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div>
      <h1>Video Games Page</h1>
      <div>Landing</div>
      <img src="" alt="" />
      <Link to="/home"><button >PRESS START</button></Link>
    </div>
  )
}

export default LandingPage;