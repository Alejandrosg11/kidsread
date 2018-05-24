import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css'

class BookList extends Component {

    state={
        books:JSON,
    }
    
    render(){
        console.log()
        return (
            <div><br/><hr/>
                <section className="secciones">
                <h3>Family Stories</h3>
                <a href={this.state.books[0].book}> <img className="libro" src={this.state.books[0].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[1].book}> <img className="libro" src={this.state.books[1].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[2].book}> <img className="libro" src={this.state.books[2].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[4].book}> <img className="libro" src={this.state.books[4].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[5].book}> <img className="libro" src={this.state.books[5].portrait} alt="book" width="300px" height="300"/></a>
                </section>
                <section className="secciones">
                <h3>Recommended for ages 2-6</h3>
                <a href={this.state.books[6].book}> <img className="libro" src={this.state.books[6].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[7].book}> <img className="libro" src={this.state.books[7].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[8].book}> <img className="libro" src={this.state.books[8].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[9].book}> <img className="libro" src={this.state.books[9].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[10].book}> <img className="libro" src={this.state.books[10].portrait} alt="book" width="300px" height="300"/></a>
                </section>                
                <section className="secciones">
                <h3>Culture Stories</h3>
                <a href={this.state.books[11].book}> <img className="libro" src={this.state.books[11].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[12].book}> <img className="libro" src={this.state.books[12].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[13].book}> <img className="libro" src={this.state.books[13].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[14].book}> <img className="libro" src={this.state.books[14].portrait} alt="book" width="300px" height="300"/></a>
                <a href={this.state.books[15].book}> <img className="libro" src={this.state.books[15].portrait} alt="book" width="300px" height="300"/></a>
                </section>                  
            </div>
        )
    }

}


export default BookList