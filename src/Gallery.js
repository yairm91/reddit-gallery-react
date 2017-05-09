import React from 'react';
import reddit from 'reddit.js';
import Image from './image';
import TextField from './TextField';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCallback = this.fetchCallback.bind(this);
    this.updatePics = this.updatePics.bind(this);
    this.state = {
      loading: true,
      items: [],
      subreddit: "cats",
    };
  }

  componentDidMount() {
    this.updatePics(this.state.subreddit);

  }

  updatePics(sub){
    window.reddit.hot(sub).limit(9).fetch(this.fetchCallback);
    return false;
  }

  fetchCallback(res) {
    if (res.data == null) {
      alert("Invalid Subreddit, try again!");
      return;
    }
    const items = res.data.children.map((post) => ({
      title: post.data.title,
      url: post.data.preview
            ? post.data.preview.images[0].source.url
            : "No Image",
      post: `www.reddit.com/${post.data.permalink}`,
    }));

    this.setState({
      loading: false,
      items,
    });
  }

  render() {
    return (
      <div className="gallery">
        <TextField
        updatePics={this.updatePics}
        />
        {this.state.loading
          ? <div class="loader">Loading...</div>
          : this.state.items.map(item => <Image image={item} />)
        }
      </div>
    );
  }
}

export default Gallery;
