import React from 'react';
import './NavBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import FontAwesomeIcon from '@fortawesome/react-fontawesome'
  import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
  import faBookOpen from '@fortawesome/fontawesome-free-solid/faBookOpen'
  import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'
  import faBars from '@fortawesome/fontawesome-free-solid/faBars'

  class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
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
                    <NavLink href="/"><FontAwesomeIcon className="iconos" icon={faBookOpen} /><br/><div className="white">Library</div></NavLink>
                  </NavItem>
                  <NavItem className="menu">
                    <NavLink href="/"><FontAwesomeIcon className="iconos" icon={faUserCircle} /><br/><div className="white">Profile</div></NavLink>
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
                    Logout
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