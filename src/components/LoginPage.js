import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Input
} from 'antd';
import { useHistory } from "react-router-dom";
import firebase from '../constants/firebase';
import 'firebase/firestore';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false,
      errorMessage: '',
    }
  }

  updateInputVal = (val, prop) => {
    // console.log('val', val, 'prop', prop)
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin() {
    if(this.state.email === '' || this.state.password === '') {
      this.setState({
        errorMessage: 'โปรดกรอกอีเมลหรือรหัสผ่านให้ครบถ้วน',
        isLoading: false
      })
    } else {
      this.setState({
        isLoading: true,
      })
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        // console.log(res)
        // console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: '',
        })
        useHistory().replace({ pathname: "/" })
      })
      .catch((error) => {
        // console.log('error', error.message)
        var newErrorMessage = '';
        if(error.message === 'The password is invalid or the user does not have a password.') {
          newErrorMessage = 'รหัสผ่านไม่ถูกต้อง โปรดกรอกใหม่อีกครั้ง';
        } else if(error.message === 'The email address is badly formatted.') {
          newErrorMessage = 'รูปแบบอีเมลไม่ถูกต้อง';
        } else {
          newErrorMessage = error.message;
        }
        this.setState({
          errorMessage: newErrorMessage,
          isLoading: false
        })
      })
    }
  }

  render() {
    return (
      <Row style={{backgroundColor: '#7BDAF8', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
        <Col span={10} style={{backgroundColor: 'white', padding: 10, borderRadius: 10, height: '500px'}}>
          <Row>
            <Col span={24} align='center'>
              อีเมล
            </Col>
            <Col span={24} align='center'>
              <Input
                placeholder="อีเมล"
                value={this.state.email}
                onChange={(e) => this.updateInputVal(e.target.value, 'email')}
              />
            </Col>
            <Col span={24} align='center'>
              รหัสผ่าน
            </Col>
            <Col span={24} align='center'>
              <Input.Password
                placeholder="รหัสผ่าน"
                value={this.state.password}
                onChange={(e) => this.updateInputVal(e.target.value, 'password')}
                maxLength={15}
              />
            </Col>
            <Col span={24} style={{textAlign: 'center', marginBottom: 15, color: '#d7263f'}}>
              {this.state.errorMessage}
            </Col>
            <Col span={24}  align='center'>
              <Button type='primary' onClick={() => this.userLogin()}>
                เข้าสู่ระบบ
              </Button>
            </Col>
            {/* <Text
              style={styles.loginText}
              onPress={() => this.props.navigation.navigate('ResetPassword')}>
              คุณลืมรหัสผ่านใช่หรือไม่?
            </Text>
            <Button
              color="#31d140"
              title="สมัครสมาชิกใหม่"
              onPress={() => this.props.navigation.navigate('Signup')}
            /> */}
          </Row>
        </Col>
      </Row>
    )
  }
}

export default LoginPage;
