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
const API = 'http://gateway.marvel.com/v1/public/characters?apikey=9017949d28693c6128932224d13271c5'
class App extends React.Component {
  componentWillMount(){
    fetch(API).then((resp) => resp.json())
      .then(data => {
        console.log('Movies fetch ====>', data)
      })
  }
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

