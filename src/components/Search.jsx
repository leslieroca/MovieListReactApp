class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button
          className="btn hidden-sm-down"
          onClick={() => this.props.onClick(this.state.value) }>
          Go!
        </button>
      </div> 
    )
  }
}
  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
