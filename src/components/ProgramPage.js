import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
  Button,
  Menu,
} from 'antd';
import "antd/dist/antd.css";
import "../index.css";
import '@firebase/firestore';
import { db } from '../constants/firebase'
import { Link } from "react-router-dom";

const columns = [
  {
    key: 'userName',
    title: 'Username',
    dataIndex: 'userName',
    // sorter: true,
    width: '12%',
    fixed: 'left',
  },
  {
    key: 'realName',
    title: 'ชื่อจริง นามสกุล',
    dataIndex: 'realName',
    width: '12%',
    fixed: 'left',
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
  },
  {
    key: 'phoneNumber',
    title: 'เบอร์โทรศัพท์',
    width: '10%',
    dataIndex: 'phoneNumber',
  },
  {
    key: 'programName',
    title: 'โปรแกรมล่าสุด',
    dataIndex: 'programName',
  },
  {
    key: 'result',
    title: 'ภาวะสุขภาพจิต',
    width: '12%',
    dataIndex: 'result',
  },
  {
    key: 'operation',
    title: '',
    fixed: 'right',
    width: '10%',
    render: () => <Button>ดูรายละเอียด</Button>,
  },
];

class ProgramPage extends Component {
  state = {
    data: [],
    loading: false,
  };

  componentDidMount() {
    // this.fetch()
  }

  async fetch() {
    this.setState({ loading: true });
    const datasnapshot = await db.collection('overviewData').orderBy('userName').get()
    console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getUserData = []
      var i = 0
      for(const doc of datasnapshot.docs) {
        var docData = {
          key: i,
          userName: doc.data().userName,
          realName: doc.data().realName,
          phoneNumber: doc.data().phoneNumber,
          email: doc.data().email,
          programName: doc.data().programName,
          result: doc.data().result,
        }
        getUserData.push(docData)
        i = i + 1
      }
      console.log('data', getUserData);
      this.setState({
        loading: false,
        data: getUserData,
      })
    }
  };

  render() {
    const { data, loading } = this.state;
    return (
      <Row className="App" style={{backgroundColor: '#7BDAF8', margin: 0}}>
        <Col span={4} style={{backgroundColor: 'white'}}>
          <Menu
            defaultSelectedKeys={['2']}
            mode="inline"
          >
            <Menu.Item key="1" href="/">
              User Data
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              Program Management
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={20} style={{minHeight: '100vh'}}>
          <Row style={{margin: 10}}>
            <Col span={24} style={{backgroundColor: 'white', marginTop: 10, marginBottom: 10, padding: 10, borderRadius: 10}}>
              <div>This is Program Management Page</div>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ProgramPage;
