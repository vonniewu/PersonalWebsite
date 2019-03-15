import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faToolbox, faFileWord, faPhone } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.svg';
import './App.scss';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div id="loading">

                </div>
            );
        } else {
            return (
                <Router>
                    <div id="navBar">
                        <ul>
                            <li>
                                <Link to="/"><FontAwesomeIcon icon={faHome} size="lg" /></Link>
                            </li>
                            <li>
                                <Link to="/about"><FontAwesomeIcon icon={faUser} size="lg" /></Link>
                            </li>
                            <li>
                                <Link to="/experience"><FontAwesomeIcon icon={faToolbox} size="lg" /></Link>
                            </li>
                            <li>
                                <Link to="/portfolio"><FontAwesomeIcon icon={faFileWord} size="lg" /></Link>
                            </li>
                            <li>
                                <Link to="/contract"><FontAwesomeIcon icon={faPhone} size="lg" /></Link>
                            </li>
                        </ul>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/experience" component={ExperiencePage} />
                        <Route path="/portfolio" component={PortfolioPage} />
                        <Route path="/contract" component={ContactPage} />
                    </div>
                </Router>
            );
        }
  }
}

export default App;
