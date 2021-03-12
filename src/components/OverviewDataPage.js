import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
  Button,
  Menu,
  Divider
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
    render: () => <Button type="primary">ดูรายละเอียด</Button>,
  },
];

class OverviewDataPage extends Component {
  /*
  compare_timestamp(a, b){
    if(a.timestamp.seconds < b.timestamp.seconds){
      return 1;
    }else if(a.timestamp.seconds > b.timestamp.seconds){
      return -1;
    }else{
      return 0;
    }
  }

  async getOverviewData() {
    var userArchivementData = {}
    var evaluationData = {}
    const userArchivementSnapshot = await db.collection('userArchivement').orderBy("userName").get()
    if(userArchivementSnapshot.docs.length > 0) {
      // var i = 1
      for(const doc of userArchivementSnapshot.docs) {
        var programName = ''
        var evaluationScore = ''
        var evaluationResult = ''
        if(!!doc.data()['แบบประเมิน']) {
          var userArchivementName = doc.data().userName
          const evaluationSnapshot = await db.collection('แบบสอบถามวัดภาวะสุขภาพจิต').where('userName', '==', userArchivementName).get()
          if (evaluationSnapshot.docs.length > 0) {
            const getEvaluationData = evaluationSnapshot.docs.map(doc => ({
              timestamp: doc.data().timestamp,
              depression: doc.data().depression,
            }));
            getEvaluationData.sort(this.compare_timestamp)
            evaluationScore = getEvaluationData[0].depression
            if(evaluationScore <= 4) {
              evaluationResult = 'สุขภาพจิตดี'
            } else if(evaluationScore <= 6) {
              evaluationResult = 'ซึมเศร้าเล็กน้อย'
            } else if(evaluationScore <= 10) {
              evaluationResult = 'ซึมเศร้าปานกลาง'
            } else if(evaluationScore <= 13) {
              evaluationResult = 'ซึมเศร้าค่อนข้างมาก'
            } else {
              evaluationResult = 'ซึมเศร้าในระดับสูงมาก'
            }
          }
          evaluationData[doc.id] = {
            score : evaluationScore,
            result : evaluationResult,
            latestTimestamp : doc.data()['แบบประเมิน'].latestTimestamp,
            totalDays : doc.data()['แบบประเมิน'].totalDays,
            value : doc.data()['แบบประเมิน'].value
          }
          programName = 'แบบประเมิน'
          if(!!doc.data()['ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า']) {
            programName = 'ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'
          } else if(!!doc.data()['โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า']) {
            programName = 'โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'
          } else if(!!doc.data()['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์']) {
            programName = 'ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'
          } else if(!!doc.data()['โปรแกรมที่_3_ตระหนักรู้ในอารมณ์']) {
            programName = 'โปรแกรมที่_3_ตระหนักรู้ในอารมณ์'
          } else if(!!doc.data()['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย']) {
            programName = 'ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'
          } else if(!!doc.data()['โปรแกรมที่_2_ละเอียดลออดูกาย']) {
            programName = 'โปรแกรมที่_2_ละเอียดลออดูกาย'
          } else if(!!doc.data()['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด']) {
            programName = 'ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'
          } else if(!!doc.data()['โปรแกรมที่_1_หายใจคลายเครียด']) {
            programName = 'โปรแกรมที่_1_หายใจคลายเครียด'
          }
          userArchivementData[doc.id] = {
            latestProgram : programName,
            latestProgramTimestamp : doc.data()[programName].latestTimestamp,
            latestProgramTotalDays: doc.data()[programName].totalDays,
            latestProgramValue: doc.data()[programName].value,
          }
        }
        // console.log('i =', i, ': doc.id =', doc.id)
        // i = i + 1
      }
    }
    const userDatasnapshot = await db.collection('userData').orderBy("userName").get()
    if(userDatasnapshot.docs.length > 0) {
      var docData = {}
      for(const doc of userDatasnapshot.docs) {
        docData = {
          userName: doc.data().userName,
          realName: doc.data().realName,
          phoneNumber: doc.data().phoneNumber,
          email: doc.data().email,
          sex: doc.data().sex,
          age: doc.data().age,
          education: doc.data().education,
          programName: (!!userArchivementData[doc.id]) ? userArchivementData[doc.id].latestProgram : '-',
          programTotalDays: (!!userArchivementData[doc.id]) ? userArchivementData[doc.id].latestProgramTotalDays : 0,
          programValue: (!!userArchivementData[doc.id]) ? userArchivementData[doc.id].latestProgramValue : 0,
          score: (!!evaluationData[doc.id]) ? evaluationData[doc.id].score : -1,
          result: (!!evaluationData[doc.id]) ? evaluationData[doc.id].result : '-',
          evaluationTotalDays: (!!evaluationData[doc.id]) ? evaluationData[doc.id].totalDays : 0,
          evaluationValue: (!!evaluationData[doc.id]) ? evaluationData[doc.id].value : 0,
        }
        if(!!userArchivementData[doc.id] && !!userArchivementData[doc.id].latestProgramTimestamp) {
          docData['programTimestamp'] = userArchivementData[doc.id].latestProgramTimestamp
        }
        if(!!evaluationData[doc.id] && !!evaluationData[doc.id].latestProgramTimestamp) {
          docData['evaluationTimestamp'] = evaluationData[doc.id].latestTimestamp
        }
        console.log('doc.id =', doc.id, ': docData', docData)
        //db.collection("overviewData").doc(doc.id).set(docData)
      }
    }
  }
  */
  state = {
    data: [],
    loading: false,
  };

  componentDidMount() {
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
          programName: doc.data().programName,
          result: doc.data().result,
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

  signOut() {
    firebase.auth().signOut().then(() => {
      useHistory().replace({ pathname: "/" })
    })
    .catch(error => console.log(error))
  }

  render() {
    const { data, loading } = this.state;
    return (
      <Row className="App" style={{backgroundColor: '#7BDAF8'}}>
        <Col span={4} style={{backgroundColor: 'white'}}>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <Menu.Item key="1">
              Data Overview
            </Menu.Item>
            <Menu.Item key="2">
              Program Management
              <Link to="/program" />
            </Menu.Item>
          </Menu>
          <Divider />
          <Button onClick={(e) => this.signOut()}>
            Log Out
          </Button>
        </Col>
        <Col span={20} style={{minHeight: '100vh'}}>
          <Row style={{marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
            <Col span={24} style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
              <Table
                dataSource={data}
                loading={loading}
                columns={columns}
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
