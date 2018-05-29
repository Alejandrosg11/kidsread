import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css'

class CultureBooks extends Component {

    state={
        books:JSON,
    }

    render(){
        return (

                <section className="secciones">
                <h3>Culture Stories</h3>
                <div className="botones">
                <a target="_blank" href={this.state.books[11].book}> <img className="libro" src={this.state.books[11].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[12].book}> <img className="libro" src={this.state.books[12].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[13].book}> <img className="libro" src={this.state.books[13].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[14].book}> <img className="libro" src={this.state.books[14].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[15].book}> <img className="libro" src={this.state.books[15].portrait} alt="book" width="300px" height="300"/></a>
                </div>
                </section>
        )
    }

}


export default CultureBooks