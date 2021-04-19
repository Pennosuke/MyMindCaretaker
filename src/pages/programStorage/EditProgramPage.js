import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Input,
  Select,
  Card,
  Skeleton,
  Switch,
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

class EditProgramPage extends Component {
  state = {
    contents: [],
    programName: '',
    createdAt: '',
    editedAt: '',
    isActive: false,
    isLoaded: false,
  };

  componentDidMount() {
    var programName = this.props.location.pathname.split('/')[3]
    document.title = `MMC : แก้ไขเนื้อหา ${programName}`
    this.fetch(programName)
  }

  async fetch(programName) {
    this.setState({ loading: true });
    const datasnapshot = await db.collection('extraProgram').doc('archivement').collection('all').doc(programName).get()
    const getProgramData = datasnapshot.data()
    // console.log('getProgramData', getProgramData)
    this.setState({
      contents: getProgramData.contents,
      programName: getProgramData.programName,
      createdAt: getProgramData.createdAt,
      editedAt: getProgramData.editedAt,
      isActive: false,
      isLoaded: true,
    })
  };

  addPage() {
    const state = this.state
    state.contents.push({
      contentType: 'Info',
      contentText: ''
    })
    this.setState(state)
  }

  deletePage(page, contentType) {
    // console.log('page', page)
    const state = this.state
    if(contentType === 'EmotionButtons') {
      state.contents.splice(page, 2)
    } else {
      state.contents.splice(page, 1)
    }
    this.setState(state)
    // console.log('state', state)
  }

  updateProgramName(val) {
    const state = this.state
    state.programName = val
    this.setState(state)
    // console.log('state', state)
  }

  selectChoices() {
    const choices = [
      'Info',
      'TextInput',
      'SelectionGroup',
      'PickerInput',
      'EmotionButtons',
    ]
    const allChoices = [];
    let choiceIndex = 0;
    for (const elem of choices) {
      allChoices.push(
        <Option value={elem} key={choiceIndex}>{elem}</Option>
      )
      choiceIndex++;
    }
    return allChoices
  }

  updateContentType(value, page, contentText) {
    // console.log('value', value)
    // console.log('contentText', contentText)
    const state = this.state
    var oldContentType = state.contents[page].contentType
    if (value !== state.contents[page].contentType) {
      if (value === 'Info') {
        state.contents[page] = {
          contentType: 'Info',
          contentText: contentText
        }
      } else if (value === 'TextInput') {
        var defaultQuestions = [{
          questionText: '',
          placeholderText: '',
          textBoxSize: 'large',
          needAnswer: false,
        }]
        state.contents[page] = {
          contentType: 'TextInput',
          contentText: contentText,
          questions: defaultQuestions,
        }
      } else if (value === 'SelectionGroup') {
        var defaultChoices = [
          {
            choiceText: 'ตัวเลือกที่ 1',
            value: 0
          },
          {
            choiceText: 'ตัวเลือกที่ 2',
            value: 1
          },
        ]
        state.contents[page] = {
          contentType: 'SelectionGroup',
          contentText: contentText,
          choices: defaultChoices,
        }
      } else if (value === 'PickerInput') {
        var defaultQuestions = [
          {
            questionText: '',
            choices: [
              'ตัวเลือกที่ 1',
            ],
            otherQuestionText: '',
            allowOthers: false,
          }
        ]
        state.contents[page] = {
          contentType: 'PickerInput',
          contentText: contentText,
          questions: defaultQuestions,
        }
      } else if (value === 'EmotionButtons') {
        var lastHalfContent = state.contents
        var firstHalfContent = lastHalfContent.splice(0,page + 1)
        firstHalfContent[page] = {
          contentType: 'EmotionButtons',
          contentText: contentText,
          minEmotions: 1,
          maxEmotions: 3
        }
        firstHalfContent.push({
          contentType: 'EmotionRating',
          contentText: '',
        })
        var finalContent = firstHalfContent.concat(lastHalfContent)
        state.contents = finalContent
      }
      if(oldContentType === 'EmotionButtons') {
        state.contents.splice(page+1, 1)
      }
      this.setState(state)
      // console.log('state', state)
    }
  }

