import React, { Component } from 'react';
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import firebase from './constants/firebase';
import 'firebase/firestore';

import LoginPage from './components/LoginPage'
import OverviewDataPage from './components/OverviewDataPage'
import ProgramPage from './components/ProgramPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : {}
    }
  }
  
  authListener() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (await user) {
        this.setState({ user })
      } else {
        this.setState({ user : null })
      }
    })
  }

  componentDidMount() {
    this.authListener()
  }

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <LoginPage />
        </div>
      )
    }
    return (
      <div>
        <Route exact path='/'>
          <Redirect to="/overview" />
        </Route>
        <Route exact path='/overview' component={OverviewDataPage} />
        {/* <Route exact path='/userData/:id' component={UserDataPage} /> */}
        <Route exact path='/program' component={ProgramPage} />
      </div>
    )
  }
}

export default App;
