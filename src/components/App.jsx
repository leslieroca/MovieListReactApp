import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.movies = []
    this.query = "";

    this.state = {
      filteredMovies: this.movies,
    }
  }

  addMovie(title) {
    this.movies.push({title: title});
    this.filterMovies(this.query);
  }

  filterMovies(query) {
    const result = [];
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].title.indexOf(query) >= 0){
        result.push(this.movies[i]);
      }
    }
    this.query = query;
    this.setState( {filteredMovies: result} );
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-7">
            <h2> Movie List </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <AddMovie onClick={(title) => this.addMovie(title)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <Search onClick={(query) => this.filterMovies(query)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <MovieList movies={this.state.filteredMovies}/>
          </div>
        </div>
      </div>
    );
  }
};


  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
