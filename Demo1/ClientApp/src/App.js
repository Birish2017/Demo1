import React, { Component } from "react";
import { Route, Switch } from "react-router";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import Courses from "./components/Courses/Courses";
import ManageCoursesPage from "./components/Courses/MangeCoursesPage";
import CourseAuthorPage from "./components/Courses/CourseAuthorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import reverse from "lodash/reverse";
import _ from "lodash";

//var _ = require("lodash");

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Courses" component={Courses} />
          <Route path="/ManageCoursesPage" component={ManageCoursesPage} />
          <Route path="/Course/:slug" component={ManageCoursesPage} />
          <Route path="/CourseAuthorPage" component={CourseAuthorPage} />
          <Route path="/Contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer
          autoClose={2000}
          hideProgressBar
          position="bottom-center"
        />
      </Layout>
    );
  }
}
