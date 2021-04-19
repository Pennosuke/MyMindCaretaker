import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
  Button,
  Menu,
  Divider,
  Skeleton
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

class UserDataPage extends Component {
  state = {
    userData: {},
    isUserDataLoaded: false,
    overviewData: {
      userName: '',
      result: '',
      score: '',
      evaluationTotalDays: '',
      evaluationValue: '',
      evaluationTimestamp: '',
    },
    isOverviewDataLoaded: false,
    userArchivement: [],
    isUserArchivementLoading: false,
    extraArchivement: [],
    isExtraArchivementLoading: false,
  };

  componentDidMount() {
    document.title = "MMC : ข้อมูลผู้ใช้"
    var username = this.props.location.pathname.split('/')[2]
    this.fetchUserData(username)
    this.fetchOverviewData(username)
    this.fetchUserArchivement(username)
    this.fetchExtraArchivement(username)
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

  async fetchUserData(username) {
    const datasnapshot = await db.collection('userData').where('userName', '==', username).get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getUserData = []
      var i = 0
      for (const doc of datasnapshot.docs) {
        var docData = {
          key: i,
          userName: doc.data().userName,
          realName: doc.data().realName,
          sex: doc.data().sex,
          age: doc.data().age,
          education: doc.data().education,
          GPA: doc.data().GPA,
          religion: doc.data().religion,
          address: doc.data().address,
          phoneNumber: doc.data().phoneNumber,
          email: doc.data().email,
          revenueSource: doc.data().revenueSource,
          revenueValue: doc.data().revenueValue,
          revenueFreq: doc.data().revenueFreq,
          isRevenueEnough: doc.data().isRevenueEnough,
          revenueSatisfaction: doc.data().revenueSatisfaction,
          parentsMaritalStatus: doc.data().parentsMaritalStatus,
          dadEducation: doc.data().dadEducation,
          momEducation: doc.data().momEducation
        }
        getUserData.push(docData)
        i = i + 1
      }
      // console.loglog('data', getUserData);
      this.setState({
        userData: getUserData[0],
        isUserDataLoaded: true
      })
    }
  };

