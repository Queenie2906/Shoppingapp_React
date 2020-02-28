import React from 'react';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import TopMenu from './components/TopMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import  './App.css';

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
       <Router>
      <TopMenu/>
       <Switch>
         <Route exact path='/' component={HomePage}/>
         <Route exact path='/list' component={ListPage}/>
         <Route exact path='/detail' component={DetailPage}/>
       </Switch>
      </Router>
      </React.Fragment>
    )
  }
}

export default App;