  updateContentText(value, page) {
    // console.log('value', value)
    const state = this.state
    state.contents[page].contentText = value
    this.setState(state)
    // console.log('state', state)
  }

  updateSubText(value, page, pageTarget, index, indexTarget) {
    // console.log('value', value)
    // console.log('page', page)
    // console.log('index', index)
    const state = this.state
    state.contents[page][pageTarget][index][indexTarget] = value
    this.setState(state)
    // console.log('state', state)
  }

  addSubItem(contentType, page) {
    const state = this.state
    var data = {}
    var target = ''
    if (contentType === 'TextInput') {
      data = {
        questionText: '',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false,
      }
      target = 'questions'
    } else if (contentType === 'SelectionGroup') {
      data = {
        choiceText: '',
        value: 0,
      }
      target = 'choices'
    } else if (contentType === 'PickerInput') {
      data = {
        questionText: '',
        choices: [
          'ตัวเลือกที่ 1',
        ],
        otherQuestionText: '',
        allowOthers: false,
      }
      target = 'questions'
    }
    state.contents[page][target].push(data)
    this.setState(state)
    // console.log('state', state)
  }

  deleteSubItem(page, target, index) {
    // console.log('page', page)
    // console.log('index', index)
    const state = this.state
    state.contents[page][target].splice(index, 1)
    this.setState(state)
    // console.log('state', state)
  }

  updatePickerChoicesText(value, page, pageTarget, index, indexTarget, subIndex) {
    const state = this.state
    state.contents[page][pageTarget][index][indexTarget][subIndex] = value
    this.setState(state)
    // console.log('state', state)
  }

  addPickerChoice(page, index) {
    const state = this.state
    state.contents[page]['questions'][index]['choices'].push('')
    this.setState(state)
    // console.log('state', state)
  }

  deletePickerChoice(page, index, subIndex) {
    const state = this.state
    state.contents[page]['questions'][index]['choices'].splice(subIndex, 1)
    this.setState(state)
    // console.log('state', state)
  }

  updateAllowOthers(page, index, checked) {
    const state = this.state
    state.contents[page]['questions'][index]['allowOthers'] = checked
    this.setState(state)
    // console.log('state', state)
  }

  renderPickerInputChoices(question, page, mainIndex) {
    return (
      <Card>
        {question.choices.map((choice, index) =>
          <Row>
            <Col span={12} style={{ paddingBottom: 10 }}>
              <Input
                value={choice}
                onChange={(e) => this.updatePickerChoicesText(e.target.value, page, 'questions', mainIndex, 'choices', index)}
              />
            </Col>
            <Col span={12} align='right' style={{ paddingBottom: 10 }}>
              {index === 0 ? (
                <div />
              ) : (
                <Button
                  danger
                  onClick={(e) => this.deletePickerChoice(page, mainIndex, index)}
                >
                  ลบตัวเลือก
                </Button>
              )}
            </Col>
          </Row>
        )}
        <Button
          style={{ marginBottom: 10 }}
          onClick={(e) => this.addPickerChoice(page, mainIndex)}
        >
          เพิ่มตัวเลือก
          </Button>
      </Card>
    )
  }

