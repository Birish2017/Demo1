import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}>react_redux</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={"/"} exact>
              <NavItem>
                <Glyphicon glyph="home" /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={"/Courses"}>
              <NavItem>
                <Glyphicon glyph="education" /> Courses
              </NavItem>
            </LinkContainer>
            <LinkContainer to={"/ManageCoursesPage"}>
              <NavItem>Manage Courses</NavItem>
            </LinkContainer>
            <LinkContainer to={"/CourseAuthorPage"}>
              <NavItem>AddCourse</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to={"/About"}>
              <NavItem>Login</NavItem>
            </LinkContainer>
            <LinkContainer to={"/Contact"}>
              <NavItem>LogOut</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
