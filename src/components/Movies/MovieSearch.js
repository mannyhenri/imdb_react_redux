import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../../actions/movieActions';
import Single from './Single';
import Search from '../../api/searchMovies';


class MovieSearch extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  searchResults(movie, index) {
    return <Single key={index} movie={movie} />;
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    this.props.dispatch(movieActions.searchMovie(title));
    this.refs.searchMovie.reset();
  }

  render() {
    return (
      <div className="col l12">
        <div className="row" style={{paddingTop: '60px'}}>
        <form ref="searchMovie" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="Title of the movie"/>
          <input type="submit" hidden />
        </form>
        </div>
        <div className="row">
          <ul>
            {this.props.searchMovies.map(this.searchResults)}
          </ul>
        </div>
        <br/>
      </div>
    );
  }
}

MovieSearch.propTypes = {
  searchMovies: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    searchMovies: state.searchMovies
  };
}

export default connect(mapStateToProps)(MovieSearch);
