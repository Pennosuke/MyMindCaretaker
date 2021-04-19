import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
  Button,
  Menu,
  Divider,
  Input,
  Select,
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
const { Option } = Select

class OverviewDataPage extends Component {
  state = {
    data: [],
    loading: false,
    searchName: '',
    searchBy: 'userName',
  };

  componentDidMount() {
    document.title = "MMC : คลังข้อมูลผู้ใช้"
    this.fetch()
  }

  async fetch() {
    this.setState({ loading: true });
    const datasnapshot = await db.collection('overviewData').orderBy('userName').get()
    // console.log('datasnapshot', datasnapshot)
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
          programName: !!doc.data().programName ? doc.data().programName : '-',
          result: doc.data().result,
          score: doc.data().score,
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

  async fetchSearch(searchName, searchBy) {
    this.setState({ loading: true });
    const datasnapshot = await db.collection('overviewData').where(searchBy, '==', searchName).get()
    // console.log('datasnapshot', datasnapshot)
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
          programName: !!doc.data().programName ? doc.data().programName : '-',
          result: doc.data().result,
          score: doc.data().score,
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
  }

  renderResult(evaluationScore){
    if(evaluationScore <= 4) {
      return 'สุขภาพจิตดี'
    } else if(evaluationScore <= 6) {
      return 'ซึมเศร้าเล็กน้อย'
    } else if(evaluationScore <= 10) {
      return 'ซึมเศร้าปานกลาง'
    } else if(evaluationScore <= 13) {
      return 'ซึมเศร้าค่อนข้างมาก'
    } else {
      return 'ซึมเศร้าในระดับสูงมาก'
    }
  }

  progressScore(programName) {
    var programProp = programName.split('_')
    if (programName === '-') {
      return 0
    } else if (programName === 'แบบประเมิน') {
      return 1
    } else {
      var value = 0
      if (programProp[0] === 'ทบทวนโปรแกรมที่') {
        value = value + 1
      }
      var programNo = parseInt(programProp[1])
      value = value + (programNo * 10)
      return value
    }
  }

  render() {
    const { data, loading } = this.state;
    const columns = [
      {
        key: 'userName',
        title: 'Username',
        dataIndex: 'userName',
        sorter: (a, b) => a.userName.localeCompare(b.userName),
        // sorter: true,
        width: '12%',
        fixed: 'left',
      },
      {
        key: 'realName',
        title: 'ชื่อจริง นามสกุล',
        dataIndex: 'realName',
        sorter: (a, b) => a.realName.localeCompare(b.realName),
        width: '12%',
        fixed: 'left',
      },
      {
        key: 'result',
        title: 'ภาวะสุขภาพจิต',
        width: '12%',
        dataIndex: 'score',
        render: (score) => <div>{this.renderResult(score)}</div>,
        sorter: (a, b) => a.score - b.score,
      },
      {
        key: 'programName',
        title: 'โปรแกรมล่าสุด',
        dataIndex: 'programName',
        sorter: (a, b) => this.progressScore(a.programName) - this.progressScore(b.programName),
      },
      {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
      },
      {
        key: 'phoneNumber',
        title: 'เบอร์โทรศัพท์',
        width: '10%',
        dataIndex: 'phoneNumber',
        sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
      },
      {
        key: 'operation',
        title: '',
        dataIndex: 'userName',
        fixed: 'right',
        width: '10%',
        render: (userName) => 
        <Link to={{pathname: `/user-data/${userName}`}}>
          <Button type="primary">
            ดูรายละเอียด
          </Button>
        </Link>,
      },
    ];
    function onChange(pagination, filters, sorter, extra) {
      // console.loglog('params', pagination, filters, sorter, extra);
    }
    return (
      <Row className="App" style={{backgroundColor: '#7BDAF8'}}>
        <Col span={4} style={{backgroundColor: 'white'}}>
          <MenuBar defaultSelectedKeys={['1']} currentPage={'/overview'} />
        </Col>
        <Col span={20} style={{minHeight: '100vh'}}>
          <Row style={{marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
            <Col span={24} style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10}}>
              <Row>
                <Col span={4} style={{paddingRight: 10}}>
                  <Select
                    value={this.state.searchBy}
                    style={{width: '100%'}}
                    onChange={(value) => this.setState({searchBy: value})}
                  >
                    <Option value={'userName'} key={1}>Username</Option>
                    <Option value={'realName'} key={2}>ชื่อจริง-นามสกุล</Option>
                  </Select>
                </Col>
                <Col span={20}>
                  <Search
                    value={this.state.searchName}
                    onChange={(e) => this.setState({searchName: e.target.value})}
                    placeholder={this.state.searchBy === 'userName' ? 'ค้นหาด้วย Username' : 'ค้นหาด้วย ชื่อจริง-นามสกุล'}
                    onSearch={(e) => !!this.state.searchName.length ? this.fetchSearch(this.state.searchName, this.state.searchBy) : {}}
                    enterButton={!!this.state.searchName.length}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10}}>
            <h2 style={{ padding: '10px' }}>คลังข้อมูลผู้ใช้</h2>
              <Table
                dataSource={data}
                loading={loading}
                columns={columns}
                onChange={onChange}
                scroll={{ x: 1300 }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default OverviewDataPage;
