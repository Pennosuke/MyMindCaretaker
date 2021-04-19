import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
  Button,
  Menu,
  Divider,
  Skeleton,
  Card,
  Descriptions,
  Image,
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
import {
  Program1,
  Homework1,
  Program2,
  Homework2,
  Program3,
  Homework3,
  Program4,
  Homework4,
} from '../../constants/โปรแกรมฝึกปฏิบัติ'

class ProgramAnswerPage extends Component {
  state = {
    data: [],
    isLoaded: false
  };

  componentDidMount() {
    var username = this.props.location.pathname.split('/')[2]
    var collection = this.props.location.pathname.split('/')[4]
    var doc = this.props.location.pathname.split('/')[6]
    document.title = `MMC : ประวัติการทำ${collection}`
    this.fetch(username, collection, doc)
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

  getProgramData(collection) {
    if (collection === 'โปรแกรมที่_1_หายใจคลายเครียด') {
      return Program1
    } else if (collection === 'ทบทวนโปรแกรมที่_1_หายใจคลายเครียด') {
      return Homework1
    } else if (collection === 'โปรแกรมที่_2_ละเอียดลออดูกาย') {
      return Program2
    } else if (collection === 'ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย') {
      return Homework2
    } else if (collection === 'โปรแกรมที่_3_ตระหนักรู้ในอารมณ์') {
      return Program3
    } else if (collection === 'ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์') {
      return Homework3
    } else if (collection === 'โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า') {
      return Program4
    } else if (collection === 'ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า') {
      return Homework4
    }
  }

  async fetch(username, collection, doc) {
    var newData = []
    var questionData = {}
    var programData = this.getProgramData(collection)
    for (const content of programData) {
      questionData[content.contentId] = {
        contentType: content.contentType,
        contentText: content.contentText,
      }
    }
    const datasnapshot = await db.collection(collection).doc(doc).get()
    const answerData = datasnapshot.data()
    const keys = Object.keys(answerData)
    // console.log('answerData', answerData)
    // console.log('questionData', questionData)
    // console.log('keys', keys)
    for (const key of keys) {
      if (key !== 'userName' && key !== 'timestamp') {
        newData.push({
          key: key,
          contentType: questionData[key].contentType,
          contentText: questionData[key].contentText,
          answerValue: answerData[key],
        })
      }
    }
    // console.log('newData', newData)
    this.setState({
      data: newData,
      isLoaded: true
    })
  };

  renderEmotion(emotion) {
    if (emotion === 'angry') {
      return 'โมโห หงุดหงิด รำคาญ'
    } else if (emotion === 'brave') {
      return 'กล้า เชื่อมั่น อิสระ'
    } else if (emotion === 'calm') {
      return 'สงบ ผ่อนคลาย'
    } else if (emotion === 'confident') {
      return 'ผ่อนคลาย เชื่อมั่น'
    } else if (emotion === 'confused') {
      return 'สับสน งง'
    } else if (emotion === 'disapoint') {
      return 'ผิดหวัง ไม่พอใจ'
    } else if (emotion === 'embarrassed') {
      return 'กระอักกระอ่วนใจ ไม่มีความสุข'
    } else if (emotion === 'excited') {
      return 'ตื่นเต้น ยินดี'
    } else if (emotion === 'guilty') {
      return 'รู้สึกผิด ไม่สบายใจ'
    } else if (emotion === 'happy') {
      return 'ดีใจ ยินดี มีความสุข'
    } else if (emotion === 'lonely') {
      return 'เหงา ไม่มีความสุข'
    } else if (emotion === 'proud') {
      return 'ภูมิใจ เชื่อมั่น'
    } else if (emotion === 'sad') {
      return 'เศร้า หดหู่'
    } else if (emotion === 'scared') {
      return 'กลัว หวั่นไหว'
    } else if (emotion === 'shame') {
      return 'ละอายใจ ไม่มีความสุข'
    } else if (emotion === 'worried') {
      return 'กังวลใจ ไม่มั่งคง'
    }
  }

  renderChoiceQuestions(questions) {
    return (
      <Row>
        <Col span={24}>
          {questions.map((question, index) =>
            <Card size='small' bordered style={{ backgroundColor: '#f3f3f3' }}>
              <Row>
                <Col span={5} style={{ paddingBottom: 10 }}>คำถามที่ {index + 1} : </Col>
                <Col span={19} style={{ paddingBottom: 10 }}>{question.questionText}</Col>
                <Col span={5} style={{ paddingBottom: 10 }}>คำตอบที่ {index + 1} : </Col>
                <Col span={19} style={{ paddingBottom: 10 }}>{question.value}</Col>
              </Row>
            </Card>
          )}
        </Col>
      </Row>
    )
  }

  renderAnswerData(data) {
    // console.log('renderAnswerData', data)
    if (data.contentType === 'TextInput') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card type="inner" title={`หน้า ${data.key} (ประเภท ${data.contentType})`}>
            <Row>
              <Col span={5} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={19} style={{ paddingBottom: 10 }}>{data.contentText}</Col>
              <Col span={24}>
                {data.answerValue.map((elem, index) =>
                  <Card size="small" style={{ backgroundColor: '#f9f9f9' }}>
                    <Row>
                      <Col span={5} style={{ paddingBottom: 10 }}>คำถามที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{elem.questionText}</Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>คำตอบที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{elem.value}</Col>
                    </Row>
                  </Card>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (data.contentType === 'SelectionGroup') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card type="inner" title={`หน้า ${data.key} (ประเภท ${data.contentType})`}>
            <Row>
              <Col span={5} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={19} style={{ paddingBottom: 10 }}>{data.contentText}</Col>
              <Col span={5} style={{ paddingBottom: 10 }}>คำตอบ : </Col>
              <Col span={19} style={{ paddingBottom: 10 }}>{data.answerValue.choiceText}</Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (data.contentType === 'EmotionButtons') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card type="inner" title={`หน้า ${data.key} (ประเภท ${data.contentType})`}>
            <Row>
              <Col span={5} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={19} style={{ paddingBottom: 10 }}>{data.contentText}</Col>
              <Col span={24}>
                {data.answerValue.map((elem, index) =>
                  <Card size="small" style={{ backgroundColor: '#f9f9f9' }}>
                    <Row>
                      <Col span={5} style={{ paddingBottom: 10 }}>อารมณ์ที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{this.renderEmotion(elem.emotion)}</Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>ระดับของอารมณ์ที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{elem.value}</Col>
                    </Row>
                  </Card>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (data.contentType === 'SortingQuestion') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card type="inner" title={`หน้า ${data.key} (ประเภท ${data.contentType})`}>
            <Row>
              <Col span={5} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={19} style={{ paddingBottom: 10 }}>{data.contentText}</Col>
              <Col span={24}>
                {data.answerValue.answers.map((elem, index) =>
                  <Card size="small" style={{ backgroundColor: '#f9f9f9' }}>
                    <Row>
                      <Col span={5} style={{ paddingBottom: 10 }}>คำตอบลำดับที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{elem}</Col>
                    </Row>
                  </Card>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (data.contentType === 'PickerInput') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card type="inner" title={`หน้า ${data.key} (ประเภท ${data.contentType})`}>
            <Row>
              <Col span={5} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={19} style={{ paddingBottom: 10 }}>{data.contentText}</Col>
              <Col span={24}>
                {data.answerValue.map((elem, index) =>
                  <Card size="small" style={{ backgroundColor: '#f9f9f9' }}>
                    <Row>
                      <Col span={5} style={{ paddingBottom: 10 }}>คำถามที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{elem.questionText}</Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>คำตอบที่เลือก : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{elem.value}</Col>
                    </Row>
                    {elem.value === 'อื่นๆ' ? (
                      <Row>
                        <Col span={5} style={{ paddingBottom: 10 }}>คำตอบอื่นๆที่ระบุไว้ : </Col>
                        <Col span={19} style={{ paddingBottom: 10 }}>{elem.otherValue}</Col>
                      </Row>
                    ) : (
                      <div />
                    )}
                  </Card>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (data.contentType === 'MainAfterGame') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card type="inner" title={`หน้า ${data.key} (ประเภท ${data.contentType})`}>
            <Row>
              <Col span={5} style={{ paddingBottom: 10 }}>คำถาม : </Col>
              <Col span={19} style={{ paddingBottom: 10 }}>{data.contentText}</Col>
              <Col span={24} style={{ paddingBottom: 10 }}>
                {data.answerValue.choices.map((elem, index) =>
                  <Card size="small" style={{ backgroundColor: '#f9f9f9' }}>
                    <Row>
                      <Col span={5} style={{ paddingBottom: 10 }}>ความคิดความรู้สึกที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{elem.choiceText}</Col>
                    </Row>
                    {this.renderChoiceQuestions(elem.questions)}
                  </Card>
                )}
              </Col>
              <Col span={5} style={{ paddingBottom: 10 }}>คำตอบอื่นๆที่เขียนไว้ : </Col>
              <Col span={19} style={{ paddingBottom: 10 }}>{data.otherChoiceValue}</Col>
            </Row>
          </Card>
        </Col>
      )
    } else {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card type="inner" title={`หน้า ${data.key}`}>
            Default content
          </Card>
        </Col>
      )
    }
  }
  render() {
    var currentProgram = this.props.location.pathname.split('/')[4].split('_').join(' ')
    var currentDoc = this.props.location.pathname.split('/')[6]
    return (
      <Row className="App" style={{ backgroundColor: '#7BDAF8' }}>
        <Col span={5} style={{ backgroundColor: 'white' }}>
          <MenuBar defaultSelectedKeys={['1']} currentPage={this.props.location.pathname} />
        </Col>
        <Col span={19} style={{ minHeight: '100vh' }}>
          <Row style={{ padding: 10 }}>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
              <h2 style={{ padding: '10px' }}>{currentProgram}</h2>
              <h3 style={{ padding: '10px' }}>{currentDoc}</h3>
              <Row>
                {this.state.isLoaded ?
                  (
                    this.state.data.map((userdata, index) =>
                      <Col span={24}>
                        <Row>
                          {this.renderAnswerData(userdata)}
                        </Row>
                      </Col>
                    )
                  ) : (
                    <Skeleton active />
                  )
                }
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ProgramAnswerPage;