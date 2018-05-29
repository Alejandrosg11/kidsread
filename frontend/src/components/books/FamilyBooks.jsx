import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css'

class FamilyBooks extends Component {

    state={
        books:JSON,
    }

    render(){
        return (
                <section className="secciones">
                <h3>Family Stories</h3>
                <div className="botones">
                <a target="_blank" href={this.state.books[0].book}> <img className="libro" src={this.state.books[0].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[1].book}> <img className="libro" src={this.state.books[1].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[2].book}> <img className="libro" src={this.state.books[2].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[4].book}> <img className="libro" src={this.state.books[4].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[5].book}> <img className="libro" src={this.state.books[5].portrait} alt="book" width="300px" height="300"/></a>
                </div>
                </section>
        )
    }

}


export default FamilyBooks