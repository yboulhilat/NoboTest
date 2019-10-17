import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const DetailsScreen = ({ movie }) => {
    if (movie === undefined) {
        return <Redirect to='/' />
    }
    return (
        <div>
            <p>{movie.name}</p>
            <img src={movie.image.medium} alt={'...'}/>
        </div>
    );
}

const mapStateToProps = state => ({
    movie : state.movies.show
});
export default connect(
    mapStateToProps,
    null
)(DetailsScreen);