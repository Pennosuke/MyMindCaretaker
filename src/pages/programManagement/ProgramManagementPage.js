import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Menu,
  Divider,
  Table,
} from 'antd';
import "antd/dist/antd.css";
import firebase from '../../constants/firebase';
import '@firebase/firestore';
import { db } from '../../constants/firebase'
import MenuBar from '../../components/MenuBar'
import {
  Link,
  useHistory,
} from "react-router-dom";

class ProgramManagementPage extends Component {
  state = {
    activeData: [],
    inactiveData: [],
    loading: false,
  };

  componentDidMount() {
    this.fetch()
  }

  renderDate(timestamp) {
    const Datestamp = timestamp.toDate().toLocaleDateString()
    const splitDatestamp = Datestamp.split('/')
    const Month = splitDatestamp[0]
    const Day = splitDatestamp[1]
    const Year = splitDatestamp[2]
    const newTimestamp = timestamp.toDate().toLocaleTimeString()
    const splitTimestamp = newTimestamp.split(' ')
    const Time = splitTimestamp[0]
    const splitTime = Time.split(':')
    var Hour = splitTime[0]
    const Minute = splitTime[1]
    const Second = splitTime[2]
    var TimeZone = ''
    if (splitTimestamp.length === 2) {
      TimeZone = splitTimestamp[1]
      if (TimeZone === 'AM' && Hour === '12') {
        Hour = '0'
      } else if (TimeZone === 'PM' && Hour !== '12') {
        Hour = String(parseInt(Hour, 10) + 12)
      }
    }
    return Day + '/' + Month + '/' + Year + '-' + Hour + ':' + Minute + ':' + Second
  }

  async fetch() {
    this.setState({ loading: true });
    const datasnapshot = await db.collection('extraProgram').doc('archivement').collection('all').orderBy('programName').get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getActiveData = []
      var getInactiveData = []
      var i = 0
      var j = 0
      for(const doc of datasnapshot.docs) {
        var renderEditedAt = this.renderDate(doc.data().editedAt)
        if (doc.data().isActive) {
          var docData = {
            key: i,
            programName: doc.data().programName,
            editedAt: renderEditedAt,
            isActive: doc.data().isActive,
          }
          getActiveData.push(docData)
          i = i + 1
        } else {
          var docData = {
            key: j,
            programName: doc.data().programName,
            editedAt: renderEditedAt,
            isActive: doc.data().isActive,
          }
          getInactiveData.push(docData)
          j = j + 1
        }
      }
      // console.log('getActiveData', getActiveData);
      // console.log('getInactiveData', getInactiveData);
      this.setState({
        activeData: getActiveData,
        inactiveData: getInactiveData,
        loading: false,
      })
    }
  };

  async activateProgram(programName) {
    const datasnapshot = await db.collection('extraProgram').doc('archivement').collection('all').doc(programName).get()
    var docData = datasnapshot.data()
    docData['isActive'] = true
    db.collection('extraProgram').doc('archivement').collection('all').doc(programName).set(docData)
    this.fetch()
  }

  async deactivateProgram(programName) {
    const datasnapshot = await db.collection('extraProgram').doc('archivement').collection('all').doc(programName).get()
    var docData = datasnapshot.data()
    docData['isActive'] = false
    db.collection('extraProgram').doc('archivement').collection('all').doc(programName).set(docData)
    this.fetch()
  }

  render() {
    const { activeData, inactiveData, loading } = this.state;
    const activeColumns = [
      {
        key: 'programName',
        title: 'ชื่อโปรแกรม',
        dataIndex: 'programName',
        width: '30%',
      },
      {
        key: 'editedAt',
        title: 'แก้ไขล่าสุดเมื่อ',
        dataIndex: 'editedAt',
        width: '30%',
      },
      {
        key: 'status',
        title: 'status',
        dataIndex: 'isActive',
        width: '20%',
        render: (isActive) => isActive ? <div>Active</div> : <div>Inactive</div>
      },
      {
        key: 'edit',
        dataIndex: 'programName',
        width: '20%',
        render: (programName) => <Button type='primary' danger onClick={(e)=>this.deactivateProgram(programName)}>หยุดเผยแพร่</Button>,
      },
    ]
    const inactiveColumns = [
      {
        key: 'programName',
        title: 'ชื่อโปรแกรม',
        dataIndex: 'programName',
        width: '30%',
      },
      {
        key: 'editedAt',
        title: 'แก้ไขล่าสุดเมื่อ',
        dataIndex: 'editedAt',
        width: '30%',
      },
      {
        key: 'status',
        title: 'status',
        dataIndex: 'isActive',
        width: '20%',
        render: (isActive) => isActive ? <div>Active</div> : <div>Inactive</div>
      },
      {
        key: 'edit',
        dataIndex: 'programName',
        width: '20%',
        render: (programName) => <Button type='primary' onClick={(e)=>this.activateProgram(programName)}>เผยแพร่</Button>,
      },
    ]

    return (
      <Row className="App" style={{backgroundColor: '#7BDAF8'}}>
        <Col span={4} style={{backgroundColor: 'white'}}>
          <MenuBar defaultSelectedKeys={['2']} currentPage={'/program-manage'} />
        </Col>
        <Col span={20} style={{minHeight: '100vh'}}>
          <Row style={{padding: 10 }}>
            <Col span={24} style={{backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10}}>
              <h2 style={{ padding: '10px' }}>โปรแกรมเสริมที่กำลังเผยแพร่</h2>
              <Table
                dataSource={activeData}
                columns={activeColumns}
                loading={loading}
              />
            </Col>
            <Col span={24} style={{backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10}}>
              <h2 style={{ padding: '10px' }}>โปรแกรมเสริมที่ยังไม่ได้เผยแพร่</h2>
              <Table
                dataSource={inactiveData}
                columns={inactiveColumns}
                loading={loading}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ProgramManagementPage;
