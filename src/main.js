
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Gallery imageUrls={urls}/>,
    document.getElementById('mount')
  );
});


import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import reddit from 'reddit.js';

let urls = [
  'http://img14.deviantart.net/109c/i/2015/024/8/c/deadpool_by_wizyakuza-d8f5rpo.jpg',
  'https://www.google.co.il/imgres?imgurl=http%3A%2F%2Fnerdist.com%2Fwp-content%2Fuploads%2F2016%2F04%2Fdeadpool-2-featured-image.jpg&imgrefurl=http%3A%2F%2Fnerdist.com%2Fnew-deadpool-2-cable-and-domino-details-revealed%2F&docid=Rfgx8rYw0ekS0M&tbnid=yGqZ2trPIAqqdM%3A&vet=10ahUKEwiRhNPfu97TAhURZlAKHeJDCgYQMwgkKAEwAQ..i&w=970&h=545&bih=676&biw=1280&q=deadpool%20image&ved=0ahUKEwiRhNPfu97TAhURZlAKHeJDCgYQMwgkKAEwAQ&iact=mrc&uact=8',
  'https://www.google.co.il/imgres?imgurl=http%3A%2F%2Fwww.deadpoolcore.com%2Fassets%2Fimages%2Fimage-deadpool.png&imgrefurl=http%3A%2F%2Fwww.deadpoolcore.com%2F&docid=mhHnu24NVcxHaM&tbnid=BAm9KgAEJPCc1M%3A&vet=10ahUKEwiRhNPfu97TAhURZlAKHeJDCgYQMwgxKA4wDg..i&w=1046&h=1114&bih=676&biw=1280&q=deadpool%20image&ved=0ahUKEwiRhNPfu97TAhURZlAKHeJDCgYQMwgxKA4wDg&iact=mrc&uact=8',
];


// Fetch the 6 hottest posts on /r/awww
window.reddit.hot('aww').limit(6).fetch((res) => {
    // posts = res.data.children;

    console.log(this);



});


// const imageURLS = posts.map((post) => {
//   return {
//   title:post.data.title,
//   imgUrl:post.data.url,
//   postUrl:`www.reddit.com/${post.data.permalink}`

// }
// });







