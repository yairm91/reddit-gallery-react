import React from 'react';
import reddit from 'reddit.js';
import Image from './image';
import TextField from './TextField';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCallback = this.fetchCallback.bind(this);
    this.setSubreddit = this.setSubreddit.bind(this);
    this.state = {
      loading: true,
      items: [],
      subreddit: "pics",
    };
  }

  componentWillMount() {
    window.reddit.hot(this.state.subreddit).limit(8).fetch(this.fetchCallback);

  }
  setSubreddit(text) {
    this.setState({
      subreddit: text,
    })
  }
  fetchCallback(res) {
    const items = res.data.children.map((post) => ({
      title: post.data.title,
      url: post.data.preview.images[0].source.url,
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
        <TextField/>
        {this.state.loading
          ? <div class="loader">Loading...</div>
          : this.state.items.map(item => <Image image={item} />)
        }
      </div>
    );
  }
}

export default Gallery;