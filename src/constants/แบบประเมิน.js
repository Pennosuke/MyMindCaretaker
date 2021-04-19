export const prologue = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: 'สวัสดีค่ะน้องๆ ยินดีต้อนรับน้องๆทุกคนสู่ MUMyMind Application\nซึ่งสร้างโดยทีมอาจารย์พยาบาลจากคณะพยาบาลศาสตร์ มหาวิทยาลัยมหิดลและผู้เชี่ยวชาญด้านปัญญาประดิษฐ์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์\nเพื่อประเมินสุขภาวะทางจิตใจและจัดกิจกรรมส่งเสริมสุขภาวะทางจิตใจให้กับน้องๆนักเรียนที่น่ารัก นะคะ\nเริ่มกันเลยไหมคะ?'
  },
  {
    contentId: '2',
    contentType: 'EmotionButtons',
    contentText: 'ก่อนอื่น อยากรู้ว่าตอนนี้น้องๆ รู้สึกอย่างไรกันบ้างคะ\nช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '3',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '2'
  },
  {
    contentId: '4',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'มีความรู้สึกอย่างอื่นเพิ่มเติมกันอีกไหมคะ น้องๆ เขียนบอกพี่ได้เลยค่ะ',
        placeholderText: 'เขียนใส่ในช่องนี้ได้เลย',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '5',
    contentType: 'Info',
    contentText: '    ก่อนอื่น จะขอให้น้องๆนักเรียนทำแบบประเมินชุดหนึ่งซึ่งใช้ในการประเมินสุขภาวะทางจิตใจของน้องๆ จะมีข้อคำถามต่างๆ ขอให้น้องๆตอบตามความเป็นจริงที่ตรงกับสภาวะและความรู้สึกของน้องๆมากที่สุด ไม่มีคำตอบใดที่ถูกหรือผิดคำตอบที่ได้จะเก็บเป็นความลับ การประมวลผลจะเป็นไปเพื่อประโยชน์ต่อสุขภาวะทางจิตใจของน้องๆ เท่านั้น\n\nแบบประเมินมีจำนวน 3 ชุดใช้เวลาในการตอบคำถามทั้งหมดประมาณ 20 นาที ได้แก่\n1. แบบประเมินสุขภาวะทางจิตใจ จำนวน 18 ข้อ\n2. แบบประเมินการมีสติ จำนวน 15 ข้อ\n3. แบบประเมินความเครียด วิตกกังวล และซึมเศร้า จำนวน 21 ข้อ'
  },
]

