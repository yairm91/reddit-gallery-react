import React from 'react';

class Image extends React.Component {

  render() {
    return (
        <a className="container" href={`//${this.props.image.post}`} target="_blank">
          <img className="image" src={this.props.image.url == "No Image"
                                                                ? "http://www.visible-image.com/wp-content/themes/white/assets/images/placeholder.jpg"
                                                                : this.props.image.url } />
          <div className="title">{this.props.image.title}</div>
        </a>
    );
  }
}

Image.propTypes = {
  image: React.PropTypes.object.isRequired,
};

export default Image;
