import React, { Component } from 'react';
import NavBar from '../../components/navbar/NavBar';
import './profile.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Progress } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import JSON2 from '../books/books.json';



class Profile extends Component {

  state={
    books:JSON2,
}

    render() {
      const userInfo = JSON.parse(localStorage.getItem("user"))
      console.log(userInfo.booksRead);

      return (
        <div className="fondo">
        <section><NavBar/></section>
        <section className="perfil">

            <Card body inverse className="tarjeta">
            <Row className="columnas">
                <Col xs="2"> <img src="./assets/avatar.png" alt=""/> </Col>
                <Col><div>
                <CardTitle className="black"><h2>{userInfo.name}</h2></CardTitle>
                <CardText className="black"><h5>Level {userInfo.level}</h5></CardText>
                <CardText className="black"><h5>Age {userInfo.age}</h5></CardText>
                <Progress className="bar" animated color="info" value={30} />
            </div></Col>
            </Row>
            
            <hr className="profhr"/>
            <h2 className="black">Books Read Recently...</h2>
            <div>
            <a target="_blank" href={this.state.books[0].book}> <img className="libro" src={this.state.books[0].portrait} alt="book" width="300px" height="300"/></a>
            <a target="_blank" href={this.state.books[7].book}> <img className="libro" src={this.state.books[7].portrait} alt="book" width="300px" height="300"/></a>
            <a target="_blank" href={this.state.books[14].book}> <img className="libro" src={this.state.books[14].portrait} alt="book" width="300px" height="300"/></a>
            <a target="_blank" href={this.state.books[25].book}> <img className="libro" src={this.state.books[25].portrait} alt="book" width="300px" height="300"/></a>
            <a target="_blank" href={this.state.books[18].book}> <img className="libro" src={this.state.books[18].portrait} alt="book" width="300px" height="300"/></a>
            </div>
            </Card>

        </section>
        
        </div>
      );
    }
  }
  
  export default Profile;