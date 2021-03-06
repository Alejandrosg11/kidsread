import React, { Component } from 'react';
import NavBar from '../../components/navbar/NavBar';
import Carousel from '../../components/carousel/carousel';
import BookList from '../../components/books/BookList';

class Main extends Component {

    render() {
  
      return (
        <div className="fondo">
        
        <NavBar/>
        <Carousel/>
        <BookList/>
  
        </div>
      );
    }
  }
  
  export default Main;