import React from 'react';
import Navbar from './components/NavBar/index';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/HomePages/index';
import TechnicalTest from './Pages/TechnicalTest/index';
import './App.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <Navbar />
                </div>
                <div className="App-body">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/test" component={TechnicalTest} />
                        <Route
                            render={() => {
                                return <h1>Not Found</h1>;
                            }}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