export const SPWB = [
  {
    contentId: '0',
    contentType: 'Info',
    contentText: 'แบบวัดการรับรู้สุขภาวะทางจิตใจ\n\nข้อความต่อไปนี้เป็นข้อความเกี่ยวกับความรู้สึกและความคิดของคุณ\nกรุณาเลือกตัวเลือกที่ตรงกับที่คุณคิดหรือรู้สึกของคุณมากที่สุด'
  },
  {
    contentId: '1',
    contentType: 'SelectionGroup',
    contentText: '1. บุคคลอื่นมีอิทธิพลต่อความคิดของฉันเป็นอย่างมาก',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 6
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 1
      }
    ]
  },
  {
    contentId: '2',
    contentType: 'SelectionGroup',
    contentText: '2.โดยทั่วไปแล้ว ฉันคิดว่าฉันสามารถจัดการกับสถานการณ์ที่ฉันประสบอยู่ได้',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentId: '3',
    contentType: 'SelectionGroup',
    contentText: '3. ฉันคิดว่าประสบการณ์ใหม่ๆเป็นสิ่งสำคัญที่ท้าทายในการมองตนเองและการมองโลก',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentId: '4',
    contentType: 'SelectionGroup',
    contentText: '4. การรักษาสัมพันธภาพกับผู้อื่นให้แนบแน่นเป็นความยากลำบากและอึดอัดสำหรับฉัน',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 6
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 1
      }
    ]
  },
  {
    contentId: '5',
    contentType: 'SelectionGroup',
    contentText: '5.ฉันใช้ชีวิตไปวันๆและไม่คิดอะไรเกี่ยวกับอนาคตเลย',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 6
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 1
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '6.เมื่อฉันมองดูเรื่องราวในชีวิตของฉัน ฉันพอใจกับสิ่งที่เกิดขึ้นมา',
    contentId: '6',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '7.ฉันเชื่อมั่นในความคิดเห็นของฉัน ถึงแม้ว่ามันจะขัดแย้งกับความคิดเห็นของคนในสังคม',
    contentId: '7',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '8.บ่อยครั้งการทำบทบาทหน้าที่ในชีวิตทำให้ฉันรู้สึกแย่',
    contentId: '8',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 6
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 1
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '9.สำหรับฉัน ชีวิตคือกระบวนการเรียนรู้การเปลี่ยนแปลง และการเติบโตอย่างต่อเนื่อง',
    contentId: '9',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '10.บุคคลอื่นมองว่าฉันเป็นผู้ให้และเต็มใจที่จะใช้เวลากับผู้อื่น',
    contentId: '10',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '11.คนบางคนมักจะขาดเป้าหมายในชีวิตแต่ฉันไม่ใช่คนเหล่านั้น',
    contentId: '11',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '12.ฉันชอบลักษณะบุคลิกภาพโดยส่วนใหญ่ของฉัน',
    contentId: '12',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '13.ฉันตัดสินตัวเองจากสิ่งที่ฉันคิดว่ามันเป็นสิ่งสำคัญ ไม่ใช่ตัดสินตามค่านิยมของคนอื่น',
    contentId: '13',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '14.ฉันสามารถจัดการกับหน้าที่รับผิดชอบหลายๆอย่างในชีวิตประจำวันของฉันได้เป็นอย่างดี',
    contentId: '14',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '15.ฉันละทิ้งความพยายามที่จะปรับปรุงหรือเปลี่ยนแปลงตัวเองมานานแล้ว',
    contentId: '15',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 6
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 1
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '16.ฉันไม่เคยสัมผัสกับสัมพันธภาพที่อบอุ่นและน่าไว้วางใจกับบุคคลอื่น',
    contentId: '16',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 6
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 1
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '17.บางครั้งฉันรู้สึกว่าฉันได้ทำทุกอย่างที่ควรทำแล้วในชีวิต',
    contentId: '17',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 1
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '18.ฉันรู้สึกผิดหวังกับความสำเร็จในชีวิตจากหลายๆเหตุการณ์ของฉัน',
    contentId: '18',
    choices: [
      {
        choiceText: 'ไม่เห็นด้วยอย่างยิ่ง',
        value: 6
      },
      {
        choiceText: 'ไม่เห็นด้วยมาก',
        value: 5
      },
      {
        choiceText: 'ไม่เห็นด้วยบางครั้ง',
        value: 4
      },
      {
        choiceText: 'เห็นด้วยบางครั้ง',
        value: 3
      },
      {
        choiceText: 'เห็นด้วยมาก',
        value: 2
      },
      {
        choiceText: 'เห็นด้วยอย่างยิ่ง',
        value: 1
      }
    ]
  }
]

export const awareness = [
  {
    contentId: '0',
    contentType: 'Info',
    contentText: 'แบบวัดการมีสติ\nประโยคต่อไปนี้กล่าวถึงประสบการณ์ในชีวิตประจำวันของคุณ\nกรุณา ระบุว่าคุณมีประสบการณ์ดังกล่าวมากหรือน้อยเพียงใด\nโปรดเลือกคำตอบที่แสดงประสบการณ์จริง ๆ ของคุณ\nและไม่เลือกคำตอบที่คุณคิดว่าประสบการณ์ของคุณควรจะเป็นเช่นนั้น'
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '1.ฉันมักมีอารมณ์บางอย่างและไม่รู้สึกตัวจนกระทั่งเวลาผ่านไปพอสมควรแล้ว',
    contentId: '1',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '2.ฉันทำของแตกหักหรือหกหล่นเพราะขาดความระมัดระวัง ไม่ตั้งอกตั้งใจหรือกำลังคิดถึงสิ่งอื่นอยู่',
    contentId: '2',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '3. ฉันมีความยากลำบากในการทำให้จิตใจอยู่กับปัจจุบัน',
    contentId: '3',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '4.ฉันมักจะเดินเร็วๆเพื่อรีบไปให้ถึงจุดหมายโดยไม่ใส่ใจในประสบการณ์ที่เกิดขึ้นระหว่างทาง',
    contentId: '4',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '5.ฉันมักจะไม่สังเกตความตึงเครียดหรืออึดอัดในร่างกายจนกระทั่งมันมีผลต่อร่างกาย',
    contentId: '5',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '6.ฉันลืมชื่อผู้คนเกือบจะทันทีที่ถูกแนะนำให้รู้จักเป็นครั้งแรก',
    contentId: '6',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '7.ฉันมักทำสิ่งต่างๆ แบบอัตโนมัติโดยไม่ได้ตระหนักถึงสิ่งที่ทำอยู่มากนัก',
    contentId: '7',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '8.ฉันทำสิ่งต่างๆอย่างรีบร้อนโดยปราศจากความตั้งใจในสิ่งที่ทำอย่างจริงจัง',
    contentId: '8',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '9.ฉันมักมุ่งทำงานที่ตั้งใจให้สำเร็จอย่างมากจนทำให้สูญเสียความสัมพันธ์ต่อสิ่งที่ทำอยู่ในปัจจุบัน',
    contentId: '9',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '10. การทำงานหรือการทำสิ่งต่างๆของฉันเกิดขึ้นโดยอัตโนมัติขาดความตั้งใจในสิ่งที่ทำอยู่',
    contentId: '10',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '11. ฉันมักจะทำอะไรหลายๆสิ่งในเวลาเดียวกัน',
    contentId: '11',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '12. ฉันไปในที่ต่างๆโดยไม่รู้ตัวว่าฉันไปถึงที่นั่นได้อย่างไร',
    contentId: '12',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '13.ฉันพบว่าตัวเองมักหมกมุ่นอยู่กับอดีตหรืออนาคต',
    contentId: '13',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '14.ฉันพบว่าตัวเองทำสิ่งต่างๆ โดยปราศจากความตั้งใจ',
    contentId: '14',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '15.ฉันกินของจุบจิบโดยไม่รู้สึกตัวว่ากำลังกินอยู่',
    contentId: '15',
    choices: [
      {
        choiceText: 'เกือบตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'บ่อยมาก',
        value: 2
      },
      {
        choiceText: 'ค่อนข้างบ่อย',
        value: 3
      },
      {
        choiceText: 'ค่อนข้างน้อย',
        value: 4
      },
      {
        choiceText: 'ไม่บ่อยเลย',
        value: 5
      },
      {
        choiceText: 'เกือบไม่เคยเลย',
        value: 6
      }
    ]
  }
]

export const DASS = [
  {
    contentType: 'Info',
    contentText: 'แบบสอบถามวัดภาวะสุขภาพจิต\nโปรดอ่านข้อความในแต่ละข้อและเลือกตัวเลือกให้ตรงกับท่านมากที่สุด ในช่วงสัปดาห์ที่ผ่านมา\nทั้งนี้ไม่มีคำตอบที่ถูกหรือผิด ท่านไม่ควรใช้เวลามากนักในแต่ละข้อความ'
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '1.ฉันรู้สึกยากที่จะสงบจิตใจลง',
    contentId: '1',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '2.ฉันรู้สึกปากแห้งคอแห้ง',
    contentId: '2',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '3.ฉันแทบไม่รู้สึกอะไรดีๆ เลย',
    contentId: '3',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '4.ฉันมีอาการหายใจผิดปกติ (เช่น หายใจเร็วเกินเหตุ หายใจไม่ทันแม้ว่าจะไม่ได้ออกแรง)',
    contentId: '4',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '5.ฉันพบว่ามันยากที่จะคิดริเริ่มทำสิ่งใดสิ่งหนึ่ง',
    contentId: '5',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '6.ฉันมีแนวโน้มที่จะตอบสนองเกินเหตุต่อสถานการณ์',
    contentId: '6',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '7.ฉันรู้สึกว่าร่างกายบางส่วนสั่นผิดปกติ (เช่น มือสั่น)',
    contentId: '7',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '8.ฉันรู้สึกเสียพลังงานไปมากกับการวิตกกังวล',
    contentId: '8',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '9.ฉันรู้สึกกังวลกับเหตุการณ์ที่อาจทำให้ฉันรู้สึกตื่นกลัวและกระทำบางสิ่งที่น่าอับอาย',
    contentId: '9',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '10.ฉันรู้สึกไม่มีเป้าหมายในชีวิต',
    contentId: '10',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '11.ฉันรู้สึกกระวนกระวายใจ',
    contentId: '11',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '12.ฉันรู้สึกยากที่จะผ่อนคลายตัวเอง',
    contentId: '12',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '13.ฉันรู้สึกจิตใจเหงาหงอยเศร้าซึม',
    contentId: '13',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '14.ฉันรู้สึกทนไม่ได้เวลามีอะไรมาขัดขวางสิ่งที่ฉันกำลังทำอยู่',
    contentId: '14',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '15.ฉันรู้สึกกังวลกับเหตุการณ์ที่อาจทำให้ฉันรู้สึกตื่นกลัวและกระทำบางสิ่งที่น่าอับอาย',
    contentId: '15',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '16.ฉันรู้สึกไม่มีความกระตือรือร้นต่อสิ่งใด',
    contentId: '16',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '17.ฉันรู้สึกเป็นคนไม่มีคุณค่า',
    contentId: '17',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '18.ฉันรู้สึกค่อนข้างฉุนเฉียวง่าย',
    contentId: '18',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '19.ฉันรับรู้ถึงการทำงานของหัวใจแม้ในตอนที่ฉันไม่ได้ออกแรง (เช่น รู้สึกว่าหัวใจเต้นเร็วขึ้นหรือเต้นไม่เป็นจังหวะ)',
    contentId: '19',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '20.ฉันรู้สึกกลัวโดยไม่มีเหตุผล',
    contentId: '20',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      '21.ฉันรู้สึกว่าชีวิตไม่มีความหมาย',
    contentId: '21',
    choices: [
      {
        choiceText: 'ไม่ตรงกับฉันเลย',
        value: 0
      },
      {
        choiceText: 'ตรงกับฉันบ้าง หรือเกิดขึ้นเป็นบางครั้ง',
        value: 1
      },
      {
        choiceText: 'ตรงกับฉัน หรือเกิดขึ้นบ่อย',
        value: 2
      },
      {
        choiceText: 'ตรงกับฉันมาก หรือเกิดขึ้นบ่อยมากที่สุด',
        value: 3
      },
    ]
  }
]

