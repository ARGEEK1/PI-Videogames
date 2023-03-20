import React, { useState } from "react";
import { createVideoGame, addGame } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./FormCreate.module.css";
import validation from "./validation";


const FormCreate = () => {
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
  };

  const deletePlatforms = (e) => {
    setNewGame({
      ...newGame,
      platforms: newGame.platforms.filter((pla) => pla !== e.target.value),
    });
  };

  const disableForm = Object.values(errors).some((error) => error);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createVideoGame(newGame));
  }

  return (
    <div className={style.container}>
      <h1>CreateVideogame</h1>
      <form onSubmit={submitHandler}>

        <div className={style.inputContainer}>
          <label htmlFor='name' className={style.formLabel}>Name: </label>
          <input
            className={style.formField}
            type='text'
            onChange={handleInputChange}
            name='name'
            value={newGame.name}
            minLength='3'
            maxLength='20'
          />
          {errors.name && (
            <span className={`${style.spanDanger} ${style.spanDangerName}`}>{errors.name}</span>
          )}
        </div>

        <div className={style.inputContainer}>
          <label htmlFor='description' className={style.formLabel}>Description: </label>
          <textarea
            type='text'
            onChange={handleInputChange}
            name='description'
            value={newGame.description}
            minLength='10'
            maxLength='250'
          />
          {errors.description && (
            <span className={`${style.spanDanger} ${style.spanDangerDescription}`}>
              {errors.description}
            </span>
          )}
        </div>

        <div className={style.inputContainer}>
          <label htmlFor='image' className={style.formLabel}>Image URL: </label>
          <input
            className={style.formField}
            type='url'
            onChange={handleInputChange}
            name='image'
            value={newGame.image}
          />
          {errors.background_image && (
            <span className={style.spanDanger}>{errors.image}</span>
          )}
        </div>

        <div className={style.inputContainer}>
          <label htmlFor='released' className={style.formLabel}>Released date: </label>
          <input
            type='date'
            onChange={handleInputChange}
            name='released'
            value={newGame.released}
            className={style.formField}
          />
          {errors.released && <span className={style.spanDanger}>{errors.released}</span>}
        </div>

        <div className={style.inputContainer + " " + style.inputRating}>
          <label htmlFor='rating' className={style.formLabel}>Rating: </label>
          <input
            className={style.formField + " " + style.formNumber}
            type='number'
            id='rating'
            name='rating'
            min='1'
            max='5'
            onChange={handleInputChange}></input>
          {errors.rating && <span className={style.spanDanger}>{errors.rating}</span>}
        </div>

        <div className={style.inputContainer}>
          <label className={style.formLabel} htmlFor='platforms'>Platforms: </label>
          <select name='platforms' onChange={handlePlatforms} className={style.select}>
            <option>Select</option>
            {platforms.map((pla, i) => (
              <option value={pla.name} key={i}>
                {pla.name}
              </option>
            ))}
          </select>
          {errors.platforms && <span className={style.spanDanger}>{errors.platforms}</span>}
        </div>
        <div>
          {
            newGame.platforms?.map((pla, i) => {
              return (
                <span key={i} className={style.genrePlatf}>{pla}<button value={pla} onClick={deletePlatforms} className={style.btnx}>X</button></span>
              )
            })
          }
        </div>

        <div className={style.inputContainer}>
          <label className={style.formLabel} htmlFor='genres'>Genres: </label>
          <select name='genres' onChange={handleGenres} className={style.select}>
          <option>Select</option>
            {genres.map((gen, i) => (
              <option value={gen.name} key={i}>
                {gen.name}
              </option>
            ))}
          </select>
          {errors.genres && <span className={style.spanDanger}>{errors.genres}</span>}
        </div>
        <div>
          {
            newGame.genres?.map((gen, i) => {
              return (
                <span key={i} className={style.genrePlatf}>{gen}<button value={gen} onClick={deleteGenres} className={style.btnx}>X</button></span>
              )
            })
          }
        </div>

        <button type='submit' disabled={disableForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormCreate;