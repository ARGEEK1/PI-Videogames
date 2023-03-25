import React from "react";
import { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailById, deleteGame } from "../../redux/actions";
import styles from "./Detail.module.css";


const Detail = () => {
  const { gameID } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const { id, name, description, released, rating, image, platforms, genres, created } = useSelector(
    (state) => state?.videogameDetail
  );

  useEffect(() => {
    dispatch(getDetailById(gameID));
  }, [dispatch]);

  const deleteById = (id) => {
    dispatch(deleteGame(id));
    history.push("/home");
  };

  return (
    <div className={styles.mainDetail}>

      <div className={styles.containerDetail}>
        {/* <h1>ID: {id}</h1> */}
        <div className={styles.title}>
          <h1>{name}</h1>
        </div>

        <div className={styles.gameAbout}>
          <h2>About</h2>
          <div className={styles.about}>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>

        <div className={styles.infoDetail}>

          <div>
            <h2>Platforms </h2>
            {
              platforms?.map((plat, i) => {
                return (
                  <p key={i}>{plat.name}</p>
                )
              })
            }
          </div>

          <div>
            <h2>Genres </h2>
            {
              genres?.map((gen, i) => {
                return (
                  <p key={i}>{gen.name}</p>
                )
              })
            }
          </div>

          <div>
            <h2>Released</h2>
            <p>{released}</p>
          </div>

          <div>
            <h2>Rating</h2>
            <p>{rating}</p>
          </div>

          {created ? <div className={styles.btnContainer}> <button className={`${styles.btn} ${styles.create}`} onClick={() => deleteById(id)}>Delete</button> </div> : null}

          <br />
          <div className={styles.btnContainer}>
            <Link to="/home" ><button className={styles.btn}>Back</button></Link>
          </div>

        </div>

      </div>

      <div className={styles.imageContainer}>
        <img className={styles.imgDetail} src={image} alt={name} />
      </div>
    </div>
  );
};

export default Detail;