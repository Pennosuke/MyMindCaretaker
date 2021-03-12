import React, { Component } from 'react';
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import UserDataPage from './components/UserDataPage'
import ProgramPage from './components/ProgramPage'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={UserDataPage} />
        <Route exact path='/program' component={ProgramPage} />
      </div>
    )
  }
}

export default App;
