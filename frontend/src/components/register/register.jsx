import React from 'react';
import './register.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, Form } from 'reactstrap';
import {login, signup} from '../../Service'


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          newUser: {}
        };
    
        this.toggle = this.toggle.bind(this);
      }

      state = {
        newUser:{}

    }

    componentWillMount(){
        if(localStorage.getItem('user')){
                this.props.history.push('/');
        }
    }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    onChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const {newUser} = this.state;
        newUser[field] = value;
        this.setState({newUser});
    }

    sendUser = (e) => {
        e.preventDefault()
        console.log(this.state.newUser)
        signup(this.state.newUser)
        .then(user=>{
            this.props.history.push('/')
        })
        .catch(e=>console.log(e))
    }

    loginUser = (e) => {
        e.preventDefault()
        login(this.state.newUser)
        .then(user=>{
            console.log (this.props.history)
            window.location.reload();
            this.props.history.push('/');
        })
        .catch(e=>console.log(e));
    };


    render() {
        return (
            <div className="auth">
            <section>
                <img src="./assets/kidsreadlogo.png" alt=""/>
            </section>
            <section>
            <Row >
            <Col sm="15">
              <Card body>
                <CardTitle className="black">Already a Member?</CardTitle>
                <CardText className="black">Log in to keep reading the new books that we have for you!</CardText>
                <Form onSubmit={this.loginUser}>                   
                            <InputGroup size="lg">
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input onChange={this.onChange} type="email" name="email" placeholder="e-mail" /><br/>
                            </InputGroup><br/>
                            <InputGroup size="lg">
                                <Input onChange={this.onChange} type="password" name="password" placeholder="password" /><br/>
                            </InputGroup>   <br/>                     
                            <Button color="success" type="Submit">Login</Button>
                    </Form>     <br/>
                

                <CardTitle className="black">New Here?</CardTitle>
                <CardText className="black">Have a free month trial and enjoy all of the books we have available for you!</CardText>
                <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}Signup</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="black" toggle={this.toggle}>Signup</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.sendUser}>
                            <InputGroup size="lg">
                                <Input onChange={this.onChange} type="text" name="name" placeholder="Name" /><br/>
                            </InputGroup>  <br/>                      
                            <InputGroup size="lg">
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input onChange={this.onChange} type="email" name="email" placeholder="e-mail" /><br/>
                            </InputGroup><br/>
                            <InputGroup size="lg">
                                <Input onChange={this.onChange} type="password" name="password" placeholder="password" /><br/>
                            </InputGroup>   <br/>                     
                            <InputGroup size="lg">
                                <Input onChange={this.onChange} type="Number" name="age" placeholder="Age" /><br/>
                            </InputGroup><br/>   
                            <Button onClick={this.toggle} color="success" type="Submit" >Signup</Button>         <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </Form>
                        </ModalBody>
                </Modal>    
              </Card>
            </Col>
          </Row>
          </section>
          </div>
        );
      }
    }

  export default Register;