import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Header = () => {
  return (
    <AppBar title="IMDB Movies"
      className="blue lighten-2" showMenuIconButton={false}
      style={{position: 'fixed', top: '0px'}}
      iconElementRight={
       <IconMenu
         iconButtonElement={
           <IconButton><MoreVertIcon /></IconButton>
         }
         targetOrigin={{horizontal: 'right', vertical: 'top'}}
         anchorOrigin={{horizontal: 'right', vertical: 'top'}}
       >
          <Link to="/">
            <MenuItem primaryText="Popular Movies"/>
          </Link>
          <Link to="/movieSearch">
            <MenuItem primaryText="Search Movie" />
          </Link>
       </IconMenu>}/>
  );
};

export default Header;
