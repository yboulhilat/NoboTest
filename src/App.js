import React from 'react';
import Header from './layouts/Header';
import Container from '@material-ui/core/Container';
import SearchMovies from './components/SearchMovies';
import MovieDetail from './components/DetailsMovie';
import Footer from './layouts/Footer';
import './styles/nobo.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class App extends React.Component {
 
  render() {
    return (
      <Container fixed>
      <Router>
          <Header/>
          <Switch>
          <Route exact path="/" render={props => <SearchMovies {...props} />}/>
          <Route path="/movieDetail" render={props => <MovieDetail {...props} />} />

        </Switch>
        <Footer />
      </Router>
      </Container>
    );
  }
}

export default App;

