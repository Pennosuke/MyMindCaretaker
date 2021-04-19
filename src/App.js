import React, { Component } from 'react';
import {
  // BrowserRouter,
  // Router,
  Route,
  // Link,
  Redirect,
  // useParams
} from 'react-router-dom'
import firebase from './constants/firebase';
import 'firebase/firestore';

import LoginPage from './pages/LoginPage'

import OverviewDataPage from './pages/dataOverview/OverviewDataPage'
import UserDataPage from './pages/dataOverview/UserDataPage'
import EvaluationDataPage from './pages/dataOverview/EvaluationDataPage'
import EvaluationAnswerPage from './pages/dataOverview/EvaluationAnswerPage'
import ProgramDataPage from './pages/dataOverview/ProgramDataPage'
import ProgramAnswerPage from './pages/dataOverview/ProgramAnswerPage'
import ExtraProgramHistoryPage from './pages/dataOverview/ExtraProgramHistoryPage'
import ExtraProgramAnswerPage from './pages/dataOverview/ExtraProgramAnswerPage'

import DepressionAlertPage from './pages/depressionAlert/DepressionAlertPage'

import ProgramManagementPage from './pages/programManagement/ProgramManagementPage'

import ProgramStoragePage from './pages/programStorage/ProgramStoragePage'
import CreateProgramPage from './pages/programStorage/CreateProgramPage'
import ExtraProgramDataPage from './pages/programStorage/ExtraProgramDataPage'
import EditProgramPage from './pages/programStorage/EditProgramPage'


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
          <Redirect to='/' />
          <Route exact path='/' component={LoginPage} />
        </div>
      )
    }
    return (
      <div>
        <Route exact path='/' component={OverviewDataPage} />
        <Route exact path='/user-data/:id' component={UserDataPage} />
        <Route exact path='/user-data/:id/evaluation' component={EvaluationDataPage} />
        <Route exact path='/user-data/:id/evaluation/:collection/answer/:doc' component={EvaluationAnswerPage} />
        <Route exact path='/user-data/:id/user-program/:collection' component={ProgramDataPage} />
        <Route exact path='/user-data/:id/user-program/:collection/answer/:doc' component={ProgramAnswerPage} />
        <Route exact path='/user-data/:id/extra-program/:collection' component={ExtraProgramHistoryPage} />
        <Route exact path='/user-data/:id/extra-program/:collection/answer/:doc' component={ExtraProgramAnswerPage} />
        <Route exact path='/depression-alert' component={DepressionAlertPage} />
        <Route exact path='/program-manage' component={ProgramManagementPage} />
        <Route exact path='/program-storage' component={ProgramStoragePage} />
        <Route exact path='/program-storage/create-program' component={CreateProgramPage} />
        <Route exact path='/program-storage/program-data/:id' component={ExtraProgramDataPage} />
        <Route exact path='/program-storage/program-data/:id/edit-program' component={EditProgramPage} />
      </div>
    )
  }
}

export default App;