  renderContent(content, page) {
    if (content.contentType === 'Info') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card
            type="inner"
            title={`หน้า ${page + 1}`}
            extra={
              page === 0 ? <div /> : <Button type='primary' danger onClick={(e) => this.deletePage(page, content.contentType)}>ลบหน้า</Button>
            }
          >
            <Row>
              <Col span={24} align='center' style={{ paddingBottom: 10 }}>หน้าสำหรับแจ้งหรืออธิบายข้อมูลทั่วไป</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <Select
                  value={content.contentType}
                  style={{ width: 200 }}
                  onChange={(value) => this.updateContentType(value, page, content.contentText)}
                >
                  {this.selectChoices()}
                </Select>
              </Col>
              <Col span={4} style={{ paddingBottom: 10 }}>เนื้อหา : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <TextArea
                  value={content.contentText}
                  onChange={(e) => this.updateContentText(e.target.value, page)}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Col>
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
            extra={
              page === 0 ? <div /> : <Button type='primary' danger onClick={(e) => this.deletePage(page, content.contentType)}>ลบหน้า</Button>
            }
          >
            <Row>
              <Col span={24} align='center' style={{ paddingBottom: 10 }}>หน้าสำหรับแสดงโจทย์แบบอัตนัย</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <Select
                  value={content.contentType}
                  style={{ width: 200 }}
                  onChange={(value) => this.updateContentType(value, page, content.contentText)}
                >
                  {this.selectChoices()}
                </Select>
              </Col>
              <Col span={4} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <TextArea
                  value={content.contentText}
                  onChange={(e) => this.updateContentText(e.target.value, page)}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Col>
              <Col span={24}>
                {content.questions.map((question, index) =>
                  <Card size="small">
                    <Row>
                      <Col span={4} style={{ paddingBottom: 10 }}>คำถามที่ {index + 1} : </Col>
                      <Col span={20} style={{ paddingBottom: 10 }}>
                        <Input
                          value={question.questionText}
                          onChange={(e) => this.updateSubText(e.target.value, page, 'questions', index, 'questionText')}
                        />
                      </Col>
                      <Col span={4} style={{ paddingBottom: 10 }} />
                      <Col span={20} style={{ paddingBottom: 10 }}>
                        <Input
                          placeholder="ผู้ใช้จะตอบคำถามนี้ด้วยการพิมพ์"
                          disabled
                        />
                      </Col>
                      {index === 0 ? (
                        <div />
                      ) : (
                        <Col span={24} align='right' style={{ paddingBottom: 10 }}>
                          <Button danger onClick={(e) => this.deleteSubItem(page, 'questions', index)}>ลบคำถาม</Button>
                        </Col>
                      )}
                    </Row>
                  </Card>
                )}
                <Row align='center' style={{ paddingTop: 10 }}>
                  <Button onClick={(e) => this.addSubItem(content.contentType, page)}>
                    เพิ่มคำถาม
                  </Button>
                </Row>
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
            extra={
              page === 0 ? <div /> : <Button type='primary' danger onClick={(e) => this.deletePage(page, content.contentType)}>ลบหน้า</Button>
            }
          >
            <Row>
              <Col span={24} align='center' style={{ paddingBottom: 10 }}>หน้าสำหรับแสดงโจทย์แบบปรนัย</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <Select
                  value={content.contentType}
                  style={{ width: 200 }}
                  onChange={(value) => this.updateContentType(value, page, content.contentText)}
                >
                  {this.selectChoices()}
                </Select>
              </Col>
              <Col span={4} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <TextArea
                  value={content.contentText}
                  onChange={(e) => this.updateContentText(e.target.value, page)}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Col>
              <Col span={24}>
                {content.choices.map((choice, index) =>
                  <Card size="small">
                    <Row>
                      <Col span={4} style={{ paddingBottom: 10 }}>ตัวเลือกที่ {index + 1} : </Col>
                      <Col span={20} style={{ paddingBottom: 10 }}>
                        <Input
                          value={choice.choiceText}
                          onChange={(e) => this.updateSubText(e.target.value, page, 'choices', index, 'choiceText')}
                        />
                      </Col>
                      <Col span={4} style={{ paddingBottom: 10 }}>คะแนนตัวเลือกที่ {index + 1} : </Col>
                      <Col span={20} style={{ paddingBottom: 10 }}>
                        <Input
                          type='number'
                          value={choice.value}
                          style={{ width: '50%' }}
                          onChange={(e) => this.updateSubText(e.target.value, page, 'choices', index, 'value')}
                        />
                      </Col>
                      {index <= 1 ? (
                        <div />
                      ) : (
                        <Col span={24} align='right' style={{ paddingBottom: 10 }}>
                          <Button danger onClick={(e) => this.deleteSubItem(page, 'choices', index)}>ลบตัวเลือก</Button>
                        </Col>
                      )}
                    </Row>
                  </Card>
                )}
                <Row align='center' style={{ paddingTop: 10 }}>
                  <Button onClick={(e) => this.addSubItem(content.contentType, page)}>
                    เพิ่มตัวเลือก
                  </Button>
                </Row>
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
            extra={
              page === 0 ? <div /> : <Button type='primary' danger onClick={(e) => this.deletePage(page, content.contentType)}>ลบหน้า</Button>
            }
          >
            <Row>
              <Col span={24} align='center' style={{ paddingBottom: 10 }}>หน้าสำหรับแสดงโจทย์ที่ตอบด้วยการเลือกตัวเลือกใน Dropdown</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <Select
                  value={content.contentType}
                  style={{ width: 200 }}
                  onChange={(value) => this.updateContentType(value, page, content.contentText)}
                >
                  {this.selectChoices()}
                </Select>
              </Col>
              <Col span={4} style={{ paddingBottom: 10 }}>โจทย์ : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <TextArea
                  value={content.contentText}
                  onChange={(e) => this.updateContentText(e.target.value, page)}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Col>
              <Col span={24}>
                {content.questions.map((question, index) =>
                  <Card size="small">
                    <Row>
                      <Col span={5} style={{ paddingBottom: 10 }}>คำถามที่ {index + 1} : </Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>
                        <Input
                          value={question.questionText}
                          onChange={(e) => this.updateSubText(e.target.value, page, 'questions', index, 'questionText')}
                        />
                      </Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>กลุ่มตัวเลือก</Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>
                        {this.renderPickerInputChoices(question, page, index)}
                      </Col>
                      <Col span={5} style={{ paddingBottom: 10 }}>สามารถตอบนอกเหนือจากตัวเลือก</Col>
                      <Col span={19} style={{ paddingBottom: 10 }}>
                        <Switch onChange={(checked, e) => this.updateAllowOthers(page, index, checked)} />
                      </Col>
                      {!!(question.allowOthers) ? (
                        <Col span={24}>
                        <Row>
                          <Col span={5} style={{ paddingBottom: 10 }}>คำถามสำหรับคำตอบอื่นๆ</Col>
                          <Col span={19} style={{ paddingBottom: 10 }}>
                            <Input
                              value={question.otherQuestionText}
                              onChange={(e) => this.updateSubText(e.target.value, page, 'questions', index, 'otherQuestionText')}
                            />
                          </Col>
                        </Row>
                        </Col>
                      ) : (
                        <div />
                      )}
                      {index === 0 ? (
                        <div />
                      ) : (
                        <Col span={24} align='right' style={{ paddingBottom: 10 }}>
                          <Button danger onClick={(e) => this.deleteSubItem(page, 'questions', index)}>ลบคำถาม</Button>
                        </Col>
                      )}
                    </Row>
                  </Card>
                )}
                <Row align='center' style={{ paddingTop: 10 }}>
                  <Button onClick={(e) => this.addSubItem(content.contentType, page)}>
                    เพิ่มคำถาม
                  </Button>
                </Row>
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
            extra={
              page === 0 ? <div /> : <Button type='primary' danger onClick={(e) => this.deletePage(page, content.contentType)}>ลบหน้า</Button>
            }
          >
            <Row>
              <Col span={24} align='center' style={{ paddingBottom: 10 }}>หน้าสำหรับการเลือกปุ่มอารมณ์ที่กำลังรู้สึก</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>ประเภท : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <Select
                  value={content.contentType}
                  style={{ width: 200 }}
                  onChange={(value) => this.updateContentType(value, page, content.contentText)}
                >
                  {this.selectChoices()}
                </Select>
              </Col>
              <Col span={4} style={{ paddingBottom: 10 }}>เนื้อหา : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <TextArea
                  value={content.contentText}
                  onChange={(e) => this.updateContentText(e.target.value, page)}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      )
    } else if (content.contentType === 'EmotionRating') {
      return (
        <Col span={24} style={{ padding: 10 }}>
          <Card
            type="inner"
            title={`หน้า ${page + 1} (หากต้องการลบหน้านี้ ให้แก้ไขประเภทหน้า ${page} หรือ ลบหน้า ${page} )`}
          >
            <Row>
              <Col span={24} align='center' style={{ paddingBottom: 10 }}>หน้าสำหรับการถามถึงระดับของอารมณ์ที่เลือกไว้ในหน้า {page}</Col>
              <Col span={4} style={{ paddingBottom: 10 }}>คำถาม : </Col>
              <Col span={20} style={{ paddingBottom: 10 }}>
                <TextArea
                  value={content.contentText}
                  onChange={(e) => this.updateContentText(e.target.value, page)}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      )
    }
  }

  async uploadProgram() {
    const { programName, contents } = this.state
    var newContents = contents
    for (let i = 0; i < contents.length; i++) {
      newContents[i]['contentId'] = String(i + 1)
      if(newContents[i]['contentType'] === 'PickerInput') {
        for(let j = 0; j < newContents[i]['questions'].length; j++) {
          if(newContents[i]['questions'][j]['allowOthers']) {
            newContents[i]['questions'][j]['choices'].push('อื่นๆ')
          }
        }
      } else if (newContents[i]['contentType'] === 'EmotionRating') {
        newContents[i]['answerIdRef'] = String(i)
      }
    }
    const currentTime = firebase.firestore.Timestamp.fromDate(new Date());
    var formarProgramName = programName.split(' ').join('_')
    const programData = {
      programName: formarProgramName,
      contents: newContents,
      isActive: false,
      createdAt: currentTime,
      editedAt: currentTime,
    }
    // console.log('programData', programData)
    db.collection('extraProgram').doc('archivement').collection('all').doc(formarProgramName).set(programData)
  }

  render() {
    return (
      <Row className="App" style={{ backgroundColor: '#7BDAF8' }}>
        <Col span={4} style={{ backgroundColor: 'white' }}>
          <MenuBar defaultSelectedKeys={['3']} currentPage={'/create-program'} />
        </Col>
        <Col span={20} style={{ minHeight: '100vh' }}>
          <Row style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
            <Col span={24} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
              <Row style={{ justifyContent: 'space-between', paddingInline: 10, paddingTop: 10, paddingBottom: 30 }}>
                <h2>สร้างโปรแกรมเสริม</h2>
                <Link to={{ pathname: '/program-storage' }}>
                  <Button
                    type='primary'
                    onClick={(e) => this.uploadProgram()}
                  >
                    บันทึก
                  </Button>
                </Link>
              </Row>
              <Row style={{ padding: 10 }}>
                <Col span={3} style={{ alignSelf: 'center' }}>
                  <div>ชื่อโปรแกรม : </div>
                </Col>
                <Col span={21} style={{ alignSelf: 'center', paddingLeft: 10 }}>
                  <Input
                    placeholder="โปรดตั้งชื่อ"
                    value={this.state.programName}
                    onChange={(e) => this.updateProgramName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                {this.state.contents.map((content, index) =>
                  <Col span={24}>
                    <Row>
                      {this.renderContent(content, index)}
                    </Row>
                  </Col>
                )}
              </Row>
              <Row align='center' style={{ paddingTop: 10 }}>
                <Button type='primary' onClick={(e) => this.addPage()}>
                  เพิ่มหน้า
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default EditProgramPage;