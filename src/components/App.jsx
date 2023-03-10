import React from 'react';
import { Component } from 'react';
import { Container } from './Container/Container';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';

export class App extends Component {
  state = {
    page: 1,
    photo: '',
  };
  handleFormSubmit = photo => {
    this.setState({ photo });
  };
  // pagination = () => {
  //   this.setState(prevState => {
  //     console.log(this.state.page);
  //     return {
  //       page: prevState.page + 1,
  //     };
  //   });
  // };
  render() {
    return (
      <div>
        <Container>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery
            photoQuery={this.state.photo}
            // PaginatinPage={this.state.page}
          />
          {/* <Button onClick={this.pagination} /> */}
        </Container>
      </div>
    );
  }
}
