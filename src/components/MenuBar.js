import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Menu,
  Divider,
} from 'antd';
import "antd/dist/antd.css";
import "../index.css";
import firebase from '../constants/firebase';
import '@firebase/firestore';
import { db } from '../constants/firebase'
import {
  Link,
  useHistory,
} from "react-router-dom";
import logo from '../assets/MMC-logo.png';

class MenuBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : {}
    }
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      useHistory().replace({ pathname: "/" })
    })
    .catch(error => console.log(error))
  }

  render() {
    var { defaultSelectedKeys, currentPage } = this.props
    return (
      <div>
        <Row align='center' style={{marginTop: 30}}>
          <img src={logo} width='100'/>
        </Row>
        <Divider />
        <Menu
          defaultSelectedKeys={defaultSelectedKeys}
          mode="inline"
        >
          <Menu.Item key="1">
            Data Overview
            {(currentPage === '/overview') ? <div /> : <Link to="/" />}
          </Menu.Item>
          <Menu.Item key="2">
            Depression Alert
            {(currentPage === '/depression-alert') ? <div /> : <Link to="/depression-alert" />}
          </Menu.Item>
          <Menu.Item key="3">
            Extra Program Storage
            {(currentPage === '/program-storage') ? <div /> : <Link to="/program-storage" />}
          </Menu.Item>
        </Menu>
        <Divider />
        <Row align='center'>
          <Link to={{pathname: '/'}} onClick={(e) => this.signOut()}>
            <Button type='primary' danger >
              Log Out
            </Button>
          </Link>
        </Row>
      </div>
    )
  }
}

export default MenuBar