  async fetchOverviewData(username) {
    const datasnapshot = await db.collection('overviewData').where('userName', '==', username).get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getOverviewData = []
      for (const doc of datasnapshot.docs) {
        var docData = {
          userName: doc.data().userName,
          result: doc.data().result,
          score: doc.data().score,
          evaluationTotalDays: doc.data().evaluationTotalDays,
          evaluationValue: doc.data().evaluationValue,
        }
        getOverviewData.push(docData)
      }
      // console.loglog('data', getOverviewData);
      var newData = this.state.overviewData
      newData['userName'] = getOverviewData[0]['userName']
      newData['result'] = getOverviewData[0]['result']
      newData['score'] = getOverviewData[0]['score']
      newData['evaluationTotalDays'] = getOverviewData[0]['evaluationTotalDays']
      newData['evaluationValue'] = getOverviewData[0]['evaluationValue']
      this.setState({
        overviewData: newData,
      })
    }
  };

  async fetchUserArchivement(username) {
    this.setState({ isUserArchivementLoading: true });
    const datasnapshot = await db.collection('userArchivement').where('userName', '==', username).get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getUserArchivement = []
      var docData = {}
      for (const doc of datasnapshot.docs) {
        docData = doc.data()
      }
      // console.loglog('docData', docData);
      var renderTimestamp = ''
      var nextRoute = {}
      if (!!docData['แบบประเมิน']) {
        renderTimestamp = this.renderDate(docData['แบบประเมิน'].latestTimestamp)
        var newData = this.state.overviewData
        newData['evaluationTimestamp'] = renderTimestamp
      } if (!!docData['โปรแกรมที่_1_หายใจคลายเครียด']) {
        renderTimestamp = this.renderDate(docData['โปรแกรมที่_1_หายใจคลายเครียด'].latestTimestamp)
        nextRoute = {
          username: docData.userName,
          collection: 'โปรแกรมที่_1_หายใจคลายเครียด'
        }
        getUserArchivement.push({
          key: 10,
          nextRoute: nextRoute,
          programName: 'โปรแกรมที่ 1 หายใจคลายเครียด',
          timestamp: renderTimestamp,
          totalDays: docData['โปรแกรมที่_1_หายใจคลายเครียด'].totalDays,
          value: docData['โปรแกรมที่_1_หายใจคลายเครียด'].totalDays,
        })
      } if (!!docData['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด']) {
        renderTimestamp = this.renderDate(docData['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'].latestTimestamp)
        nextRoute = {
          username: docData.userName,
          collection: 'ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'
        }
        getUserArchivement.push({
          key: 11,
          nextRoute: nextRoute,
          programName: 'ทบทวนโปรแกรมที่ 1',
          timestamp: renderTimestamp,
          totalDays: docData['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'].totalDays,
          value: docData['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'].totalDays,
        })
      } if (!!docData['โปรแกรมที่_2_ละเอียดลออดูกาย']) {
        renderTimestamp = this.renderDate(docData['โปรแกรมที่_2_ละเอียดลออดูกาย'].latestTimestamp)
        nextRoute = {
          username: docData.userName,
          collection: 'โปรแกรมที่_2_ละเอียดลออดูกาย'
        }
        getUserArchivement.push({
          key: 20,
          nextRoute: nextRoute,
          programName: 'โปรแกรมที่ 2 ละเอียดลออดูกาย',
          timestamp: renderTimestamp,
          totalDays: docData['โปรแกรมที่_2_ละเอียดลออดูกาย'].totalDays,
          value: docData['โปรแกรมที่_2_ละเอียดลออดูกาย'].totalDays,
        })
      } if (!!docData['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย']) {
        renderTimestamp = this.renderDate(docData['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'].latestTimestamp)
        nextRoute = {
          username: docData.userName,
          collection: 'ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'
        }
        getUserArchivement.push({
          key: 21,
          nextRoute: nextRoute,
          programName: 'ทบทวนโปรแกรมที่ 2',
          timestamp: renderTimestamp,
          totalDays: docData['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'].totalDays,
          value: docData['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'].totalDays,
        })
      } if (!!docData['โปรแกรมที่_3_ตระหนักรู้ในอารมณ์']) {
        renderTimestamp = this.renderDate(docData['โปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].latestTimestamp)
        nextRoute = {
          username: docData.userName,
          collection: 'โปรแกรมที่_3_ตระหนักรู้ในอารมณ์'
        }
        getUserArchivement.push({
          key: 30,
          nextRoute: nextRoute,
          programName: 'โปรแกรมที่ 3 ตระหนักรู้ในอารมณ์',
          timestamp: renderTimestamp,
          totalDays: docData['โปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].totalDays,
          value: docData['โปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].totalDays,
        })
      } if (!!docData['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์']) {
        renderTimestamp = this.renderDate(docData['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].latestTimestamp)
        nextRoute = {
          username: docData.userName,
          collection: 'ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'
        }
        getUserArchivement.push({
          key: 31,
          nextRoute: nextRoute,
          programName: 'ทบทวนโปรแกรมที่ 3',
          timestamp: renderTimestamp,
          totalDays: docData['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].totalDays,
          value: docData['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].totalDays,
        })
      } if (!!docData['โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า']) {
        renderTimestamp = this.renderDate(docData['โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'].latestTimestamp)
        nextRoute = {
          username: docData.userName,
          collection: 'โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'
        }
        getUserArchivement.push({
          key: 40,
          nextRoute: nextRoute,
          programName: 'โปรแกรมที่ 4 ปรับความคิดพิชิตเศร้า',
          timestamp: renderTimestamp,
          totalDays: docData['โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'].totalDays,
          value: docData['โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'].totalDays,
        })
      } if (!!docData['ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า']) {
        renderTimestamp = this.renderDate(docData['ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'].latestTimestamp)
        nextRoute = {
          username: docData.userName,
          collection: 'ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'
        }
        getUserArchivement.push({
          key: 41,
          nextRoute: nextRoute,
          programName: 'ทบทวนโปรแกรมที่ 4',
          timestamp: renderTimestamp,
          totalDays: docData['ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'].totalDays,
          value: docData['ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'].totalDays,
        })
      }
      this.setState({
        isUserArchivementLoading: false,
        userArchivement: getUserArchivement,
        overviewData: newData,
        isOverviewDataLoaded: true,
      })
    } else {
      this.setState({
        isUserArchivementLoading: false,
        userArchivement: [],
        overviewData: newData,
        isOverviewDataLoaded: true,
      })
    }
    // console.loglog('userArchivement', this.state.userArchivement)
  };

  async fetchExtraArchivement(username) {
    this.setState({ isExtraArchivementLoading: true });
    const extraSnapshot = await db.collection('extraArchivement').where('userName', '==', username).get()
    if (extraSnapshot.docs.length > 0) {
      var docData = {}
      var getExtraArchivement = []
      for (const doc of extraSnapshot.docs) {
        docData = doc.data()
      }
      var docDataKeys = Object.keys(docData)
      var i = 0
      for (const docKey of docDataKeys) {
        if (docKey != 'userName') {
          var renderTimestamp = this.renderDate(docData[docKey].latestTimestamp)
          var nextRoute = {
            username: docData.userName,
            collection: docKey
          }
          getExtraArchivement.push({
            key: i,
            nextRoute: nextRoute,
            programName: docKey,
            timestamp: renderTimestamp,
            totalDays: docData[docKey].totalDays,
            value: docData[docKey].totalDays,
          })
          i = i + 1
        }
      }
      // console.loglog('getExtraArchivement', getExtraArchivement);
      this.setState({
        isExtraArchivementLoading: false,
        extraArchivement: getExtraArchivement,
      })
    } else {
      this.setState({
        isExtraArchivementLoading: false,
        extraArchivement: [],
      })
    }
  };

  renderData(columnName, columnData) {
    return (
      <Col span={12} style={{ padding: '10px' }}>
        <Row>
          <Col span={11} style={{ textAlign: 'left' }}>
            {columnName}
          </Col>
          <Col span={13} style={{ textAlign: 'left' }}>
            {columnData}
          </Col>
        </Row>
      </Col>
    )
  }

  render() {
    const columns = [
      {
        key: 'programName',
        title: 'ชื่อโปรแกรม',
        dataIndex: 'programName',
      },
      {
        key: 'timestamp',
        title: 'วันที่ทำโปรแกรมล่าสุด',
        dataIndex: 'timestamp',
      },
      {
        key: 'totalDays',
        title: 'จำนวนวันที่ทำโปรแกรม',
        dataIndex: 'totalDays',
      },
      {
        key: 'value',
        title: 'จำนวนครั้งที่ทำโปรแกรม',
        dataIndex: 'value',
      },
      {
        key: 'action',
        title: '',
        dataIndex: 'nextRoute',
        width: '10%',
        render: (nextRoute) =>
          <Link
            to={{ pathname: `/user-data/${nextRoute.username}/user-program/${nextRoute.collection}` }}
          >
            <Button type="primary">
              ดูรายละเอียด
            </Button>
          </Link>,
      },
    ]
    const extraColumns = [
      {
        key: 'programName',
        title: 'ชื่อโปรแกรม',
        dataIndex: 'programName',
      },
      {
        key: 'timestamp',
        title: 'วันที่ทำโปรแกรมล่าสุด',
        dataIndex: 'timestamp',
      },
      {
        key: 'totalDays',
        title: 'จำนวนวันที่ทำโปรแกรม',
        dataIndex: 'totalDays',
      },
      {
        key: 'value',
        title: 'จำนวนครั้งที่ทำโปรแกรม',
        dataIndex: 'value',
      },
      {
        key: 'action',
        title: '',
        dataIndex: 'nextRoute',
        width: '10%',
        render: (nextRoute) =>
          <Link
            to={{ pathname: `/user-data/${nextRoute.username}/extra-program/${nextRoute.collection}` }}
          >
            <Button type="primary">
              ดูรายละเอียด
            </Button>
          </Link>,
      },
    ]
    return (
      <Row className="App" style={{ backgroundColor: '#7BDAF8' }}>
        <Col span={4} style={{ backgroundColor: 'white' }}>
          <MenuBar defaultSelectedKeys={['1']} currentPage={this.props.location.pathname} />
        </Col>
        <Col span={20} style={{ minHeight: '100vh' }}>
          <Row style={{ padding: 10 }}>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <Row>
                <Col span={24} style={{ padding: '10px' }}>
                  <h2>ข้อมูลส่วนตัว</h2>
                </Col>
                {this.state.isUserDataLoaded ?
                  (
                    <Col span={24}>
                      <Row>
                        {this.renderData('Username', this.state.userData.userName)}
                        {this.renderData('ชื่อจริง นามสกุล', this.state.userData.realName)}
                        {this.renderData('เบอร์โทรศัทพ์', this.state.userData.phoneNumber)}
                        {this.renderData('Email', this.state.userData.email)}
                        {this.renderData('เพศ', this.state.userData.sex)}
                        {this.renderData('อายุ', this.state.userData.age)}
                        {this.renderData('ระดับการศึกษา', this.state.userData.education)}
                        {this.renderData('ผลการเรียนเฉลี่ย(GPA)', this.state.userData.GPA)}
                        {this.renderData('ศาสนา', this.state.userData.religion)}
                        {this.renderData('ที่อยู่ปัจจุบัน', this.state.userData.address)}
                        {this.renderData('รายรับ', `${this.state.userData.revenueValue} ${this.state.userData.revenueFreq}`)}
                        {this.renderData('แหล่งรายรับ', this.state.userData.revenueSource)}
                        {this.renderData('ความเพียงพอของรายรับ', this.state.userData.isRevenueEnough)}
                        {this.renderData('ความพึงพอใจของรายรับ', this.state.userData.revenueSatisfaction)}
                        {this.renderData('ระดับการศึกษาของบิดา', this.state.userData.dadEducation)}
                        {this.renderData('ระดับการศึกษาของมารดา', this.state.userData.momEducation)}
                        {this.renderData('สถานภาพสมรสของบิดามารดา', this.state.userData.parentsMaritalStatus)}
                      </Row>
                    </Col>
                  ) : (
                    <Skeleton active />
                  )
                }
              </Row>
            </Col>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <h2 style={{ padding: '10px' }}>ข้อมูลแบบประเมิน</h2>
              <Row>
                {this.state.isOverviewDataLoaded ?
                  (
                    <Col span={24}>
                      <Row>
                        {this.renderData('ผลการประเมิน', `${this.state.overviewData.result} (${this.state.overviewData.score} คะแนน)`)}
                        {this.renderData('ประเมินล่าสุดเมื่อ', this.state.overviewData.evaluationTimestamp)}
                        {this.renderData('เคยทำแบบประเมินทั้งหมด', `${this.state.overviewData.evaluationTotalDays} วัน, ${this.state.overviewData.evaluationValue} ครั้ง`)}
                        <Col span={24} align='right'>
                          <Link
                            to={{ pathname: `/user-data/${this.state.userData.userName}/evaluation` }}
                          >
                            <Button type="primary" style={{margin: 10}}>
                              ดูรายละเอียด
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  ) : (
                    <Skeleton active />
                  )
                }
              </Row>
            </Col>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <h2 style={{ padding: '10px' }}>ข้อมูลโปรแกรมฝึกปฏิบัติ</h2>
              <Table
                dataSource={this.state.userArchivement}
                loading={this.state.isUserArchivementLoading}
                columns={columns}
              />
            </Col>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <h2 style={{ padding: '10px' }}>ข้อมูลโปรแกรมเสริม</h2>
              <Table
                dataSource={this.state.extraArchivement}
                loading={this.state.isExtraArchivementLoading}
                columns={extraColumns}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default UserDataPage;
