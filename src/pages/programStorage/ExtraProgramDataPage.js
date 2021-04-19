import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Input,
  Select,
  Card,
  Skeleton,
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

const { Option } = Select
const { TextArea } = Input

class ExtraProgramDataPage extends Component {
  state = {
    data: {},
    isLoaded: false,
  };

  componentDidMount() {
    var programName = this.props.location.pathname.split('/')[3]
    document.title = `MMC : เนื้อหาของ ${programName}`
    this.fetch(programName)
  }

  async fetch(programName) {
    this.setState({ isLoaded: false });
    const datasnapshot = await db.collection('extraProgram').doc('archivement').collection('all').doc(programName).get()
    const getProgramData = datasnapshot.data()
    // console.log('getProgramData', getProgramData)
    this.setState({
      data: getProgramData,
      isLoaded: true,
    })
  };

  async deleteProgram(programName) {
    db.collection('extraProgram').doc('archivement').collection('all').doc(programName).delete()
  }

  async activateProgram(programName) {
    const datasnapshot = await db.collection('extraProgram').doc('archivement').collection('all').doc(programName).get()
    var docData = datasnapshot.data()
    docData['isActive'] = true
    db.collection('extraProgram').doc('archivement').collection('all').doc(programName).set(docData)
    this.fetch(programName)
  }

