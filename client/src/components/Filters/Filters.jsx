import { useDispatch, useSelector } from "react-redux";
import styles from "./Filters.module.css";
import { orderByName, orderByRating, filterByGenre, filterByCreated } from "../../redux/actions"

const Filters = () => {
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
    let value = e.target.value;
    dispatch(filterByGenre(value));
  };

  const handleCreated = (e) => {
    let value = e.target.value;
    dispatch(filterByCreated(value));
  }

  return (
    <div className={styles.selectors}>
      <div>
        <label className={styles.label} htmlFor="orderAlphabetic">Order Alphabetic: </label>
        <select name='orderAlphabetic' onChange={handleAlphabetic} className={styles.select}>
          <option value='All'>None</option>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
      </div>
      <div>
        <label className={styles.label} htmlFor="orderRating">Order Rating: </label>
        <select name='orderRating' onChange={handleRating} className={styles.select}>
          <option value='All'>None</option>
          <option value='5-0'>5-0</option>
          <option value='0-5'>0-5</option>
        </select>
      </div>
      <div>
        <label className={styles.label} htmlFor="filterGenres">Filter by Genres: </label>
        <select name='filterGenres' onChange={handleGenres} className={styles.select}>
          <option value='All'>All</option>
          {genres.map((gen) => (
            <option value={gen.name} key={gen.id}>
              {gen.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={styles.label} htmlFor="filterCreated">Filter by Created: </label>
        <select name='filterCreated' onChange={handleCreated} className={styles.select}>
          <option value='All'>All</option>
          <option value='created'>Created</option>
          <option value='notCreated'>Not Created</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;