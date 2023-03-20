import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailById } from '../../redux/actions';

const Detail = () => {
  const { gameID } = useParams();


  const dispatch = useDispatch();
  const { id, name, description, released, rating, image, platforms, genres } = useSelector(
    (state) => state?.videogameDetail
  );

  useEffect(() => {
    dispatch(getDetailById(gameID));
  }, [dispatch]);

  return (
    <div>
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

      <Link to='/home' ><button>Back</button></Link>
    </div>
  )
};

export default Detail;