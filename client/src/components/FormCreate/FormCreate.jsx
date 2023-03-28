import React, { useState } from "react";
import { createVideoGame } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FormCreate.module.css";
import validation from "./validation";


const FormCreate = ({ visibleForm }) => {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);

  const [newGame, setNewGame] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
    created: true,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: "",
    platforms: "",
    genres: "",
  });

  const handleInputChange = (e) => {

    setErrors(
      validation({
        ...newGame,
        [e.target.name]: e.target.value
      })
    );

    setNewGame({
      ...newGame,
      [e.target.name]: e.target.value
    });
  };

  const handleGenres = (e) => {
    setErrors(validation({ ...newGame, genres: [...newGame.genres, e.target.value] }));
    setNewGame({ ...newGame, genres: [...newGame.genres, e.target.value] });

    newGame.genres.forEach( gen => {
      if (e.target.value === gen) {
        setErrors({
          genres:"Repeated genre, re-add only once"
        });
        deleteGenres(e);
      };
    });
  };

  const deleteGenres = (e) => {
    setNewGame({
      ...newGame,
      genres: newGame.genres.filter((gen) => gen !== e.target.value),
    });
  };

  const handlePlatforms = (e) => {
    setErrors(validation({ ...newGame, platforms: [...newGame.platforms, e.target.value] }));
    setNewGame({ ...newGame, platforms: [...newGame.platforms, e.target.value] });

    newGame.platforms.forEach( plat => {
      if (e.target.value === plat) {
        setErrors({
          platforms:"Repeated platform, re-add only once"
        });
        deletePlatforms(e);
      };
    });
  };

  const deletePlatforms = (e) => {
    setNewGame({
      ...newGame,
      platforms: newGame.platforms.filter((pla) => pla !== e.target.value),
    });
  };

  const disableForm = Object.values(errors).some((error) => error);

  const image = !errors.image ? newGame.image : null;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createVideoGame(newGame));
    visibleForm();
  }

  return (
    <div className={styles.form}>
      <button className={styles.button} onClick={() => visibleForm()}>
        Close
      </button>
      <br />
      <form onSubmit={submitHandler}>

        <div className={styles.inputContainer}>
          <label htmlFor='name' className={styles.formLabel}>Name: </label>
          <input
            className={styles.formField}
            type='text'
            onChange={handleInputChange}
            name='name'
            value={newGame.name}
            minLength='3'
            maxLength='100'
            placeholder="Game name, maximum 100 characters"
          />
          {errors.name && (
            <span className={styles.errorTxt}>{errors.name}</span>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor='description' className={styles.formLabel}>Description: </label>
          <textarea
            type='text'
            onChange={handleInputChange}
            name='description'
            value={newGame.description}
            minLength='10'
            maxLength='400'
            placeholder="Game description , maximum 400 characters"
          />
          {errors.description && (
            <span className={styles.errorTxt}>
              {errors.description}
            </span>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor='image' className={styles.formLabel}>Image URL: </label>
          <input
            className={styles.formField}
            type='url'
            onChange={handleInputChange}
            name='image'
            value={newGame.image}
            placeholder="https://..."
          />
          {errors.background_image && (
            <span className={styles.errorTxt}>{errors.image}</span>
          )}
        </div>
        <div className={styles.img}>
          {
            image ? <div>
              <img src={image} alt="" />
            </div> : null
          }
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor='released' className={styles.formLabel}>Released date: </label>
          <input
            type='date'
            onChange={handleInputChange}
            name='released'
            value={newGame.released}
            className={styles.formField}
          />
          {errors.released && <span className={styles.errorTxt}>{errors.released}</span>}
        </div>

        <div className={styles.inputContainer + " " + styles.inputRating}>
          <label htmlFor='rating' className={styles.formLabel}>Rating: </label>
          <input
            className={styles.formField + " " + styles.formNumber}
            type='number'
            id='rating'
            name='rating'
            min='1'
            max='5'
            onChange={handleInputChange}></input>
          {errors.rating && <span className={styles.errorTxt}>{errors.rating}</span>}
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.formLabel} htmlFor='platforms'>Platforms: </label>
          <select name='platforms' onChange={handlePlatforms} className={styles.select}>
            <option>Select</option>
            {platforms.map((pla, i) => (
              <option value={pla.name} key={i}>
                {pla.name}
              </option>
            ))}
          </select>
          {errors.platforms && <span className={styles.errorTxt}>{errors.platforms}</span>}
        </div>
        <div>
          {
            newGame.platforms?.map((pla, i) => {
              return (
                <span key={i} className={styles.genrePlatf}>{pla}<button type="button" value={pla} onClick={deletePlatforms} className={styles.btnx}>X</button></span>
              )
            })
          }
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.formLabel} htmlFor='genres'>Genres: </label>
          <select name='genres' onChange={handleGenres} className={styles.select}>
            <option>Select</option>
            {genres.map((gen, i) => (
              <option value={gen.name} key={i}>
                {gen.name}
              </option>
            ))}
          </select>
          {errors.genres && <span className={styles.errorTxt}>{errors.genres}</span>}
        </div>
        <div>
          {
            newGame.genres?.map((gen, i) => {
              return (
                <span key={i} className={styles.genrePlatf}>{gen}<button type="button" value={gen} onClick={deleteGenres} className={styles.btnx}>X</button></span>
              )
            })
          }
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btn} type='submit' disabled={disableForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCreate;
