import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import {blue300, indigo900} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};


const Single = ({movie}) => {
  return (
    <li className="col l4 s12">
      <Card>
        <CardMedia overlay={<CardTitle title={movie.title} subtitle={movie.release_date} />}>
          <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </CardMedia>
        <CardHeader
            title="More details"
            subtitle="Click on the arrow"
            actAsExpander
            showExpandableButton
            />
        <CardText expandable>
          <Chip
            backgroundColor={blue300}
           style={styles.chip}
           >
           <Avatar icon={<FontIcon className="material-icons">&#xE8D6;</FontIcon>} size={32} color={blue300} backgroundColor={indigo900} />
            Vote Average {movie.vote_average}
          </Chip>

          <br />
            <span className="movie_description">{movie.overview}</span>
        </CardText>
      </Card>
      <br/>
    </li>
  );
};

Single.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Single;
