var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map(movie =>
      <div><h5><em>{movie.title}</em></h5></div>
    )}
  </div>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default MovieList;


