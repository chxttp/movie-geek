import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaHeart } from "react-icons/fa";
import {MdOutlinePlaylistAddCircle} from "react-icons/md";
import {BsEye} from "react-icons/bs";
import "./MovieDetail.css";
import { color } from "@mui/system";
// import MyVideo from "https://youtu.be/RlOB3UALvrQ"

function MovieDetail() {
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleLikeClick = () => {

  };

  const castClicked = () => {
    document.getElementById("cast").innerHTML = "Letitia Wright, Lupita Nyong, Danai Gurira, Winston Duke, Florence Kasumba Dominique, Thorne Michaela, Coel Mabel, Cadena Tenoch, Huerta Mejía, Martin Freema, Julia Louis-Dreyfus, Angela Bassett";
    
  };

  return (
    <div className="movie-detail">
      <Navbar />
      <div>
        <div className="detail-container">
          <div className="right-column">
            <img src="https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg" />
            <div className="rating">
              <p>Rate this movie: &nbsp;</p>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    onClick={() => handleRatingChange(num)}
                    className={num <= rating ? "active" : ""}
                  >
                    &#9733;
                  </span>
                ))}
                <div className="like-button">
                    <p>Like this movie ?</p>
                    <br />
                <BsEye className="eyes"/>
              <FaHeart onClick={handleLikeClick} className ="heart"/>
              <MdOutlinePlaylistAddCircle className="watchlist"/>
             

              </div>
              </div>
              
              
            </div>
            
          </div>
          <div className="left-column">
            <h4>
              Black Panther: Wakanda Forever &nbsp; &nbsp; Directed by Ryan
              Coogler
            </h4>
            <br />
            <p>
              The people of Wakanda fight to protect their home from intervening
              world powers as they mourn the death of King T'Challa. In Marvel
              Studios' "Black Panther: Wakanda Forever," Queen Ramonda (Angela
              Bassett), Shuri (Letitia Wright), M'Baku (Winston Duke), Okoye
              (Danai Gurira) and the Dora Milaje (including Florence Kasumba)
              fight to protect their nation from intervening world powers in the
              wake of King T'Challa's death. As the Wakandans strive to embrace
              their next chapter, the heroes must band together with the help of
              War Dog Nakia (Lupita Nyong'o) and Everett Ross (Martin Freeman)
              and forge a new path for the kingdom of Wakanda.
            </p>

            <div>
              {/* <video src = {MyVideo} controls width="640" height="360"/> */}
            </div>
            <div className="menu">
              <button onClick={castClicked}>Cast</button>
              <button onClick={() => console.log("Crew clicked")}>Crew</button>
              <button onClick={() => console.log("Details clicked")}>
                Details
              </button>
              <button onClick={() => console.log("Genres clicked")}>
                Genres
              </button>
            </div>
            <div className="cast">
            <p id = "cast" ></p>
            </div>
            
            <div className="popular-reviews">
                <div className="popular">
                    POPULAR REVIEWS
                </div>
                <div className="more">
                    MORE
                </div>
                

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
