import React from 'react';
import './NavBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Form,
  NavItem,
  Button,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faBookOpen from '@fortawesome/fontawesome-free-solid/faBookOpen';
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import { logout } from '../../Service';
  


  class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          newUser: {}
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      onChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const {newUser} = this.state;
        newUser[field] = value;
        this.setState({newUser});
    }

    logoutUser = (e) => {
      e.preventDefault()
      logout(this.state.newUser)
      .then(user=>{
        window.location.reload();
          console.log (this.props.history)
                    
      })
      .catch(e=>{
        window.location.reload();
        console.log(e)
      });
  };

      render() {
        return (
          <div >
            <Navbar dark expand="md" className="alto">
              <NavbarBrand href="/" > <img className="logo" alt="KidsRead_logo" src="./assets/kidsreadlogo.png"/> </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem className="menu">
                    <NavLink href="/"><FontAwesomeIcon className="iconos" icon={faSearch} /><br/><div className="white">Browse</div></NavLink>
                  </NavItem>
                  <NavItem className="menu">
                    <NavLink href="/library"><FontAwesomeIcon className="iconos" icon={faBookOpen} /><br/><div className="white">Library</div></NavLink>
                  </NavItem>
                  <NavItem className="menu">
                    <NavLink href="/profile"><FontAwesomeIcon className="iconos" icon={faUserCircle} /><br/><div className="white">Profile</div></NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar className="menu">
                    <DropdownToggle nav caret>
                    <FontAwesomeIcon className="iconos" icon={faBars} /><br/>More
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                    Account Settings
                    </DropdownItem>
                    <DropdownItem>
                    Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <Form onSubmit={this.logoutUser}>                   
                      <Button type="submit"> Logout </Button>
                    </Form >
                    </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }
  
  export default NavBar