import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, getPlatforms } from "../../redux/actions";
import styles from "./Home.module.css"

import Cards from "../../components/Cards/Cards";
import Filters from "../../components/Filters/Filters";
import FormCreate from "../../components/FormCreate/FormCreate";
import Pagination from "../../components/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Loading from "../../components/Loading/Loading";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  const games = useSelector((state) => state.videosgamesFiltering);
  const loading = useSelector((state) => state.onLoad);

  const [currentPage, setCurrentPage] = useState(1);
  const [create, setCreate] = useState(false);

  const itemsPerPage = 15;
  const maxPages = Math.ceil(games.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const visibleForm = () => {
    setCreate(!create);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  return (
    <main className={styles.main}>
      <Banner />
      <Filters visibleForm={visibleForm} firstPage={firstPage} />
      {create ? <FormCreate visibleForm={visibleForm} /> : null}
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        maxPages={maxPages}
      />
      {
        loading ? <Loading /> :
          <Cards games={games}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
      }
      <Footer />
    </main>
  );
};

export default Home;