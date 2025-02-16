import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavouriteClick() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{formatSimpleDate(movie.release_date)}</p>
      </div>
    </div>
  );
}

function formatSimpleDate(dateString) {
  const date = new Date(dateString);
  // Extract day, month, and year
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  // Return formatted date
  return `${day} ${month} ${year}`;
}

export default MovieCard;
