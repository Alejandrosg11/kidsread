import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import './library.css'
import { Card, Button, CardTitle, CardText } from 'reactstrap';


class Library extends Component {

    render() {
  
      return (
        <div className="fondo">        
        <section><NavBar/></section>
        <section className="library">

            <Card body inverse className="tarjeta tarjetaLib">
                <div>
                <CardTitle className="black"><h2>My Library</h2></CardTitle>
                <CardText className="black"><h5>Favorite Books</h5></CardText>
            </div>
            <hr/>
            </Card>
            
        </section>
        
        </div>
      );
    }
  }
  
  export default Library;