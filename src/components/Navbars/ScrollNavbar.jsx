import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class ScrollNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-scroll"));
    // initialise
    headroom.init();
  }
  scrollPage = (e, id) => {
    e.preventDefault();
    if (document.getElementById(id) !== null) {
      document.getElementById(id).scrollIntoView();
    }
  };
  render() {
    return (
      <>
        <Navbar className="fixed-top bg-info" expand="lg" id="navbar-scroll">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/index" tag={Link} id="tooltip1995010466">
                <span>Easy</span> Bank
              </NavbarBrand>
              <UncontrolledTooltip delay={0} target="tooltip1995010466">
                Gerim e Isa
              </UncontrolledTooltip>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Easy <span>Bank</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i className="fa fa-cogs d-lg-none d-xl-none" />
                    Saiba mais
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons">
                    <DropdownItem to="/index" tag={Link}>
                      <i className="tim-icons icon-settings" />
                      Inicio
                    </DropdownItem>
                    <DropdownItem to="/sections#features" tag={Link}>
                      <i className="tim-icons icon-paper" />
                      Documentacao
                    </DropdownItem>
                    <DropdownItem to="/sections#pricing" tag={Link}>
                      <i className="tim-icons icon-money-coins" />
                      Preços
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                  <Button
                    className="nav-link"
                    color="default"
                    href="/login-page"
                    size="sm"
                  >
                    <p>Login</p>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ScrollNavbar;
