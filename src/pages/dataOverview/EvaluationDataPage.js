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
  useParams,
} from "react-router-dom";

const spwbColumns = [
  {
    key: 'renderTimestamp',
    title: 'วันที่ทำแบบประเมินล่าสุด',
    dataIndex: 'renderTimestamp',
    width: '208px',
    fixed: 'left',
  },
  {
    key: 'autonomy',
    title: 'ความเป็นตัวของตัวเอง',
    dataIndex: 'autonomy',
  },
  {
    key: 'enviMaster',
    title: 'การเรียนรู้ด้านสิ่งแวดล้อม',
    dataIndex: 'enviMaster',
  },
  {
    key: 'perGrowth',
    title: 'การเติบโตส่วนบุคคล',
    dataIndex: 'perGrowth',
  },
  {
    key: 'posiRelaWithOthers',
    title: 'การมีสัมพันธภาพทางบวกกับผู้อื่น',
    dataIndex: 'posiRelaWithOthers',
  },
  {
    key: 'purInLife',
    title: 'จุดมุ่งหมายชีวิต',
    dataIndex: 'purInLife',
  },
  {
    key: 'selfAccept',
    title: 'การยอมรับตนเอง',
    dataIndex: 'selfAccept',
  },
  {
    key: 'action',
    title: '',
    dataIndex: 'nextRoute',
    fixed: 'right',
    width: '130px',
    render: (nextRoute) => 
    <Link to={{pathname: `/user-data/${nextRoute.username}/evaluation/${nextRoute.collection}/answer/${nextRoute.doc}`}}>
      <Button type="primary">
        ดูรายละเอียด
      </Button>
    </Link>,
  },
];

const mindfulnessColumns = [
  {
    key: 'renderTimestamp',
    title: 'วันที่ทำแบบประเมินล่าสุด',
    dataIndex: 'renderTimestamp',
    width: '208px',
    fixed: 'left',
  },
  {
    key: 'mindfulness',
    title: 'คะแนนการมีสติ',
    dataIndex: 'mindfulness',
  },
  {
    key: 'action',
    title: '',
    dataIndex: 'nextRoute',
    fixed: 'right',
    width: '130px',
    render: (nextRoute) => 
    <Link to={{pathname: `/user-data/${nextRoute.username}/evaluation/${nextRoute.collection}/answer/${nextRoute.doc}`}}>
      <Button type="primary">
        ดูรายละเอียด
      </Button>
    </Link>,
  },
];

const dassColumns = [
  {
    key: 'renderTimestamp',
    title: 'วันที่ทำแบบประเมินล่าสุด',
    dataIndex: 'renderTimestamp',
    width: '208px',
    fixed: 'left',
  },
  {
    key: 'result',
    title: 'ภาวะสุขภาพจิต',
    dataIndex: 'result',
  },
  {
    key: 'depression',
    title: 'ภาวะซึมเศร้า',
    dataIndex: 'depression',
  },
  {
    key: 'anxiety',
    title: 'ความวิตกกังวล',
    dataIndex: 'anxiety',
  },
  {
    key: 'stress',
    title: 'ความเครียด',
    dataIndex: 'stress',
  },
  {
    key: 'action',
    title: '',
    dataIndex: 'nextRoute',
    fixed: 'right',
    width: '130px',
    render: (nextRoute) => 
    <Link to={{pathname: `/user-data/${nextRoute.username}/evaluation/${nextRoute.collection}/answer/${nextRoute.doc}`}}>
      <Button type="primary">
        ดูรายละเอียด
      </Button>
    </Link>,
  },
];

class EvaluationDataPage extends Component {
  state = {
    spwbData: [],
    mindfulnessData: [],
    dassData: [],
    isSpwbLoaded: false,
    isMindfulnessLoaded: false,
    isDassLoaded: false,
  };