export const Q8 = [
  {
    contentType: 'SelectionGroup',
    contentText:
      'ในเดือนที่ผ่านมารวมวันนี้...\nคิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า?',
    contentId: '1',
    choices: [
      {
        choiceText: 'ไม่ใช่',
        value: 0
      },
      {
        choiceText: 'ใช่',
        value: 1
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ในเดือนที่ผ่านมารวมวันนี้...\nอยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ?',
    contentId: '2',
    choices: [
      {
        choiceText: 'ไม่ใช่',
        value: 0
      },
      {
        choiceText: 'ใช่',
        value: 2
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ในเดือนที่ผ่านมารวมวันนี้...\nคิดเกี่ยวกับการฆ่าตัวตาย?',
    contentId: '3',
    choices: [
      {
        choiceText: 'ไม่ใช่',
        value: 0
      },
      {
        choiceText: 'ใช่',
        value: 6
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ท่านสามารถควบคุมความอยากฆ่าตัวตายที่ท่านคิดอยู่นั้นได้หรือไม่\nหรือบอกไหมว่าคงจะไม่ทำตามความคิดนั้นในขณะนี้?',
    contentId: '4',
    choices: [
      {
        choiceText: 'ได้',
        value: 0
      },
      {
        choiceText: 'ไม่ได้',
        value: 8
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ในเดือนที่ผ่านมารวมวันนี้...\nมีแผนการที่จะฆ่าตัวตาย?',
    contentId: '5',
    choices: [
      {
        choiceText: 'ไม่ใช่',
        value: 0
      },
      {
        choiceText: 'ใช่',
        value: 8
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ในเดือนที่ผ่านมารวมวันนี้...\nได้เตรียมการที่จะทำร้ายตนเอง หรือ เตรียมการจะฆ่าตัวตายโดยตั้งใจว่าจะให้ตายจริง ๆ ?',
    contentId: '6',
    choices: [
      {
        choiceText: 'ไม่ใช่',
        value: 0
      },
      {
        choiceText: 'ใช่',
        value: 9
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ในเดือนที่ผ่านมารวมวันนี้...\nได้ทำให้ตนเองบาดเจ็บ แต่ไม่ตั้งใจที่จะทำให้เสียชีวิต?',
    contentId: '7',
    choices: [
      {
        choiceText: 'ไม่ใช่',
        value: 0
      },
      {
        choiceText: 'ใช่',
        value: 4
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ในเดือนที่ผ่านมารวมวันนี้...\nได้พยายามฆ่าตัวตายโดยคาดหวัง/ตั้งใจที่จะให้ตาย?',
    contentId: '8',
    choices: [
      {
        choiceText: 'ไม่ใช่',
        value: 0
      },
      {
        choiceText: 'ใช่',
        value: 10
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ในเดือนที่ผ่านมารวมวันนี้...\nท่านเคยพยายามฆ่าตัวตาย?',
    contentId: '9',
    choices: [
      {
        choiceText: 'ไม่ใช่',
        value: 0
      },
      {
        choiceText: 'ใช่',
        value: 4
      },
    ]
  },
  {
    contentType: 'SelectionGroup',
    contentText:
      'ถ้าน้องต้องการความช่วยเหลือ พี่สามารถติดต่อให้ผู้เชี่ยวชาญโทรหา เพื่อพูดคุยให้การช่วยเหลือให้น้องมีสุขภาพจิตที่ดีขึ้นโดยเร็วได้นะคะ\n\nไม่ทราบว่าน้องจะยินดีที่จะให้ผู้เชี่ยวชาญสามารถโทรหาน้องได้หรือไม่คะ? ถ้าน้องยินดี พี่จะให้ผู้เชี่ยวชาญรีบติดต่อน้องโดยเร็วนะคะ',
    contentId: 'contact',
    choices: [
      {
        choiceText: 'ยินดี',
        value: true
      },
      {
        choiceText: 'ไม่ยินดี',
        value: false
      },
    ]
  },
]