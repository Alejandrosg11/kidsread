import React, {Component} from 'react';
import { getBooks } from '../../Service';
import {BookList} from '../books/BookList'

class FamilyBooks extends Component{
    
    state = {
        title: []
    };

    componentWillMount(){
        this.getBooks()
        }

        render(){
        console.log(this.state.movies);
        return(
            <div>
                <BookList books={this.state.books} />
            </div>
        );
    }
};

export default FamilyBooks