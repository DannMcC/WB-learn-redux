import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div classNamr="photo-grid">
                {this.props.posts.map((post, i) => <Photo {...this.props} />)}
            </div>

        )
    }
});

 export default PhotoGrid
