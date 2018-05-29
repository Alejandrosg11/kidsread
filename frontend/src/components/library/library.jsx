import React, { Component } from 'react';
import NavBar from '../../components/navbar/NavBar';
import './library.css'
import { Card, CardTitle, CardText } from 'reactstrap';
import JSON2 from '../books/books.json';



class Library extends Component {

  state={
    books:JSON2,
}

    render() {
  
      return (
        <div className="fondo">        
        <section><NavBar/></section>
        <section className="library">

            <Card body inverse className="tarjeta tarjetaLib">
                <div>
                <CardTitle className="black"><h2>My Library</h2></CardTitle>
                <CardText className="black"><h5>Favorite Books</h5></CardText>
            </div>
            <hr/>
            <div>
            <a target="_blank" href={this.state.books[21].book}> <img className="libro" src={this.state.books[21].portrait} alt="book" width="300px" height="300"/></a>
            <a target="_blank" href={this.state.books[11].book}> <img className="libro" src={this.state.books[11].portrait} alt="book" width="300px" height="300"/></a>
            <a target="_blank" href={this.state.books[9].book}> <img className="libro" src={this.state.books[9].portrait} alt="book" width="300px" height="300"/></a>
            <a target="_blank" href={this.state.books[8].book}> <img className="libro" src={this.state.books[8].portrait} alt="book" width="300px" height="300"/></a>
            <a target="_blank" href={this.state.books[19].book}> <img className="libro" src={this.state.books[19].portrait} alt="book" width="300px" height="300"/></a>
            </div>
            </Card>
            
        </section>
        
        </div>
      );
    }
  }
  
  export default Library;