  componentDidMount() {
    document.title = "MMC : ประวัติการทำแบบประเมิน"
    var username = this.props.location.pathname.split('/')[2]
    // console.log('inEvaluation', username)
    this.fetchSpwb(username)
    this.fetchMindfulness(username)
    this.fetchDass(username)
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

  compare_timestamp(a, b){
    if(a.timestamp.seconds < b.timestamp.seconds){
      return 1;
    }else if(a.timestamp.seconds > b.timestamp.seconds){
      return -1;
    }else{
      return 0;
    }
  }

  async fetchSpwb(username) {
    this.setState({ isSpwbLoaded: true });
    const datasnapshot = await db.collection('แบบวัดสุขภาวะทางจิตใจ').where('userName', '==', username).get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getspwbData = []
      for (const doc of datasnapshot.docs) {
        var renderTimestamp = this.renderDate(doc.data().timestamp)
        var nextRoute = {
          username: username,
          collection: 'spwb',
          doc: doc.id
        }
        getspwbData.push({
          renderTimestamp: renderTimestamp,
          timestamp: doc.data().timestamp,
          autonomy: doc.data().autonomy,
          enviMaster: doc.data().enviMaster,
          perGrowth: doc.data().perGrowth,
          posiRelaWithOthers: doc.data().posiRelaWithOthers,
          purInLife: doc.data().purInLife,
          selfAccept: doc.data().selfAccept,
          nextRoute: nextRoute,
        })
      }
      getspwbData.sort(this.compare_timestamp)
      this.setState({
        isSpwbLoaded: false,
        spwbData: getspwbData,
      })
    } else {
      this.setState({
        isSpwbLoaded: false,
        spwbData: [],
      })
    }
    // console.log('spwbData', this.state.spwbData)
  };

  async fetchMindfulness(username) {
    this.setState({ isMindfulnessLoaded: true });
    const datasnapshot = await db.collection('แบบวัดการมีสติ').where('userName', '==', username).get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getMindfulnessData = []
      for (const doc of datasnapshot.docs) {
        var renderTimestamp = this.renderDate(doc.data().timestamp)
        var nextRoute = {
          username: username,
          collection: 'mindfulness',
          doc: doc.id
        }
        getMindfulnessData.push({
          renderTimestamp: renderTimestamp,
          timestamp: doc.data().timestamp,
          mindfulness: doc.data().mindfulness,
          nextRoute: nextRoute,
        })
      }
      getMindfulnessData.sort(this.compare_timestamp)
      this.setState({
        isMindfulnessLoaded: false,
        mindfulnessData: getMindfulnessData,
      })
    } else {
      this.setState({
        isMindfulnessLoaded: false,
        mindfulnessData: [],
      })
    }
    // console.log('mindfulnessData', this.state.mindfulnessData)
  };

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

  async fetchDass(username) {
    this.setState({ isDassLoaded: true });
    const datasnapshot = await db.collection('แบบสอบถามวัดภาวะสุขภาพจิต').where('userName', '==', username).get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getDassData = []
      for (const doc of datasnapshot.docs) {
        var renderTimestamp = this.renderDate(doc.data().timestamp)
        var result = this.renderResult(doc.data().depression)
        var nextRoute = {
          username: username,
          collection: 'dass',
          doc: doc.id
        }
        getDassData.push({
          renderTimestamp: renderTimestamp,
          timestamp: doc.data().timestamp,
          depression: doc.data().depression,
          anxiety: doc.data().anxiety,
          stress: doc.data().stress,
          result: result,
          nextRoute: nextRoute,
        })
      }
      getDassData.sort(this.compare_timestamp)
      this.setState({
        isDassLoaded: false,
        dassData: getDassData,
      })
    } else {
      this.setState({
        isDassLoaded: false,
        dassData: [],
      })
    }
    // console.log('dassData', this.state.dassData)
  };

  render() {
    return (
      <Row className="App" style={{ backgroundColor: '#7BDAF8' }}>
        <Col span={4} style={{ backgroundColor: 'white' }}>
          <MenuBar defaultSelectedKeys={['1']} currentPage={this.props.location.pathname} />
        </Col>
        <Col span={20} style={{ minHeight: '100vh' }}>
          <Row style={{ padding: 10 }}>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <h2 style={{ padding: '10px' }}>แบบวัดสุขภาวะทางจิตใจ</h2>
              <Table
                dataSource={this.state.spwbData}
                loading={this.state.isSpwbLoaded}
                columns={spwbColumns}
                scroll={{ x: 1300 }}
              />
            </Col>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <h2 style={{ padding: '10px' }}>แบบวัดการมีสติ</h2>
              <Table
                dataSource={this.state.mindfulnessData}
                loading={this.state.isMindfulnessLoaded}
                columns={mindfulnessColumns}
              />
            </Col>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <h2 style={{ padding: '10px' }}>แบบสอบถามวัดภาวะสุขภาพจิต</h2>
              <Table
                dataSource={this.state.dassData}
                loading={this.state.isDassLoaded}
                columns={dassColumns}
                scroll={{ x: 800 }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default EvaluationDataPage;