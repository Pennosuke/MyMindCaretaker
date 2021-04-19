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
import firebase from '../../constants/firebase';
import '@firebase/firestore';
import { db } from '../../constants/firebase'
import MenuBar from '../../components/MenuBar'
import {
  Link,
  useHistory,
} from "react-router-dom";

class DepressionAlertPage extends Component {
  state = {
    data: [],
    loading: false,
  };

  componentDidMount() {
    document.title = "MMC : ผู้ใช้เสี่ยงซึมเศร้าสูง"
    this.fetch()
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

  async fetch() {
    this.setState({ loading: true });
    const datasnapshot = await db.collection('depressionAlert').get()
    if (datasnapshot.docs.length > 0) {
      var getDepressionData = []
      for(const doc of datasnapshot.docs) {
        var userDataMessege = `ผู้ใช้ ${doc.data().userName} (${doc.data().realName})`
        var mentalResultMessege = `มีภาวะ${doc.data().result}(${doc.data().score} คะแนน)`
        var contactMessege = doc.data().allowContact ? `ยินดีที่จะให้โทรไปที่เบอร์ ${doc.data().phoneNumber}` : "ยังไม่ยินดีที่จะให้โทรไป";
        var message = `${userDataMessege} ${mentalResultMessege} ${contactMessege}`
        getDepressionData.push({
          timestamp: doc.data().timestamp,
          message: message,
          userName: doc.data().userName,
        })
      }
      getDepressionData.sort(this.compare_timestamp)
      for(var j = 0; j < getDepressionData.length; j++){
        getDepressionData[j]['key'] = j
      }
      // console.log('data', getUserData);
      this.setState({
        loading: false,
        data: getDepressionData,
      })
    }
  };

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

  render() {
    const { data, loading } = this.state;
    const columns = [
      {
        key: 'timestamp',
        title: 'วันที่-เวลา',
        dataIndex: 'timestamp',
        render: (timestamp) => <div>{this.renderDate(timestamp)}</div>,
        sorter: (a, b) => a.timestamp.seconds - b.timestamp.seconds,
      },
      {
        key: 'message',
        title: 'ข้อมูล',
        dataIndex: 'message',
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
            ดูข้อมูลผู้ใช้
          </Button>
        </Link>,
      },
    ]
    function onChange(pagination, filters, sorter, extra) {
      // console.log('params', pagination, filters, sorter, extra);
    }
    return (
      <Row style={{backgroundColor: '#7BDAF8'}}>
        <Col span={4} style={{backgroundColor: 'white'}}>
          <MenuBar defaultSelectedKeys={['2']} currentPage={'/depression-alert'} />
        </Col>
        <Col span={20} style={{minHeight: '100vh'}}>
          <Row style={{marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
            <Col span={24} style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
            <h2 style={{ padding: '10px' }}>ผู้ใช้ที่มีภาวะเสี่ยงซึมเศร้าสูง</h2>
              <Table
                dataSource={data}
                loading={loading}
                columns={columns}
                onChange={onChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default DepressionAlertPage;