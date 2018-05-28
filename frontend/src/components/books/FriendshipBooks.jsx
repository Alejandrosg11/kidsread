import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css'

class FriendshipBooks extends Component {

    state={
        books:JSON,
    }

    render(){
        return (
                <section className="secciones">
                <h3>Friendship Stories</h3>
                <a target="_blank" href={this.state.books[26].book}> <img className="libro" src={this.state.books[26].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[27].book}> <img className="libro" src={this.state.books[27].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[28].book}> <img className="libro" src={this.state.books[28].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[29].book}> <img className="libro" src={this.state.books[29].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[11].book}> <img className="libro" src={this.state.books[11].portrait} alt="book" width="300px" height="300"/></a>
                </section>
        )
    }

}


export default FriendshipBooks