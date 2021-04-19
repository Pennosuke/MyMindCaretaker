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

const columns = [
  {
    key: 'renderTimestamp',
    title: 'วันที่ทำโปรแกรมล่าสุด',
    dataIndex: 'renderTimestamp',
    width: '208px',
    fixed: 'left',
  },
  {
    key: 'action',
    title: '',
    dataIndex: 'nextRoute',
    width: '10%',
    render: (nextRoute) =>
    <Link
      to={{pathname: `/user-data/${nextRoute.username}/extra-program/${nextRoute.collection}/answer/${nextRoute.doc}`}}
    >
      <Button type="primary">
        ดูรายละเอียด
      </Button>
    </Link>,
  },
];

class ExtraProgramHistoryPage extends Component {
  state = {
    data: [],
    mindfulnessData: [],
    dassData: [],
    isLoaded: false,
    isMindfulnessLoaded: false,
    isDassLoaded: false,
  };

  componentDidMount() {
    document.title = "MMC : ประวัติการทำโปรแกรมเสริม"
    var username = this.props.location.pathname.split('/')[2]
    var collection = this.props.location.pathname.split('/')[4]
    this.fetch(username, collection)
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

  async fetch(username, collection) {
    this.setState({ isLoaded: true });
    const datasnapshot = await db.collection('extraProgram').doc('answerData').collection(collection).where('userName', '==', username).get()
    // console.log('datasnapshot', datasnapshot)
    if (datasnapshot.docs.length > 0) {
      var getData = []
      for (const doc of datasnapshot.docs) {
        var renderTimestamp = this.renderDate(doc.data().timestamp)
        var nextRoute = {
          username: username,
          collection: collection,
          doc: doc.id
        }
        getData.push({
          renderTimestamp: renderTimestamp,
          timestamp: doc.data().timestamp,
          nextRoute: nextRoute,
        })
      }
      getData.sort(this.compare_timestamp)
      this.setState({
        isLoaded: false,
        data: getData,
      })
    } else {
      this.setState({
        isLoaded: false,
        data: [],
      })
    }
    // console.log('data', this.state.data)
  };

  render() {
    var currentProgram = this.props.location.pathname.split('/')[4].split('_').join(' ')
    return (
      <Row className="App" style={{ backgroundColor: '#7BDAF8' }}>
        <Col span={4} style={{ backgroundColor: 'white' }}>
          <MenuBar defaultSelectedKeys={['1']} currentPage={this.props.location.pathname} />
        </Col>
        <Col span={20} style={{ minHeight: '100vh' }}>
          <Row style={{ padding: 10 }}>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <h2 style={{ padding: '10px' }}>{currentProgram}</h2>
              <Table
                dataSource={this.state.data}
                loading={this.state.isLoaded}
                columns={columns}
                scroll={{ x: 1000 }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ExtraProgramHistoryPage;