import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Menu,
  Divider,
  Table,
  Input,
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

const { Search } = Input

class ProgramStoragePage extends Component {
  state = {
    data: [],
    loading: false,
    searchName: '',
  };

  componentDidMount() {
    document.title = "MMC : คลังข้อมูลโปรแกรมเสริม"
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
      var getUserData = []
      var i = 0
      for (const doc of datasnapshot.docs) {
        // var renderCreatedAt = this.renderDate(doc.data().createdAt)
        // var renderEditedAt = this.renderDate(doc.data().editedAt)
        var docData = {
          key: i,
          programName: doc.data().programName,
          createdAt: doc.data().createdAt,
          editedAt: doc.data().editedAt,
          isActive: doc.data().isActive,
        }
        getUserData.push(docData)
        i = i + 1
      }
      // console.log('data', getUserData);
      this.setState({
        loading: false,
        data: getUserData,
      })
    }
  };

  async fetchSearch(programName) {
    this.setState({ loading: true });
    const datasnapshot = await db.collection('extraProgram').doc('archivement').collection('all').where('programName', '==', programName).get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getUserData = []
      var i = 0
      for (const doc of datasnapshot.docs) {
        // var renderCreatedAt = this.renderDate(doc.data().createdAt)
        // var renderEditedAt = this.renderDate(doc.data().editedAt)
        var docData = {
          key: i,
          programName: doc.data().programName,
          createdAt: doc.data().createdAt,
          editedAt: doc.data().editedAt,
          isActive: doc.data().isActive,
        }
        getUserData.push(docData)
        i = i + 1
      }
      // console.log('data', getUserData);
      this.setState({
        loading: false,
        data: getUserData,
      })
    } else {
      this.setState({
        loading: false,
        data: [],
      })
    }
  };

  getBooleanValue(isActive) {
    if (isActive) {
      return 1
    }
    return 0
  }

  render() {
    const { data, loading } = this.state;
    const columns = [
      {
        key: 'programName',
        title: 'ชื่อโปรแกรม',
        dataIndex: 'programName',
        sorter: (a, b) => a.programName.localeCompare(b.programName),
      },
      {
        key: 'createdAt',
        title: 'วันที่สร้าง',
        dataIndex: 'createdAt',
        render: (createdAt) => <div>{this.renderDate(createdAt)}</div>,
        sorter: (a, b) => a.createdAt.seconds - b.createdAt.seconds,
      },
      {
        key: 'editedAt',
        title: 'แก้ไขล่าสุดเมื่อ',
        dataIndex: 'editedAt',
        render: (editedAt) => <div>{this.renderDate(editedAt)}</div>,
        sorter: (a, b) => a.editedAt.seconds - b.editedAt.seconds,
      },
      {
        key: 'status',
        title: 'status',
        dataIndex: 'isActive',
        render: (isActive) => isActive ? <div>Active</div> : <div>Inactive</div>,
        sorter: (a, b) => this.getBooleanValue(a.isActive) - this.getBooleanValue(b.isActive),
      },
      {
        key: 'edit',
        title: '',
        dataIndex: 'programName',
        render: (programName) =>
          <Link to={{ pathname: `/program-storage/program-data/${programName}` }}>
            <Button type='primary'>
              ดูรายละเอียด
          </Button>
          </Link>,
      },
    ];

    return (
      <Row className="App" style={{ backgroundColor: '#7BDAF8' }}>
        <Col span={4} style={{ backgroundColor: 'white' }}>
          <MenuBar defaultSelectedKeys={['3']} currentPage={'/program-storage'} />
        </Col>
        <Col span={20} style={{ minHeight: '100vh' }}>
          <Row style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }}>
              <Search
                value={this.state.searchName}
                onChange={(e) => this.setState({ searchName: e.target.value })}
                placeholder="ค้นหาโปรแกรมเสริม"
                onSearch={(e) => !!this.state.searchName.length ? this.fetchSearch(this.state.searchName) : {}}
                enterButton={!!this.state.searchName.length}
              />
            </Col>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }}>
              <h2 style={{ padding: '10px' }}>คลังข้อมูลโปรแกรมเสริม</h2>
              <Table
                dataSource={data}
                columns={columns}
                loading={loading}
              />
              <Row justify='center'>
                <Col style={{ paddingTop: 20 }}>
                  <Link to="/program-storage/create-program">
                    <Button type="primary">
                      สร้างโปรแกรมเสริม
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ProgramStoragePage;