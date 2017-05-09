import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Gallery />,
    document.getElementById('mount')
  );
});
