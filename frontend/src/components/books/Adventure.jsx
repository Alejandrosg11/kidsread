import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css'
import { Button } from 'reactstrap';

class AdventureBooks extends Component {

    state={
        books:JSON,
    }

    render(){
        const userInfo = JSON.parse(localStorage.getItem("user"));
        console.log(userInfo);

        
        return (
                <section className="secciones">
                <h3>Adventure Stories</h3>
                <div className="botones">
                <a target="_blank" href={this.state.books[21].book}> <img className="libro" src={this.state.books[21].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[22].book}> <img className="libro" src={this.state.books[22].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[23].book}> <img className="libro" src={this.state.books[23].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[24].book}> <img className="libro" src={this.state.books[24].portrait} alt="book" width="300px" height="300"/></a>
                <a target="_blank" href={this.state.books[25].book}> <img className="libro" src={this.state.books[25].portrait} alt="book" width="300px" height="300"/></a>
                </div><br/>
                {/*<div className="botones"><Button color="danger">Add to Favorite</Button>{' '}<Button color="danger">Add to Favorite</Button>{' '}<Button color="danger">Add to Favorite</Button>{' '}<Button color="danger">Add to Favorite</Button>{' '}<Button color="danger">Add to Favorite</Button>{' '}</div>*/}
                </section>
        )
    }

}


export default AdventureBooks