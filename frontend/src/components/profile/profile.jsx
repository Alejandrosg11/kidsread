import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import './profile.css';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Progress } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


class Profile extends Component {

    render() {
  
      return (
        <div className="fondo">
        <section><NavBar/></section>
        <section className="perfil">

            <Card body inverse className="tarjeta">
            <Row className="columnas">
                <Col xs="2"> <img src="./assets/avatar.png" alt=""/> </Col>
                <Col><div>
                <CardTitle className="black"><h2>Alex Santamaria</h2></CardTitle>
                <CardText className="black"><h5>Level 1 - Novice</h5></CardText>
                <Progress className="bar" animated color="info" value={50} />
            </div></Col>
            </Row>
            <hr/>
            <h2 className="black">Recently Read Books...</h2>
            </Card>

        </section>
        
        </div>
      );
    }
  }
  
  export default Profile;