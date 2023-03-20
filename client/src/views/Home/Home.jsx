import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getVideogames, getGenres, getPlatforms } from "../../redux/actions";

import Cards from "../../components/Cards/Cards";
import Filters from "../../components/Filters/Filters";
import FormCreate from "../../components/FormCreate/FormCreate";
import Pagination from "../../components/Pagination/Pagination";


const Home = () => {
  const games = useSelector((state) => state?.videosgamesFiltering);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const maxPages = Math.ceil(games.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Filters />
      <FormCreate />
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        maxPages={maxPages}
      />
      <Cards games={games}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        maxPages={maxPages}
      />
    </div>
  );
};

export default Home;