import React from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
/// card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
///
import { API_TEST } from '../configs/api';

class SearchMovies extends React.Component {
   constructor(){
       super()
       this.state = {
           query: "",
           data: [],
           filteredData: []
       };
       this._detailsMovie = this._detailsMovie.bind(this)

   }
    
    UNSAFE_componentWillMount() {
        this.getMoviesData();
    }
    getMoviesData = () => {
        fetch(API_TEST).then((resp) => resp.json())
            .then(data => {
                // console.log('Movies fetch ====>', data)
                const { query } = this.state;
                const filteredData = data.filter(element => {
                    return element.show.name.toLowerCase().includes(query.toLowerCase());
                });
                this.setState({
                    data,
                    filteredData
                });
            })
       
    };
    handleInputChange = event => {
        const query = event.target.value;
        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                return element.show.name.toLowerCase().includes(query.toLowerCase());
            });
            return {
                query,
                filteredData
            };
        });
    };
    _detailsMovie = (movie) => {
        console.log(movie);
        this.props.dispatchMovies(movie);
        this.props.history.push('movieDetail')
    }
    
    render() {
        // console.log(this.state);
        const { query, filteredData } = this.state;
        var moviesList = [];
        for (let i = 0; i < filteredData.length; i++) {
            const data = filteredData[i];
            if (data.show.image !== null) {
                moviesList.push (
                    <Grid className='card' key={i}>
                        <Card className='card' >
                            <CardActionArea>
                                <CardMedia onClick={() => this._detailsMovie(data)}
                                    component="img"
                                    alt="Nobo"
                                    height="240"
                                    image={data.show.image.medium}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data.show.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            }
        }
       
        return (
 
            <div className='container'>
                <p className='hello'> Hello Nobo :-) </p>
                <Input
                    value={query}
                    onChange={this.handleInputChange}
                    placeholder="Search your movie..."
                    className='input'
                    inputProps={{
                        'aria-label': 'description', 
                    }}
                    
                />
                <div className='cardContainer' xs={12}>
                    {
                    query.length >= 1
                    ? moviesList
                    : null 
                    }
                </div>
                
            </div>

           
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchMovies: function (moviesList) {
            dispatch({ type: 'movies', movies: moviesList })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SearchMovies);
