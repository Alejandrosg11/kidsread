import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css';
import { Button } from 'reactstrap';

class YearBooks extends Component {

    state={
        books:JSON,
    }

    render(){
        return (
                <section className="secciones">
                <h3>Recommended for ages 2-6</h3>
                <div className="botones">
                <a target="_blank" href={this.state.books[6].book}> <img className="libro" src={this.state.books[6].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[7].book}> <img className="libro" src={this.state.books[7].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[8].book}> <img className="libro" src={this.state.books[8].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[9].book}> <img className="libro" src={this.state.books[9].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[10].book}> <img className="libro" src={this.state.books[10].portrait} alt="book" width="300px" height="300"/></a>
                </div>
                </section>
        )
    }

}


export default YearBooks