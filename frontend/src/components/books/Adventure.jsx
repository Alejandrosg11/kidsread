import React, {Component} from 'react';
import JSON2 from './books.json';
import './BookList.css'

class AdventureBooks extends Component {

    state={
        books:JSON2,
    }

    render(){
        const b21 = <a target="_blank" href={this.state.books[21].book}> <img className="libro" src={this.state.books[21].portrait} alt="book" width="300px" height="300"/></a>
        const b22 = <a target="_blank" href={this.state.books[22].book}> <img className="libro" src={this.state.books[22].portrait} alt="book" width="300px" height="300"/></a>
        const b23 = <a target="_blank" href={this.state.books[23].book}> <img className="libro" src={this.state.books[23].portrait} alt="book" width="300px" height="300"/></a>
        const b24 = <a target="_blank" href={this.state.books[24].book}> <img className="libro" src={this.state.books[24].portrait} alt="book" width="300px" height="300"/></a>
        const b25 = <a target="_blank" href={this.state.books[25].book}> <img className="libro" src={this.state.books[25].portrait} alt="book" width="300px" height="300"/></a>
        
        console.log(JSON.parse(localStorage.getItem("user")).booksRead);

        return (
                <section className="secciones">
                <h3>Adventure Stories</h3>
                <div className="botones">
                
                <div onClick={JSON.parse(localStorage.getItem("user")).booksRead.push("{this.state.books[21].portrait}")}>{b21}</div>
                
                
                {b22}{b23}{b24}{b25}
                </div><br/>
                {/*<div className="botones"><Button color="danger">Add to Favorite</Button>{' '}<Button color="danger">Add to Favorite</Button>{' '}<Button color="danger">Add to Favorite</Button>{' '}<Button color="danger">Add to Favorite</Button>{' '}<Button color="danger">Add to Favorite</Button>{' '}</div>*/}
                </section>
        )
    }

}


export default AdventureBooks