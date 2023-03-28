import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filters.module.css";
import { orderByName, orderByRating, filterByGenre, filterByCreated, resetFilters } from "../../redux/actions"

const Filters = ({ visibleForm, firstPage }) => {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);

  const handleAlphabetic = (e) => {
    let value = e.target.value;
    dispatch(orderByName(value));
  };

  const handleRating = (e) => {
    let value = e.target.value;
    dispatch(orderByRating(value));
  };

  const handleGenres = (e) => {
    firstPage();
    let value = e.target.value;
    dispatch(filterByGenre(value));
  };

  const handleCreated = (e) => {
    firstPage();
    let value = e.target.value;
    dispatch(filterByCreated(value));
  }

  const handleReset = () => {
    dispatch(resetFilters());
    document.getElementById("OrderAlphabetic").value = "All";
    document.getElementById("OrderRating").value = "All";
    document.getElementById("FilterByGenres").value = "All";
    document.getElementById("FilterByCreated").value = "All";
  };

  return (
    <div className={styles.filters}>
      <div className={styles.titleFilter}>
        <label className={styles.label} htmlFor="orderAlphabetic">Order Alphabetic: </label>
        <select name='orderAlphabetic' onChange={handleAlphabetic} className={styles.select} id="OrderAlphabetic">
          <option value='All'>None</option>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
      </div >
      <div className={styles.titleFilter}>
        <label className={styles.label} htmlFor="orderRating">Order Rating: </label>
        <select name='orderRating' onChange={handleRating} className={styles.select} id="OrderRating">
          <option value='All'>None</option>
          <option value='5-0'>5-0</option>
          <option value='0-5'>0-5</option>
        </select>
      </div>
      <div className={styles.titleFilter}>
        <label className={styles.label} htmlFor="filterGenres">Filter by Genres: </label>
        <select name='filterGenres' onChange={handleGenres} className={styles.select} id="FilterByGenres">
          <option value='All'>All</option>
          {genres.map((gen) => (
            <option value={gen.name} key={gen.id}>
              {gen.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.titleFilter}>
        <label className={styles.label} htmlFor="filterCreated">Filter by Created: </label>
        <select name='filterCreated' onChange={handleCreated} className={styles.select} id="FilterByCreated">
          <option value='All'>All</option>
          <option value='created'>Created</option>
          <option value='notCreated'>Not Created</option>
        </select>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={handleReset}>Reset</button>
      </div>
      <br />
      <div className={styles.btnContainer}>
        <button className={`${styles.btn} ${styles.create}`} onClick={() => visibleForm()}>CREATE ✚</button>
      </div>
    </div>
  );
};

export default Filters;