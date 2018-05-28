import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css'

class AdventureBooks extends Component {

    state={
        books:JSON,
    }

    render(){
        return (
                <section className="secciones">
                <h3>Recommended for ages 2-6</h3>
                <a target="_blank" href={this.state.books[21].book}> <img className="libro" src={this.state.books[21].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[22].book}> <img className="libro" src={this.state.books[22].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[23].book}> <img className="libro" src={this.state.books[23].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[24].book}> <img className="libro" src={this.state.books[24].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[25].book}> <img className="libro" src={this.state.books[25].portrait} alt="book" width="300px" height="300"/></a>
                </section>
        )
    }

}


export default AdventureBooks