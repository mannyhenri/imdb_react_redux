import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../../actions/movieActions';
import Single from './Single';


const MovieGrid = ({popMovies}) => {
  return (
    <div>
      <div className="row" style={{paddingTop: '60px'}}>
        <ul>
        {popMovies.map(movie =>
          <Single key={movie.id} movie={movie}/>
        )}
        </ul>
      </div>
    </div>
  );
};

MovieGrid.propTypes = {
  popMovies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    popMovies: state.popMovies
  };
}


export default connect(mapStateToProps)(MovieGrid);
