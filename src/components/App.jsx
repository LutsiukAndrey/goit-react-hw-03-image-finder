import React from 'react';
import { Component } from 'react';
import { Container } from './Container/Container';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    photo: '',
  };
  handleFormSubmit = photo => {
    this.setState({ photo });
  };
  render() {
    return (
      <div>
        <Container>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery photoQuery={this.state.photo} />
        </Container>
      </div>
    );
  }
}
