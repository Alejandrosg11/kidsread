import React, {Component} from 'react';
import JSON from './books.json';
import './BookList.css';
import CultureBooks from './CultureBooks';
import YearBooks from './2YearBooks';
import AdventureBooks from './Adventure';
import FamilyBooks from './FamilyBooks';
import FriendshipBooks from './FriendshipBooks';
import ScienceBooks from './ScienceBooks';

class BookList extends Component {

    state={
        books:JSON,
    }

    render(){

        const list=[
            <CultureBooks/>,
            <YearBooks/>,
            <AdventureBooks/>,
            <FamilyBooks/>,
            <FriendshipBooks/>,
            <ScienceBooks/>  
        ]

        const lists=[]

        let selection = () => {
            if(lists.length < 3 ){
                lists.push(list[Math.floor(Math.random()*list.length)]);
            }
        }

        /*var selection = () => lists.push(list[Math.floor(Math.random()*list.length)]);*/
        selection();
        selection();
        selection();

        console.log(lists);        
        console.log(lists.length);
        return (
            <div><br/><hr/>
                {lists}
            </div>
        )
    }

}


export default BookList