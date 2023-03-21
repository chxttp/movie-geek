import React from 'react';
import './MovieList.css';
import { useNavigate, Redirect, Navigate } from 'react-router-dom';



function MovieList(props) {
  const navigate = useNavigate();

  function MovieCLicked(){
    navigate('/MovieDetail')

    }
  const newMovies = [
    { id: 1, title: 'BLACK PANTER 2', description: 'Description of Movie A', imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg' },
    { id: 2, title: 'ANTMAN QUANTUMMANIA', description: 'Description of Movie B', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg' },
    {id: 3, title: 'TOP GUN', description: 'Description of Movie G', imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
    { id: 4, title: 'AVATAR 2', description: 'Description of Movie H', imageUrl: 'https://s359.kapook.com/pagebuilder/44c62352-5ba7-4bb7-a42c-0f37e652ffa6.jpg' },
    { id: 5, title: 'DITTO', description: 'Description of Movie I', imageUrl: 'https://asianwiki.com/images/6/61/Ditto_2022-p1.jpg' }
    
  ];

  const popularMovies = [
    { id: 1, title: 'TWENTY CENTURY GIRL', description: 'Description of Movie E', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4d/20th_Century_Girl.jpg' },
    { id: 2, title: 'NO TIME TO DIE', description: 'Description of Movie F', imageUrl: 'https://f.ptcdn.info/033/075/000/r0ejn0ghu02eeFg11ww-o.jpg' },
    { id: 3, title: 'THE GLORY', description: 'Description of Movie G', imageUrl: 'https://i.mydramalist.com/4v6zJ_4f.jpg' },
    { id: 4, title: 'JOHN WICK 4', description: 'Description of Movie H', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6aec1a106199299.5f8a325998dca.jpg' },
    { id: 5, title: 'INTERSTELLAR', description: 'Description of Movie I', imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg' }
  ];

  const oscarAwards = [
    { id: 1, title: 'THE WHALE', description: 'Description of Movie E', imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg' },
    { id: 2, title: 'EVERYTHING EVERYWHERE', description: 'Description of Movie F', imageUrl: 'https://i.ebayimg.com/images/g/X~MAAOSwIfJiR4-N/s-l1600.jpg' },
    { id: 3, title: 'ALL QUIET ON WESTERN FRONT', description: 'Description of Movie G', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UX1000_.jpg' },
    { id: 4, title: 'TOP GUN', description: 'Description of Movie H', imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
    { id: 5, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg' }
  ];

  let moviesToDisplay = [];

  if (props.listType === 'new') {
    moviesToDisplay = newMovies;
  } else if (props.listType === 'popular') {
    moviesToDisplay = popularMovies;
  } else if (props.listType === 'oscar') {
    moviesToDisplay = oscarAwards;
  } 

  return (
    <div className='movie-list-container'>
      <div className='movie-list'>
        <div className='movie-list-title'>
          {props.listType === 'new' && 'NEW ON MOVIEGEEK'}
          {props.listType === 'popular' && 'POPULAR ON MOVIEGEEK'}
          {props.listType === 'oscar' && 'OSCAR WINNING 2023'}
          <div className='movie-list-more'>MORE</div>
        </div>
        <div className='movie-card-container'>
          {moviesToDisplay.map(movie => (
            <div className='movie-card' key={movie.id}>
              <img src={movie.imageUrl} alt={movie.title} onClick = {MovieCLicked}/>
              <div className='title'>{movie.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


  
  

  
          }
    export default MovieList
      