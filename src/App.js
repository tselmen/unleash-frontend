import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Advice from './pages/Advice';
import Statistics from './pages/More';
import Profile from './pages/Profile';
import MenuBar from './components/MenuBar';
import { AppBar, Toolbar, Typography, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    alignItems: 'center',
    boxShadow: 'none',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <AppBar position="absolute" className={classes.appBar} color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AirBit
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/advice" component={Advice} />
          <Route exact path="/more" component={Statistics} />
          <Route exact path="/profile" component={Profile} />
        </Container>
      </main>
      <MenuBar />
    </Router>
  );
}

export default App;
