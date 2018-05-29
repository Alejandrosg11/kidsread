import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css'

class ScienceBooks extends Component {

    state={
        books:JSON,
    }

    render(){
        return (
                <section className="secciones">
                <h3>Science Stories</h3>
                <div className="botones">
                <a target="_blank" href={this.state.books[16].book}> <img className="libro" src={this.state.books[16].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[17].book}> <img className="libro" src={this.state.books[17].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[18].book}> <img className="libro" src={this.state.books[18].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[19].book}> <img className="libro" src={this.state.books[19].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[20].book}> <img className="libro" src={this.state.books[20].portrait} alt="book" width="300px" height="300"/></a>
                </div>
                </section>
        )
    }

}


export default ScienceBooks