  async deactivateProgram(programName) {
    const datasnapshot = await db.collection('extraProgram').doc('archivement').collection('all').doc(programName).get()
    var docData = datasnapshot.data()
    docData['isActive'] = false
    db.collection('extraProgram').doc('archivement').collection('all').doc(programName).set(docData)
    this.fetch(programName)
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

  renderPickerInputChoices(question) {
    return (
      <Card>
        {question.choices.map((choice, index) =>
          <Row>
            <Col span={12} style={{ paddingBottom: 10 }}>{choice}</Col>
          </Row>
        )}
      </Card>
    )
  }

  renderContentTypeInfo(contentType, page) {
    if (contentType === 'Info') {
      return '(หน้าสำหรับแจ้งหรืออธิบายข้อมูลทั่วไป)'
    } else if (contentType === 'TextInput') {
      return '(หน้าสำหรับแสดงโจทย์แบบอัตนัย)'
    } else if (contentType === 'SelectionGroup') {
      return '(หน้าสำหรับแสดงโจทย์แบบปรนัย)'
    } else if (contentType === 'PickerInput') {
      return '(หน้าสำหรับแสดงโจทย์ที่ตอบด้วยการเลือกตัวเลือกใน Dropdown)'
    } else if (contentType === 'EmotionButtons') {
      return '(หน้าสำหรับการเลือกปุ่มอารมณ์ที่กำลังรู้สึก)'
    } else if (contentType === 'EmotionRating') {
      return `(หน้าสำหรับการถามถึงระดับของอารมณ์ที่เลือกไว้ในหน้า ${page})`
    }
  }

  renderContent(content, page) {
    if (content.contentType === 'Info') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card
            type="inner"
            title={`หน้า ${page + 1}`}
          >
            <Row>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentType} {this.renderContentTypeInfo(content.contentType, page + 1)}</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>เนื้อหา : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentText}</Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (content.contentType === 'TextInput') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card
            type="inner"
            title={`หน้า ${page + 1}`}
          >
            <Row>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentType} {this.renderContentTypeInfo(content.contentType, page + 1)}</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentText}</Col>
              <Col span={24}>
                {content.questions.map((question, index) =>
                  <Card size="small">
                    <Row>
                      <Col span={4} style={{ paddingBottom: 10 }}>คำถามที่ {index + 1} : </Col>
                      <Col span={20} style={{ paddingBottom: 10 }}>{question.questionText}</Col>
                      <Col span={4} style={{ paddingBottom: 10 }} />
                      <Col span={20} style={{ paddingBottom: 10 }}>
                        <Input
                          placeholder="ผู้ใช้จะตอบคำถามนี้ด้วยการพิมพ์"
                          disabled
                        />
                      </Col>
                    </Row>
                  </Card>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (content.contentType === 'SelectionGroup') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card
            type="inner"
            title={`หน้า ${page + 1}`}
          >
            <Row>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentType} {this.renderContentTypeInfo(content.contentType, page + 1)}</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentText}</Col>
              <Col span={24}>
                {content.choices.map((choice, index) =>
                  <Card size="small">
                    <Row>
                      <Col span={4} style={{ paddingBottom: 10 }}>ตัวเลือกที่ {index + 1} : </Col>
                      <Col span={20} style={{ paddingBottom: 10 }}>{choice.choiceText}</Col>
                      <Col span={4} style={{ paddingBottom: 10 }}>คะแนนตัวเลือกที่ {index + 1} : </Col>
                      <Col span={20} style={{ paddingBottom: 10 }}>{choice.value}</Col>
                    </Row>
                  </Card>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (content.contentType === 'PickerInput') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card
            type="inner"
            title={`หน้า ${page + 1}`}
          >
            <Row>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentType} {this.renderContentTypeInfo(content.contentType, page + 1)}</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentText}</Col>
              <Col span={24}>
                {content.questions.map((question, index) =>
                  <Card size="small">
                    <Row>
                      <Col span={5} style={{ paddingBottom: 10 }}>คำถามที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{question.questionText}</Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>กลุ่มคำตอบ : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>
                        {this.renderPickerInputChoices(question)}
                      </Col>
                    </Row>
                    {question.allowOthers ? (
                      <Row>
                        <Col span={6} style={{ paddingBottom: 10 }}>คำถามสำหรับคำตอบอื่นๆ : </Col>
                        <Col span={18} style={{ paddingBottom: 10 }}>{question.otherQuestionText}</Col>
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
    } else if (content.contentType === 'EmotionButtons') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card
            type="inner"
            title={`หน้า ${page + 1}`}
          >
            <Row>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentType} {this.renderContentTypeInfo(content.contentType, page + 1)}</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>เนื้อหา : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentText}</Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (content.contentType === 'EmotionRating') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card
            type="inner"
            title={`หน้า ${page + 1}`}
          >
            <Row>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentType} {this.renderContentTypeInfo(content.contentType, page + 1)}</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>คำถาม : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>{content.contentText}</Col>
            </Row>
          </Card>
        </Col>
      )
    }
  }

  render() {
    const { data } = this.state
    return (
      <Row className="App" style={{ backgroundColor: '#7BDAF8' }}>
        <Col span={4} style={{ backgroundColor: 'white' }}>
          <MenuBar defaultSelectedKeys={['3']} currentPage={'/program-data'} />
        </Col>
        <Col span={20} style={{ minHeight: '100vh' }}>
          <Row style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
              <Row style={{ justifyContent: 'space-between', paddingInline: 10, paddingTop: 10, paddingBottom: 30 }}>
                <h2>เนื้อหาของโปรแกรมเสริม</h2>
                <Col>
                  {/* <Link to={{pathname: '/program-storage'}}>
                    <Button
                      type='primary'
                      onClick={(e) => this.uploadProgram()}
                    >
                      บันทึก
                    </Button>
                  </Link> */}
                  {!this.state.isLoaded ? (
                    <Row />
                  ) : data.isActive ? (
                    <Row>
                      <Button
                        disabled
                        style={{ width: 100, marginRight: 10 }}
                      >
                        แก้ไข
                      </Button>
                      <Button
                        disabled
                        type='primary'
                        style={{ width: 100, marginLeft: 10 }}
                        danger
                      >
                        ลบ
                      </Button>
                    </Row>
                  ) : (
                    <Row>
                      <Link to={{ pathname: `/program-storage/program-data/${data.programName}/edit-program` }}>
                        <Button
                          style={{ width: 100, marginRight: 10 }}
                        >
                          แก้ไข
                        </Button>
                      </Link>
                      <Link to={{ pathname: `/program-storage` }} onClick={(e) => this.deleteProgram(data.programName)}>
                        <Button type='primary' style={{ width: 100, marginLeft: 10 }} danger>
                          ลบ
                        </Button>
                      </Link>
                    </Row>
                  )}
                </Col>
              </Row>
              <Row>
                {this.state.isLoaded ? (
                  <Col span={24}>
                    <Row style={{ paddingInline: 10 , paddingBottom: 20}}>
                      <Col span={5} ><h3>ชื่อโปรแกรม : </h3></Col>
                      <Col span={19} style={{ paddingBottom: 10 }}><h3>{data.programName}</h3></Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>สร้างเมื่อ : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{this.renderDate(data.createdAt)}</Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>แก้ไขล่าสุดเมื่อ : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{this.renderDate(data.editedAt)}</Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>สถานะ : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>{data.isActive ? 'เผยแพร่(หากต้องการแก้ไขหรือลบโปรแกรม ให้หยุดเผยแพร่ก่อน)' : 'ยังไม่เผยแพร่'}</Col>
                      <Col span={24} style={{ paddingBottom: 10 }}>
                        {data.isActive ? (
                          <Button type='primary' danger onClick={(e) => this.deactivateProgram(data.programName)}>หยุดเผยแพร่</Button>
                        ) : (
                          <Button type='primary' onClick={(e) => this.activateProgram(data.programName)}>เผยแพร่</Button>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      {data.contents.map((content, index) =>
                        <Col span={24}>
                          <Row>
                            {this.renderContent(content, index)}
                          </Row>
                        </Col>
                      )}
                    </Row>
                  </Col>
                ) : (
                  <Skeleton active />
                )}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ExtraProgramDataPage;