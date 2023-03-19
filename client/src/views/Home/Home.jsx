import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, getPlatforms } from "../../redux/actions";

import Cards from "../../components/Cards/Cards";
import Filters from "../../components/Filters/Filters";


const Home = () => {

  const games = useSelector((state) => state?.videosgamesFiltering);

  return (
    <div>
      <Filters />
      <Cards games={games} />
    </div>
  )
}

export default Home;