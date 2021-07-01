import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, Person, RateReview, Timeline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
});

export default function MenuBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
      <BottomNavigationAction label="Advice" icon={<RateReview />} component={Link} to="/advice" />
      <BottomNavigationAction label="Statistics" icon={<Timeline />} component={Link} to="/more" />
      <BottomNavigationAction label="Profile" icon={<Person />} component={Link} to="/profile" />
    </BottomNavigation>
  );
}
