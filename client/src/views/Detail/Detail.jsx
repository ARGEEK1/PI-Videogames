import React from "react";
import { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailById, deleteGame } from "../../redux/actions";

import Loading from "../../components/Loading/Loading";

const Detail = () => {
  const { gameID } = useParams();
  const history = useHistory();

  const loading = useSelector((state) => state.onLoad);
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
    <div>
      {loading ?
        (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div>
              <h1>ID: {id}</h1>
            </div>
            <div>
              <h1>NAME: {name}</h1>
            </div>
            <div>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div>
              <h2>RELEASED: {released}</h2>
            </div>
            <div>
              <h2>RATING: {rating}</h2>
            </div>
            <div>
              <h2>PLATFORMS: </h2>
              {
                platforms?.map((plat, i) => {
                  return (
                    <p key={i}>{plat.name}</p>
                  )
                })
              }
            </div>
            <h2>GENRES:</h2>
            {
              genres?.map((gen, i) => {
                return (
                  <p key={i}>{gen.name}</p>
                )
              })
            }
            <div>
              <img src={image} alt={name} />
            </div>
            <div>
              {created ? <button onClick={() => deleteById(id)}>Delete</button> : null}
            </div>
            <br />
            <div>
              <Link to="/home" ><button>Back</button></Link>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Detail;