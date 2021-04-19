export const Program1 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    หลังจากรู้ขั้นตอนของโปรแกรมกันแล้ว เรามาเรียนรู้และฝึกฝนกันเลยนะคะ\n\n    ขอต้อนรับน้องๆ ทุกคนเข้าสู่โปรแกรมที่ 1 “หายใจคลายเครียด” อยากรู้แล้วใช่ไหมคะว่าลมหายใจของเรานั้น ช่วยให้เรามีสภาวะทางจิตใจที่ดีขึ้นได้อย่างไร ก่อนอื่น มาชมวิดีโอ “ประโยชน์ที่น่าทึ่งของการหายใจอย่างถูกวิธี” กันก่อนค่ะ อ้อ! อยากให้ตั้งใจดูด้วยนะคะ เพราะเราจะมีคำถามถามน้องๆ ด้วยค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: 'ประโยชน์ที่น่าทึ่งของการหายใจอย่างถูกวิธี',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.1.mp4?alt=media&token=4937fed9-6dc0-4f2e-947f-2985ff6e1a60'},
    minTime: 0
  },
  {
    contentId: '3',
    contentType: 'EmotionButtons',
    contentText: 'ชมวิดีโอกันแล้ว น้อง ๆ รู้สึกอย่างไรกันบ้างคะ ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '4',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '3'
  },
  {
    contentId: '5',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'มีความรู้สึกอย่างอื่นเพิ่มเติมกันอีกไหมคะ น้องๆ เขียนบอกพี่ได้เลยค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '6',
    contentType: 'Info',
    contentText: 'ขอให้น้องๆ มาทบทวนความรู้โดยการตอบคำถามกันนะคะ เพื่อจะได้รู้ว่าน้องๆ เข้าใจเรื่องราวจาก VDO มากน้อยแค่ไหนค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '7',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่1 การหายใจอย่างถูกวิธีมีลักษณะอย่างไร (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. สูดลมหายใจเข้าสั้น ๆ พุงแฟบ ปล่อยลมหายใจออกสั้น ๆ พุงป่อง',
        value: 0
      },
      {
        choiceText: 'ข. สูดลมหายใจเข้าสั้น ๆ พุงแฟบ ปล่อยลมหายใจออกยาว ๆ พุงป่อง',
        value: 0
      },
      {
        choiceText: 'ค. สูดลมหายใจเข้าลึก ๆ พุงป่อง ปล่อยลมหายใจออกยาว ๆ พุงแฟบ',
        value: 1
      },
      {
        choiceText: 'ง. สูดลมหายใจเข้าลึก ๆ พุงป่อง ปล่อยลมหายใจออกสั้น ๆ พุงแฟบ',
        value: 0
      },
    ]
  },
  {
    contentId: '8',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่2 ข้อใด ไม่ใช่ ประโยชน์ของการหายใจอย่างถูกวิธี(1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. ช่วยสลายความเครียด',
        value: 0
      },
      {
        choiceText: 'ข. กระตุ้นความดันโลหิตให้สูงขึ้น',
        value: 1
      },
      {
        choiceText: 'ค. ผ่อนคลายและจิตใจสงบ',
        value: 0
      },
      {
        choiceText: 'ง. ออกซิเจนไปเลี้ยงสมองมากขึ้น',
        value: 0
      },
    ]
  },
  {
    contentId: '9',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่3 ข้อใด ไม่ถูกต้อง เกี่ยวกับการหายใจคลายเครียด (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. ปล่อยสารคอร์ติซอลมากขึ้น ทำให้ร่างกายสงบ',
        value: 1
      },
      {
        choiceText: 'ข. ปล่อยสารเอ็นดอร์ฟิน ช่วยให้ร่างกายมีความสุข',
        value: 0
      },
      {
        choiceText: 'ค. ระบบประสาทที่เกี่ยวกับการผ่อนคลายของร่างกายทำงานดีขึ้น',
        value: 0
      },
      {
        choiceText: 'ง. อัตราการเต้นของหัวใจลดลง ผ่อนคลายมากขึ้น',
        value: 0
      },
    ]
  },
  {
    contentId: '10',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่4 ประโยชน์ของการหายใจอย่างถูกวิธีคือ (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. เพิ่มพลังงานในร่างกาย ทำให้อุณหภูมิของร่างกายสูงขึ้น',
        value: 0
      },
      {
        choiceText: 'ข. เพิ่มอัตราการเต้นของหัวใจ ทำให้เราตื่นเต้น และร่าเริงตลอดเวลา',
        value: 0
      },
      {
        choiceText: 'ค. ปริมาณคาร์บอนไดออกไซด์ไปยังอวัยวะที่ใช้ในการย่อยอาหารมากขึ้น',
        value: 0
      },
      {
        choiceText: 'ง. ภูมิคุ้มกันของร่างกายดีขึ้น',
        value: 1
      },
    ]
  },
  {
    contentId: '11',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่5 ข้อดีของการหายใจอย่างถูกวิธีต่อระบบไหลเวียนเลือด (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. เพิ่มออกซิเจนในเลือด',
        value: 1
      },
      {
        choiceText: 'ข. เพิ่มจำนวนเม็ดเลือดแดงในเลือด',
        value: 0
      },
      {
        choiceText: 'ค. เพิ่มคาร์บอนไดออกไซด์ในเลือด',
        value: 0
      },
      {
        choiceText: 'ง. เพิ่มสารต้านอนุมูลอิสระในเลือด',
        value: 1
      },
    ]
  },
  {
    contentId: '12',
    contentType: 'QuestionValidate',
    contentTextPass: 'เก่งมากค่ะ ตอบถูกทุกข้อเลยค่ะ',
    contentTextFail: 'เสียดายจังยังมีข้อที่ตอบไม่ถูก มาเรียนรู้เพื่อที่จะได้ตอบถูกทุกข้อกันนะคะ พี่มีทางเลือกให้ค่ะ',
    minScore: 5,
    backToVideo: 10,
    backToFirstQuestion: 5,
    answerIdRef: [
      '7',
      '8',
      '9',
      '10',
      '11'
    ],
    /*
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '13',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'นอกเหนือจากคำถามของพี่ น้องคิดว่า น้องได้ประโยชน์อะไรอีกบ้างจากการหายใจอย่างถูกวิธีค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '14',
    contentType: 'Info',
    contentText: 'เมื่อน้องๆ ได้ทราบประโยชน์ที่น่าทึ่งของการหายใจอย่างถูกวิธีกันแล้ว ต่อไปเรามาเรียนรู้กันต่อว่า การหายใจช่วยสลายความเครียดได้อย่างไร มาชมวิดีโอกันค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '15',
    contentType: 'Video',
    contentText: 'หายใจสลายเครียด',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.2.mp4?alt=media&token=5f1a7535-76b2-4bb6-8535-acdaed3d4375'},
    minTime: 0
  },
  {
    contentId: '16',
    contentType: 'TextInput',
    contentText: 'เมื่อน้องรู้แล้วว่าการหายใจมีประโยชน์กับน้องอย่างไร คงอยากฝึกกันแล้วใช่ไหมคะ แต่ก่อนที่จะฝึกกัน ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '17',
    contentType: 'EmotionButtons',
    contentText: 'ชมวิดีโอกันแล้ว น้อง ๆ รู้สึกอย่างไรกันบ้างคะ ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '18',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '17'
  },
  {
    contentId: '19',
    contentType: 'Video',
    contentText: 'เอาล่ะค่ะ พร้อมฝึกกันแล้วนะคะ\nต่อไปนี้ ขอให้น้องชมวิดีโอ “การหายใจอย่างถูกวิธี” และฝึกไปพร้อมๆ กันค่ะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.3.mp4?alt=media&token=7f323e23-8ca6-439b-b600-46a854732191'},
    minTime: 0
  },
  {
    contentId: '20',
    contentType: 'Info',
    contentText: 'เมื่อน้องๆ ได้ฝึกกันแล้ว ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจและเลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด เลือกได้ไม่เกิน 3 ภาพค่ะ เรามาดูกันนะคะว่าสิ่งเหล่านี้จะเป็นอย่างไร แตกต่างจากเดิมกันหรือเปล่าค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '21',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '22',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '23',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '22'
  },
  {
    contentId: '24',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องๆ ช่วยบอกความคิด/ความรู้สึกที่เกิดขึ้น หลังจากฝึกการหายใจอย่างถูกวิธีด้วยนะคะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '25',
    contentType: 'Info',
    contentText: 'หลังจากนี้ พี่จะให้เวลาน้องๆ 3 วัน ในการเรียนรู้และฝึกฝนตามวิดีโอนะคะ ขอให้น้องๆ ฝึกตาม VDO “การหายใจอย่างถูกวิธี” ทุกวันนะคะ วันละประมาณ 10-15 นาทีนะคะ จะทำให้น้องๆ ได้รับประโยชน์จากการหายใจอย่างถูกวิธีที่สำคัญ อย่าลืมบันทึกความดันโลหิต การเต้นของหัวใจ และ เลือกภาพความรู้สึกที่ตรงกับความรู้สึกของน้องๆ มากที่สุด ก่อนและหลังการฝึกด้วยนะคะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
]

export const Homework1 = [
  {
    contentId: '1',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องๆ วัดความดันโลหิต การเต้นของหัวใจ และบันทึกข้อมูลความดันโลหิตและการเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '2',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
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
    contentType: 'Video',
    contentText: 'เอาล่ะค่ะ พร้อมฝึกกันแล้วนะคะ\nต่อไปนี้ ขอให้น้องชมวิดีโอ “การหายใจอย่างถูกวิธี” และฝึกไปพร้อมๆ กันค่ะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.3.mp4?alt=media&token=7f323e23-8ca6-439b-b600-46a854732191'},
    minTime: 0
  },
  {
    contentId: '5',
    contentType: 'Info',
    contentText: 'เมื่อน้องๆ ได้ฝึกฝนกันแล้ว น้องๆช่วยวัดความดันโลหิต การเต้นของหัวใจ และเลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด 3 ภาพ เหมือนเช่นเคยนะคะ มาดูซิว่าสิ่งต่างๆเหล่านี้เปลี่ยนแปลงไปจากเดิมหรือเปล่า',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-04.png`)
    }
    */
  },
  {
    contentId: '6',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '7',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '8',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '7'
  },
]

export const Program2 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: 'สวัสดีค่ะ น้องๆ ได้ฝึกการหายใจอย่างถูกวิธีกันมา 3 วันแล้วนะคะ ได้เรียนรู้ว่าการหายใจอย่างถูกวิธีทำให้เกิดการเปลี่ยนแปลงทางร่างกาย และ ความรู้สึกของเราเองก็เปลี่ยนแปลงไปเช่นกัน ต่อไปเรามาเรียนรู้เกี่ยวกับการรับรู้ความรู้สึกของร่างกายของเรากัน หากเราสามารถรับรู้ได้จะเกิดผลดีกับเราอย่างไร มาเรียนรู้กันนะคะน้องๆ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-04.png`)
    }
    */
  },
  {
    contentId: '2',
    contentType: 'TextInput',
    contentText: 'แต่ก่อนอื่นขอให้น้องๆ วัดความดันโลหิต การเต้นของหัวใจ และบันทึกข้อมูลความดันโลหิตและการเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '3',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '4',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '3'
  },
  {
    contentId: '5',
    contentType: 'Video',
    contentText: 'เอาล่ะค่ะ พร้อมฝึกกันแล้วนะคะ\n ต่อไปนี้ ขอให้น้องๆ ชมวิดีโอและฝึกไปพร้อมๆ กันกับ VDO นี้นะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.4.mp4?alt=media&token=f1fa879b-0dc6-412f-8499-4459f9d9bd50'},
    minTime: 0
  },
  {
    contentId: '6',
    contentType: 'Info',
    contentText: 'เมื่อน้องๆ ได้ฝึกฝนกันแล้ว น้องๆช่วยวัดความดันโลหิต การเต้นของหัวใจ และเลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด 3 ภาพ เหมือนเช่นเคยนะคะ มาดูซิว่าสิ่งต่างๆเหล่านี้เปลี่ยนแปลงไปจากเดิมหรือเปล่า',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-04.png`)
    }
    */
  },
  {
    contentId: '7',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '8',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '9',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '8'
  },
  {
    contentId: '10',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'มีความรู้สึกอย่างอื่นเพิ่มเติมที่น้องๆ อยากจะบอก เขียนเพิ่มเติมได้เลยนะคะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '11',
    contentType: 'Info',
    contentText: 'พี่จะให้เวลาน้อง 3 วัน ในการฝึกรับรู้ความรู้สึกของร่างกายตามวิดีโอนะคะ ขอให้น้องตั้งใจฝึกตาม VDO ทุกวัน น้องจะได้รับประโยชน์จากการฝึกอย่างสม่ำเสมอ ที่สำคัญอย่าลืมบันทึกความดันโลหิต การเต้นของหัวใจ และ เลือกภาพความรู้สึกที่ตรงกับความรู้สึกของน้องมากที่สุด ทั้งก่อนและหลังการฝึกด้วยนะคะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-04.png`)
    }
    */
  },
]

export const Homework2 = [
  {
    contentId: '1',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องๆ วัดความดันโลหิต การเต้นของหัวใจ และบันทึกข้อมูลความดันโลหิตและการเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '2',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
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
    contentType: 'Video',
    contentText: 'เอาล่ะค่ะ พร้อมฝึกกันแล้วนะคะ\n ต่อไปนี้ ขอให้น้องๆ ชมวิดีโอและฝึกไปพร้อมๆ กันกับ VDO นี้นะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.4.mp4?alt=media&token=f1fa879b-0dc6-412f-8499-4459f9d9bd50'},
    minTime: 0
  },
  {
    contentId: '5',
    contentType: 'Info',
    contentText: 'เมื่อน้องๆ ได้ฝึกฝนกันแล้ว น้องๆช่วยวัดความดันโลหิต การเต้นของหัวใจ และเลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด 3 ภาพ เหมือนเช่นเคยนะคะ มาดูซิว่าสิ่งต่างๆเหล่านี้เปลี่ยนแปลงไปจากเดิมหรือเปล่า',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-04.png`)
    }
    */
  },
  {
    contentId: '6',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '7',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '8',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '7'
  },
]

export const Program3 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    น้องๆคะ เป็นอย่างไรกันบ้างคะได้ฝึกฝนการรับรู้ความรู้สึกของร่างกาย เห็นการเปลี่ยนแปลงที่เกิดขึ้นทั้งด้านร่างกายและความรู้สึกกันแล้วนะคะ นั่นคือประโยชน์ที่น้องๆได้รับด้วยตนเองจากการฝึกค่ะ คราวนี้ จะพาน้องๆไปรู้จักกับการตระหนักรู้ในอารมณ์ของตนเอง น้องๆ คงจะแปลกใจว่าการตระหนักรู้ในอารมณ์ของตนเองเป็นอย่างไร ตามพี่มาเลยนะคะ มาชมVDO กันก่อนค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: 'อ้อ! อยากให้ตั้งใจดูด้วยนะคะ เพราะเราจะมีคำถามถามน้องๆ ด้วยนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.5.mp4?alt=media&token=a5783b51-f8f1-499f-8423-2e55a93ba869'},
    minTime: 0
  },
  {
    contentId: '3',
    contentType: 'Info',
    contentText: 'ขอให้น้องๆ มาทบทวนความรู้โดยการตอบคำถามกันนะคะ เพื่อจะได้รู้ว่าน้องๆ เข้าใจเรื่องราวจาก VDO มากน้อยแค่ไหนค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '4',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 1 การตระหนักรู้ในอารมณ์ คือ อะไร (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. เป็นขั้นตอนแรกที่ช่วยให้เราเข้าใจความคิดความรู้สึกของผู้อื่น',
        value: 0
      },
      {
        choiceText: 'ข. เป็นขั้นตอนแรกที่จะช่วยให้เราพัฒนาทักษะในการเจรจาต่อรอง',
        value: 0
      },
      {
        choiceText: 'ค. เป็นขั้นตอนแรกที่จะช่วยให้เราหลีกหนีความคิด อารมณ์ และปัญหาต่าง ๆ',
        value: 0
      },
      {
        choiceText: 'ง. เป็นขั้นตอนแรกของการสร้างเสริมความฉลาดทางอารมณ์ของคนเรา',
        value: 1
      },
    ]
  },
  {
    contentId: '5',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 2 ข้อใด ไม่ใช่ ประโยชน์ของการตระหนักรู้ในอารมณ์ (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. ช่วยจัดการกับความรู้สึกที่แย่ ๆ ได้',
        value: 0
      },
      {
        choiceText: 'ข. ช่วยให้เรารู้เท่าทันความคิดของผู้อื่น',
        value: 1
      },
      {
        choiceText: 'ค. ช่วยให้เราสังเกตว่าแท้จริงแล้วเรามีอารมณ์ความรู้สึกอย่างไร',
        value: 0
      },
      {
        choiceText: 'ง. ช่วยให้เราพูดคุยเกี่ยวกับความรู้สึกของเราได้ชัดเจนยิ่งขึ้น',
        value: 0
      },
    ]
  },
  {
    contentId: '6',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 3 การตระหนักรู้ในอารมณ์ มีกี่ขั้นตอน (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. 1 ขั้นตอน',
        value: 0
      },
      {
        choiceText: 'ข. 2 ขั้นตอน',
        value: 0
      },
      {
        choiceText: 'ค. 3 ขั้นตอน',
        value: 1
      },
      {
        choiceText: 'ง. 4 ขั้นตอน',
        value: 0
      },
    ]
  },
  {
    contentId: '7',
    contentType: 'SortingQuestion',
    contentText: 'ข้อที่ 4 ขอให้เรียงลำดับขั้นตอนของการฝึกการตระหนักรู้ในอารมณ์ ด้วยการเลือกคำตอบเรียงลำดับจากบนลงล่าง(1 คะแนน)',
    choices: [
      'ให้คะแนนอารมณ์ความรู้สึกที่เกิดขึ้น',
      'สร้างนิสัยรับรู้อารมณ์และความรู้สึก',
      'เล่าให้คนใกล้ชิดฟัง',
    ],
    expectedAnswer: [
      'สร้างนิสัยรับรู้อารมณ์และความรู้สึก',
      'ให้คะแนนอารมณ์ความรู้สึกที่เกิดขึ้น',
      'เล่าให้คนใกล้ชิดฟัง',
    ],
    score: 1
  },
  {
    contentId: '8',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 5 ข้อใดเป็นขั้นตอนที่สำคัญที่สุด สำหรับในการฝึกการตระหนักรู้ในอารมณ์ (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. ฝึกทำกิจกรรมที่สนใจ',
        value: 0
      },
      {
        choiceText: 'ข. ฝึกสร้างนิสัยรับรู้อารมณ์และความรู้สึก',
        value: 0
      },
      {
        choiceText: 'ค. ฝึกให้คะแนนอารมณ์และความรู้สึกที่เกิดขึ้น',
        value: 0
      },
      {
        choiceText: 'ง. ฝึกเล่าความรู้สึกของเราให้คนใกล้ชิดฟัง',
        value: 1
      },
    ]
  },
  {
    contentId: '9',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 6 ข้อใด "ไม่ถูกต้อง" เกี่ยวกับการตระหนักรู้ในอารมณ์ (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. เอ็ม โกรธเพื่อนที่เพื่อนไม่ชวนเล่นด้วย จึงต่อว่าเพื่อน',
        value: 1
      },
      {
        choiceText: 'ข. เก่ง กังวลใจก่อนสอบ จึงสังเกตอารมณ์ตนเอง แล้วตั้งชื่ออารมณ์ว่า“กังวล”',
        value: 0
      },
      {
        choiceText: 'ค. มายด์ โกรธที่ถูกเพื่อนแกล้ง จึงให้คะแนนอารมณ์ความรู้สึก อยู่ในระดับ 2 คือ รู้สึกโกรธไม่มาก',
        value: 0
      },
      {
        choiceText: 'ง. เอส น้อยใจที่เพื่อนลืมวันเกิด จึงบอกความรู้สึกนี้ให้กับเพื่อนฟัง',
        value: 0
      },
    ]
  },
  {
    contentId: '10',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 7 ข้อใดถูกต้อง เกี่ยวกับการตระหนักรู้ในอารมณ์ (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. เราต้องตัดสินอารมณ์ความรู้สึกของเราและคนอื่นด้วย',
        value: 0
      },
      {
        choiceText: 'ข. เราต้องเล่าอารมณ์ด้านบวกของเราให้ผู้อื่นฟังเท่านั้น',
        value: 0
      },
      {
        choiceText: 'ค. เราต้องสังเกต ยอมรับ และสบายใจที่จะพูดอารมณ์ที่เกิดขึ้น',
        value: 1
      },
      {
        choiceText: 'ง. เราต้องระลึกเสมอว่า อารมณ์ของเราเป็นสิ่งคงที่ไม่เปลี่ยนแปลง',
        value: 0
      },
    ]
  },
  {
    contentId: '11',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 8 ข้อใดเป็นวิธีการตระหนักรู้ในอารมณ์ เมื่อเรามีอารมณ์ความรู้สึกด้านลบ เช่น โกรธ อิจฉา โมโห ฯลฯ (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. รับรู้ว่าเรามีอารมณ์ความรู้สึกนั้น และยอมรับว่าเรามีความรู้สึกนั้น',
        value: 1
      },
      {
        choiceText: 'ข. ปฏิเสธว่าเราไม่มีอารมณ์ความรู้สึกนั้น',
        value: 0
      },
      {
        choiceText: 'ค. เราไม่ควรมีอารมณ์ความรู้สึกด้านลบเช่นนั้น',
        value: 0
      },
      {
        choiceText: 'ง. รีบเปลี่ยนอารมณ์ความรู้สึกของเราให้เป็นด้านบวกทันที',
        value: 0
      },
    ]
  },
  {
    contentId: '12',
    contentType: 'SelectionGroup',
    contentText: 'ข้อ 9 ข้อใด ไม่ใช่ ผลที่เกิดขึ้น เมื่อเรายอมรับอารมณ์ความรู้สึกของเรา(1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. สักพักความรู้สึกก็จะจางหายไป',
        value: 0
      },
      {
        choiceText: 'ข. ความรู้สึกที่มีอยู่ค่อย ๆ เพิ่มขึ้นมากกว่าเดิม',
        value: 1
      },
      {
        choiceText: 'ค. ทำให้เราเข้าใจว่าเพราะอะไรเราจึงมีความรู้สึกนั้น',
        value: 0
      },
      {
        choiceText: 'ง. ช่วยให้เราก้าวข้ามความรู้สึกไม่ดีไปได้',
        value: 0
      },
    ]
  },
  {
    contentId: '13',
    contentType: 'QuestionValidate',
    contentTextPass: 'เก่งมากค่ะ ตอบถูกเป็นส่วนใหญ่แล้วนะคะ',
    contentTextFail: 'เสียดายจังยังมีข้อที่ตอบไม่ถูก มาเรียนรู้เพื่อที่จะได้ตอบถูกทุกข้อกันนะคะ พี่มีทางเลือกให้ค่ะ',
    minScore: 7,
    backToVideo: 11,
    backToFirstQuestion: 9,
    answerIdRef: [
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ],
    /*
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '14',
    contentType: 'TextInput',
    contentText: 'ต่อไปจะเป็นการฝึกเพื่อพัฒนาการตระหนักรู้ในอารมณ์มากขึ้น แต่ก่อนอื่นขอให้น้องๆ วัดความดันโลหิต การเต้นของหัวใจ และบันทึกข้อมูลความดันโลหิตและการเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '15',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '16',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '15'
  },
  {
    contentId: '17',
    contentType: 'PickerInput',
    contentText: 'ต่อไปเราจะเริ่มเรียนรู้และฝึกกันแล้วนะคะ\n\n    ขอให้น้องๆ นึกถึงเหตุการณ์ที่เกิดขึ้นในชีวิตที่ผ่านมา ที่ทำให้น้องๆ รู้สึก “ชอบ” และเลือกเหตุการณ์นั้นด้วยนะคะ',
    questions: [
      {
        questionText: 'เหตุการณ์ที่ชอบ',
        choices: [
          'ไปเที่ยวกับเพื่อน',
          'ครูชมว่ามีน้้าใจ',
          'พ่อ/แม่ให้รางวัลที่ช่วยงานบ้าน',
          'เพื่อนที่เราชอบยิ้มให้',
          'สอบผ่าน',
          'อื่นๆ'
        ],
        otherQuestionText: 'ช่วยเขียนเหตุการณ์อื่นๆ ที่ “ชอบ” ด้วยนะคะ'
      },
    ]
  },
  {
    contentId: '18',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องรู้สึกอย่างไรกับเหตุการณ์ที่ “ชอบ” ที่เกิดขึ้น',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '19',
    contentType: 'PickerInput',
    contentText: '',
    questions: [
      {
        questionText: 'ให้ระดับคะแนนต่อความรู้สึกต่อเหตุการณ์ที่ “ชอบ” นี้(1-10)',
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      },
    ]
  },
  {
    contentId: '20',
    contentType: 'PickerInput',
    contentText: '    ต่อไปนะคะ ขอให้น้องๆ นึกถึงเหตุการณ์ที่เกิดขึ้นในชีวิตที่ผ่านมาที่ทำให้น้องๆรู้สึก “ไม่ชอบ”\nช่วยเลือกเหตุการณ์นั้นพร้อมทั้งความรู้สึกที่เกิดขึ้นด้วยนะคะ',
    questions: [
      {
        questionText: 'เหตุการณ์ที่ไม่ชอบ',
        choices: [
          'ครูตำหนิว่าทำงานไม่เรียบร้อย',
          'ถูกพ่อแม่ดุว่า',
          'พ่อ/แม่ปลุกให้ตื่นแต่เช้า',
          'เพื่อนนินทา',
          'พ่อ/แม่ใช้ให้ทำงานให้',
          'อื่นๆ'
        ],
        otherQuestionText: 'ช่วยเขียนเหตุการณ์อื่นๆ ที่ “ไม่ชอบ” ด้วยนะคะ'
      },
    ]
  },
  {
    contentId: '21',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องรู้สึกอย่างไรกับเหตุการณ์ที่ “ไม่ชอบ” ที่เกิดขึ้น',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '22',
    contentType: 'PickerInput',
    contentText: '',
    questions: [
      {
        questionText: 'ให้ระดับคะแนนต่อความรู้สึกต่อเหตุการณ์ที่ “ไม่ชอบ” นี้(1-10)',
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      },
    ]
  },
  {
    contentId: '23',
    contentType: 'Info',
    contentText: '    น้องๆ คะ หลังจากที่เราได้ฝึกการตระหนักรู้ในอารมณ์ของตัวเราเองแล้ว เรามาวัดความดันโลหิต การเต้นของหัวใจ และเลือกภาพความรู้สึกหลังการ ฝึกที่ตรงกับความรู้สึกของน้องๆ มากที่สุดนะคะ เลือกได้ไม่เกิน 3 ภาพค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '24',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '25',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '26',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '25'
  },
  {
    contentId: '27',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องๆ สามารถที่จะบอกความคิด/ความรู้สึกที่เกิดขึ้นได้ในที่ว่างข้างล่างนี้',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '28',
    contentType: 'Info',
    contentText: '    น้องๆ คะ การตระหนักรู้ในอารมณ์ของตนเองจะเกิดประโยชน์กับน้องๆ เป็นอย่างมาก\n    หากน้องๆ ได้ฝึกฝนที่จะรับรู้อารมณ์ของตนเอง เรามีเวลาฝึกกัน 3 วัน เช่นเคยนะคะน้องๆ ขอให้น้องสังเกตและรับรู้อารมณ์\/ความรู้สึกที่เกิดขึ้น ในแต่ละวันและเขียนบันทึกความรู้สึกที่เกิดขึ้นในทุกวันเช่นเดียวกับที่เราทำกันในวันนี้นะคะ\n\n    และ ถ้าน้องพบว่า น้องมีอารมณ์ลบที่รุนแรง เช่น โกรธ โมโห น้องสามารถที่จะย้อนกลับไปฝึกการหายใจอย่างถูกวิธี และฝึกการรับรู้ทางร่างกาย ตามวิดีโอที่ 3 ในโปรแกรมที่ 1 และวิดีโอในโปรแกรมที่2 ที่เราได้ฝึกกันมาก่อนหน้านี้ได้นะคะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
]

export const Homework3 = [
  {
    contentId: '1',
    contentType: 'Video',
    contentText: 'ทบทวน VDO “การตระหนักรู้ในอารมณ์”',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.5.mp4?alt=media&token=a5783b51-f8f1-499f-8423-2e55a93ba869'},
    minTime: 0
  },
  {
    contentId: '2',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'มีเหตุการณ์อะไรเกิดขึ้นกับน้องบ้าง ช่วยเล่าให้ฟังหน่อยค่ะ',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '3',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องรู้สึกอย่างไรกับเหตุการณ์ที่เกิดขึ้น',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '4',
    contentType: 'PickerInput',
    contentText: '',
    questions: [
      {
        questionText: 'ให้ระดับคะแนนต่อความรู้สึกต่อเหตุการณ์นี้(1-10)',
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      },
    ]
  }
]

export const Program4 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    สวัสดีค่ะน้องๆ เป็นอย่างไรบ้างคะได้บันทึกความรู้สึกที่เกิดขึ้นในแต่ละวัน ทำให้น้องๆเข้าใจความรู้สึกที่เกิดขึ้นของตัวเองมากขึ้นกันแล้วใช่ไหมคะ\n\n    ขอต้อนรับน้องเข้าสู่โปรแกรมสุดท้ายมีชื่อว่า “ปรับความคิด.....พิชิตเศร้า” นะคะ\n    อยากรู้แล้วใช่ไหมคะ ว่า ปรับความคิด จะพิชิตความเศร้าได้อย่างไร มาติดตามกันเลยค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-03.png`)
    }
    */
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: 'แต่ก่อนอื่น น้องๆ ต้องเรียนรู้ เกี่ยวกับธรรมชาติของอารมณ์ ก่อนว่ามีลักษณะอย่างไร ลองมาชมกันนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.6.mp4?alt=media&token=1e44fd12-e7b4-407f-af01-4fa7a64c06e4'},
    minTime: 0
  },
  {
    contentId: '3',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องๆ ได้ดู VDO กันแล้ว มีความคิด ความรู้สึกอย่างไรบ้างคะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '4',
    contentType: 'Info',
    contentText: 'น้องๆ ได้เรียนรู้ธรรมชาติของอารมณ์กันแล้วนะคะ ขอให้น้องๆ ช่วยตอบคำถามเพื่อจะได้รู้ว่าน้องๆ เข้าใจเรื่องราวจาก VDO มากน้อยแค่ไหนค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '5',
    contentType: 'SelectionGroup',
    contentText: 'แบบทดสอบเรื่อง “ธรรมชาติของอารมณ์” (5 คะแนน)\n\nข้อที่ 1 ข้อใดกล่าวถึงลักษณะธรรมชาติของอารมณ์ได้ชัดเจนมากที่สุด (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. เกิดขึ้นบางวัน และเปลี่ยนแปลงเป็นอารมณ์ที่ใกล้เคียงกันตามสถานการณ์ที่พบเจอ',
        value: 0
      },
      {
        choiceText: 'ข. เกิดขึ้นบางวัน และไม่มีการเปลี่ยนแปลง แม้ว่าจะพบเจอกับสถานการณ์ใด ๆ',
        value: 0
      },
      {
        choiceText: 'ค. เกิดขึ้นตลอดวัน และไม่มีการเปลี่ยนแปลง แม้ว่าจะพบเจอกับสถานการณ์ใด ๆ',
        value: 0
      },
      {
        choiceText: 'ง. เกิดขึ้นตลอดวัน และเปลี่ยนแปลงเป็นอารมณ์ใหม่ๆ ตามสถานการณ์ที่พบเจอ',
        value: 1
      },
    ]
  },
  {
    contentId: '6',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 2 อารมณ์ของคนเราที่เกิดขึ้นเปรียบเสมือนกับอะไร (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. สภาพอากาศที่เปลี่ยนแปลงได้ตลอดเวลา มีทั้งแจ่มใส ลมเย็นสบาย ฝนและเมฆหมอก',
        value: 1
      },
      {
        choiceText: 'ข. สายน้ำ ที่ไหลไป และไม่มีวันไหลย้อนกลับ',
        value: 0
      },
      {
        choiceText: 'ค. ต้นไม้ที่ให้ความร่มรื่น เป็นร่มเงาและที่พักพิง',
        value: 0
      },
      {
        choiceText: 'ง. ก้อนหิน ที่แข็งแกร่ง ทนทุกสภาพการณ์',
        value: 0
      },
    ]
  },
  {
    contentId: '7',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 3 ข้อใด ไม่ถูกต้อง เกี่ยวกับธรรมชาติของอารมณ์(1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. คนเรามีอารมณ์ที่หลากหลาย ทั้งดีใจ ทุกข์ใจ กังวล เหงา ตื่นเต้น เป็นต้น',
        value: 0
      },
      {
        choiceText: 'ข. อารมณ์ที่เกิดขึ้น ขึ้นอยู่กับสถานการณ์ที่พบเจอ',
        value: 0
      },
      {
        choiceText: 'ค. คนเรามีอารมณ์เดียวในแต่ละสัปดาห์จากนั้นจะเปลี่ยนไปเป็นอีกอารมณ์หนึ่ง',
        value: 1
      },
      {
        choiceText: 'ง. เมื่อเราทุกข์ใจ ให้เรายอมรับว่าอารมณ์นี้เกิดขึ้น แต่เดี๋ยวมันก็จะจางหายไปไม่ได้อยู่กับเราตลอดเวลา',
        value: 0
      },
    ]
  },
  {
    contentId: '8',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 4 ใคร ไม่เข้าใจ ธรรมชาติของอารมณ์(1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. เอ็ม เข้าใจว่าอารมณ์เศร้าไม่ได้อยู่กับเราตลอดไป เมื่อเวลาผ่านไปก็จะพบเจออารมณ์อื่น ๆ',
        value: 0
      },
      {
        choiceText: 'ข. เอ เข้าใจว่าคนเราสามารถมีความสุขได้ตลอดเวลา',
        value: 1
      },
      {
        choiceText: 'ค. มายด์เข้าใจว่าอารมณ์ของคนเรา เหมือนขบวนรถไฟที่เคลื่อนไปตามสถานีต่าง ๆ',
        value: 0
      },
      {
        choiceText: 'ง. น้ำ เข้าใจว่าอารมณ์ก็เหมือนสภาพอากาศในแต่ละวันที่เราพบเจอ จะไม่เหมือนกันไปทุกวัน',
        value: 0
      },
    ]
  },
  {
    contentId: '9',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 5 ข้อใดต่อไปนี้ไม่ใช่อารมณ์(1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. ร้องไห้',
        value: 1
      },
      {
        choiceText: 'ข. โกรธ',
        value: 0
      },
      {
        choiceText: 'ค. ตื่นเต้น',
        value: 0
      },
      {
        choiceText: 'ง. กลัว',
        value: 0
      },
    ]
  },
  {
    contentId: '10',
    contentType: 'QuestionValidate',
    contentTextPass: 'เก่งมากค่ะ ตอบถูกทุกข้อเลยค่ะ',
    contentTextFail: 'เสียดายจังยังมีข้อที่ตอบไม่ถูก มาเรียนรู้เพื่อที่จะได้ตอบถูกทุกข้อกันนะคะ พี่มีทางเลือกให้ค่ะ',
    minScore: 5,
    backToVideo: 8,
    backToFirstQuestion: 5,
    answerIdRef: [
      '5',
      '6',
      '7',
      '8',
      '9'
    ],
    /*
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '11',
    contentType: 'Info',
    contentText: '    เมื่อน้องๆ เข้าใจถึงธรรมชาติของอารมณ์กันแล้ว ต่อไปเราจะมาเรียนรู้กันนะคะว่า อารมณ์ที่เกิดขึ้น เกิดจากความคิดเช่นไร และเราจะจัดการกับความคิดนั้นได้อย่างไร มาชมวิดีโอเรื่องการตระหนักรู้ความคิดและการจัดการความคิดกันนะคะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '12',
    contentType: 'Video',
    contentText: 'อ้อ! อยากให้ตั้งใจดูด้วยนะคะ เพราะเราจะมีคำถามถามน้องๆ ด้วยนะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.7.mp4?alt=media&token=eba08fc1-9eb7-44e0-a682-47fa1196c879'},
    minTime: 0
  },
  {
    contentId: '13',
    contentType: 'Info',
    contentText: '    น้องๆ ได้เรียนรู้การตระหนักรู้ความคิดและการจัดการกับความคิดกันแล้วนะคะ ขอให้น้องๆ ช่วยตอบคำถามเพื่อจะได้รู้ว่าน้องๆ เข้าใจเรื่องราวจาก VDO มากน้อยแค่ไหนค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '14',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 1 ข้อใด ถูกต้อง เกี่ยวกับความคิด (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. ความคิดของคนเราจะเป็นอัตโนมัติและแตกต่างกันไปตามสถานการณ์ที่พบเจอ',
        value: 1
      },
      {
        choiceText: 'ข. ความคิดเป็นภาพที่เกิดขึ้นอย่างรวดเร็ว',
        value: 0
      },
      {
        choiceText: 'ค. ในเวลาที่ทุกข์มักจะมีความคิดทางบวกมาก่อนเสมอ',
        value: 0
      },
      {
        choiceText: 'ง. ความคิดเป็นสิ่งที่เราบังคับได้',
        value: 0
      },
    ]
  },
  {
    contentId: '15',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 2 ข้อใด ไม่ใช่ ประโยชน์ของการตระหนักรู้ในความคิด (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. ทำให้เราเข้าใจถึงปัญหาที่เกิดขึ้น',
        value: 0
      },
      {
        choiceText: 'ข. ช่วยให้ระบบประสาทส่วนกลางทำงานดีขึ้น',
        value: 1
      },
      {
        choiceText: 'ค. เป็นหนทางหนึ่งที่ช่วยแก้ปัญหา',
        value: 0
      },
      {
        choiceText: 'ง. ช่วยให้เราเข้าใจความสัมพันธ์ของความคิด ความรู้สึก และการกระทำของเรา',
        value: 0
      },
    ]
  },
  {
    contentId: '16',
    contentType: 'SelectionGroup',
    contentText: 'ข้อที่ 3 เทคนิคการปรับเปลี่ยนความคิดมีกี่ขั้นตอน (1 คะแนน)',
    choices: [
      {
        choiceText: 'ก. 1 ขั้นตอน',
        value: 0
      },
      {
        choiceText: 'ข. 2 ขั้นตอน',
        value: 0
      },
      {
        choiceText: 'ค. 3 ขั้นตอน',
        value: 0
      },
      {
        choiceText: 'ง. 4 ขั้นตอน',
        value: 1
      },
    ]
  },
  {
    contentId: '17',
    contentType: 'SortingQuestion',
    contentText: 'ข้อที่ 4 ขอให้เรียงลำดับของเทคนิคการปรับเปลี่ยนความคิด (1 คะแนน)',
    choices: [
      'บอกความคิดที่ไม่สมเหตุสมผล',
      'การตระหนักรู้ถึงปัญหา',
      'การปรับเปลี่ยนความคิดใหม่',
      'การตรวจสอบความคิด'
    ],
    expectedAnswer: [
      'การตระหนักรู้ถึงปัญหา',
      'บอกความคิดที่ไม่สมเหตุสมผล',
      'การตรวจสอบความคิด',
      'การปรับเปลี่ยนความคิดใหม่'
    ],
    score: 1
  },
  {
    contentId: '18',
    contentType: 'QuestionValidate',
    contentTextPass: 'เก่งมากค่ะ ตอบถูกทุกข้อเลยค่ะ',
    contentTextFail: 'เสียดายจังยังมีข้อที่ตอบไม่ถูก มาเรียนรู้เพื่อที่จะได้ตอบถูกทุกข้อกันนะคะ พี่มีทางเลือกให้ค่ะ',
    minScore: 4,
    backToVideo: 6,
    backToFirstQuestion: 4,
    answerIdRef: [
      '14',
      '15',
      '16',
      '17'
    ],
    /*
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '19',
    contentType: 'Info',
    contentText: '    ต่อไปจะเป็นการฝึกสังเกตความคิดและจัดการกับความคิด แต่ก่อนที่จะฝึกกัน ขอให้น้องๆ วัดความดันโลหิต การเต้นของหัวใจ และเลือกภาพที่ตรงกับความรู้สึกของน้องๆ มากที่สุดก่อนนะคะ น้องเลือกได้ไม่เกิน 3 ภาพค่ะ',
  },
  {
    contentId: '20',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '21',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '22',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '21'
  },
  {
    contentId: '23',
    contentType: 'Info',
    contentText: '    น้องๆ คะ ครั้งนี้การฝึกของเราจะเป็นการฝึกจากการเล่นเกมส์ สนใจอยากฝึกกันแล้วใช่ไหมคะ มาค่ะ....เรามาเล่นเกมส์กันเลยค่ะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '24',
    contentType: 'Game',
    contentText: 'วิธีการเล่น :\n\nค่อยๆแตะหน้าจอ เพื่อให้เจ้านกบินค่อยๆบินขึ้น\n\nซึ่งทุกครั้งที่เจ้านกบินผ่านท่อได้ จะได้ 1 คะแนน\n\nถ้าน้องๆสามารถสะสมคะแนนจนได้ครบ 10 คะแนน น้องๆ ก็จะชนะทันที\n\nแต่ถ้าน้องๆ ปล่อยให้นกบินชนเพดาน, พื้น หรือ ท่อ เกมก็จะจบทันที\n\nแต่น้องๆสามารถเริ่มเล่นใหม่อีกครั้งได้เรื่อยๆ ด้วยการแตะหน้าจออีกครั้งนะคะ\n\nถ้าน้องๆพร้อมแล้ว กดปุ่ม "เล่นเกมส์" ได้เลยค่ะ',
  },
  {
    contentId: '25',
    contentType: 'MainAfterGame',
    contentText: '    หลังจากน้องๆ ได้เล่นเกมส์ น้องๆ สังเกตไหมคะว่า มีคำพูดอะไรเกิดขึ้นในใจบ้าง หรือน้องๆ รู้สึกอย่างไรบ้าง',
    extraText: '    น้องๆ มีคำพูดอะไรเกิดขึ้นในใจอีกบ้างไหมคะ?\n    ถ้าน้องๆมีคำพูดอะไรเกิดขึ้นนอกจากในตัวเลือก สามารถพิมพ์ลงในช่องว่างใต้ปุ่ม "ถัดไป" ได้เลยคะ',
    choices: [
      {
        choiceText: 'เย้! สำเร็จแล้ว',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'กำลังรู้สึกอะไรอยู่หรือคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'เบื่อโว้ย',
        expectedAnswer: 'ความรู้สึก',
        questions: [
          {
            questionText: 'ที่เบื่อ คิดอะไรอยู่หรือคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
          {
            questionText: 'ถ้าไม่อยากรู้สึกเบื่อต้องคิดอย่างไรดีคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'เซ็ง! ชะมัด',
        expectedAnswer: 'ความรู้สึก',
        questions: [
          {
            questionText: 'ที่เซ็ง! เนี่ยคิดอะไรอยู่หรือคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
          {
            questionText: 'ถ้าไม่อยากรู้สึกเซ็งต้องคิดอย่างไรดีคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'ยากจัง ทำไม่ได้หรอก',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'รู้สึกอย่างไรคะที่ทำไม่ได้',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
          {
            questionText: 'ถ้าไม่อยากรู้สึกแบบนี้ น่าจะคิดอย่างไรดีคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'เฮ้อ! ยากจริง แต่เราต้องทำได้',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'ต้องสำเร็จ กี่ครั้งกี่ครั้งก็ต้องทำได้',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'เราต้องชนะ',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'อึดอัดมาก',
        expectedAnswer: 'ความรู้สึก',
        questions: [
          {
            questionText: 'ที่รู้สึกอึดอัดแบบนี้ เพราะคิดอะไรอยู่หรือคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
          {
            questionText: 'ถ้าไม่อยากรู้สึกอึดอัดแบบนี้ ต้องคิดอย่างไรดีคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'ช่างมัน!',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'ปล่อยมันไป',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      }
    ]
  },
  {
    contentId: '26',
    contentType: 'SelectionGroupAfterGame',
    contentText: 'คำพูดที่น้องเลือกนั้นเป็น ความคิด หรือ ความรู้สึก คะ',
    choices: [
      {
        choiceText: 'ความคิด',
      },
      {
        choiceText: 'ความรู้สึก',
      }
    ],
    answerIdRef: '25'
  },
  {
    contentId: '27',
    contentType: 'QuestionValidateAfterGame',
    contentTextPass: 'ถูกต้องค่ะ',
    contentTextFail: 'ยังผิดอยู่ค่ะ ลองตอบใหม่นะคะ',
    minScore: 1,
    answerIdRef: '26',
    /*
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '28',
    contentType: 'TextInputAfterGame',
    contentText: '',
    answerIdRef: '25',
    otherIdRef: '26'
  },
  {
    contentId: '29',
    contentType: 'Info',
    contentText: 'น้องๆ คะ หลังจากที่เราได้ฝึกสังเกตความคิดและจัดการกับความคิดกันบ้างแล้ว เรามาวัดความดันโลหิต การเต้นของหัวใจ และเลือกภาพความรู้สึกที่ตรงกับความรู้สึกของน้องๆ มากที่สุด ไม่เกิน 3 ภาพนะคะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '30',
    contentType: 'TextInput',
    contentText: 'ขอให้น้องวัดความดันโลหิต การเต้นของหัวใจก่อนนะคะ',
    questions: [
      {
        questionText: 'ความดันโลหิตตัวบน',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ความดันโลหิตตัวล่าง',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'จำนวนครั้งของการเต้นหัวใจ ใน 1 นาที',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: true
      },
      {
        questionText: 'ระดับอุณหภูมิร่างกาย',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'small',
        numeric: true,
        needAnswer: false
      }
    ]
  },
  {
    contentId: '31',
    contentType: 'EmotionButtons',
    contentText: 'ช่วยเลือกรูปภาพที่ตรงกับความรู้สึกของน้องมากที่สุดนะคะ (เลือกได้ไม่เกิน 3 ภาพค่ะ)',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '32',
    contentType: 'EmotionRating',
    contentText: 'ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '31'
  },
  {
    contentId: '33',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'มีความรู้สึกอย่างอื่นเพิ่มเติมที่น้องๆ อยากจะบอก เขียนเพิ่มเติมได้เลยนะคะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '34',
    contentType: 'Info',
    contentText: '    น้องๆ คะ ความคิดและการจัดการกับความคิดจะเกิดประโยชน์กับน้องๆเป็นอย่างมาก หากน้องๆ ได้ฝึกฝนที่จะรับรู้ความคิดและจัดการกับความคิดของตนเอง\n    เรามีเวลากัน 3 วัน เช่นเคยนะคะน้องๆ ลองมาฝึกสังเกต ความคิดและจัดการกับความคิดที่เกิดขึ้นในแต่ละวัน อย่างที่เราได้ทำกันใน วันนี้นะคะ ที่สำคัญอย่าลืมบันทึกความดันโลหิต การเต้นของหัวใจ และ เลือกภาพความรู้สึกที่ตรงกับความรู้สึกของน้องๆ มากที่สุด 3 ภาพ ก่อนและหลังการฝึกด้วยนะคะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
]

export const Homework4 = [
  {
    contentId: '1',
    contentType: 'Video',
    contentText: 'มาชมวิดีโอ เพื่อทบทวนเรื่องการตระหนักรู้ความคิดและการจัดการความคิดกันนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.7.mp4?alt=media&token=eba08fc1-9eb7-44e0-a682-47fa1196c879'},
    minTime: 0
  },
  {
    contentId: '2',
    contentType: 'Info',
    contentText: '    ต่อไปจะเป็นการทบทวนฝึกจากการเล่นเกมส์นะคะ',
    /*
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '3',
    contentType: 'Game',
    contentText: 'วิธีการเล่น :\n\nค่อยๆแตะหน้าจอ เพื่อให้เจ้านกบินค่อยๆบินขึ้น\n\nซึ่งทุกครั้งที่เจ้านกบินผ่านท่อได้ จะได้ 1 คะแนน\n\nถ้าน้องๆสามารถสะสมคะแนนจนได้ครบ 10 คะแนน น้องๆ ก็จะชนะทันที\n\nแต่ถ้าน้องๆ ปล่อยให้นกบินชนเพดาน, พื้น หรือ ท่อ เกมก็จะจบทันที\n\nแต่น้องๆสามารถเริ่มเล่นใหม่อีกครั้งได้เรื่อยๆ ด้วยการแตะหน้าจออีกครั้งนะคะ\n\nถ้าน้องๆพร้อมแล้ว กดปุ่ม "เล่นเกมส์" ได้เลยค่ะ',
  },
  {
    contentId: '4',
    contentType: 'MainAfterGame',
    contentText: '    หลังจากน้องๆ ได้เล่นเกมส์ น้องๆ สังเกตไหมคะว่า มีคำพูดอะไรเกิดขึ้นในใจบ้าง หรือน้องๆ รู้สึกอย่างไรบ้าง',
    extraText: '    น้องๆ มีคำพูดอะไรเกิดขึ้นในใจอีกบ้างไหมคะ?\n    ถ้าน้องๆมีคำพูดอะไรเกิดขึ้นนอกจากในตัวเลือก สามารถพิมพ์ลงในช่องว่างใต้ปุ่ม "ถัดไป" ได้เลยคะ',
    choices: [
      {
        choiceText: 'เย้! สำเร็จแล้ว',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'กำลังรู้สึกอะไรอยู่หรือคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'เบื่อโว้ย',
        expectedAnswer: 'ความรู้สึก',
        questions: [
          {
            questionText: 'ที่เบื่อ คิดอะไรอยู่หรือคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
          {
            questionText: 'ถ้าไม่อยากรู้สึกเบื่อต้องคิดอย่างไรดีคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'เซ็ง! ชะมัด',
        expectedAnswer: 'ความรู้สึก',
        questions: [
          {
            questionText: 'ที่เซ็ง! เนี่ยคิดอะไรอยู่หรือคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
          {
            questionText: 'ถ้าไม่อยากรู้สึกเซ็งต้องคิดอย่างไรดีคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'ยากจัง ทำไม่ได้หรอก',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'รู้สึกอย่างไรคะที่ทำไม่ได้',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
          {
            questionText: 'ถ้าไม่อยากรู้สึกแบบนี้ น่าจะคิดอย่างไรดีคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'เฮ้อ! ยากจริง แต่เราต้องทำได้',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'ต้องสำเร็จ กี่ครั้งกี่ครั้งก็ต้องทำได้',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'เราต้องชนะ',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'อึดอัดมาก',
        expectedAnswer: 'ความรู้สึก',
        questions: [
          {
            questionText: 'ที่รู้สึกอึดอัดแบบนี้ เพราะคิดอะไรอยู่หรือคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
          {
            questionText: 'ถ้าไม่อยากรู้สึกอึดอัดแบบนี้ ต้องคิดอย่างไรดีคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'ช่างมัน!',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      },
      {
        choiceText: 'ปล่อยมันไป',
        expectedAnswer: 'ความคิด',
        questions: [
          {
            questionText: 'คิดอย่างนี้แล้วน้องรู้สึกอย่างไรคะ',
            placeholderText: '',
            textBoxSize: 'large',
            needAnswer: true
          },
        ]
      }
    ]
  },
  {
    contentId: '5',
    contentType: 'SelectionGroupAfterGame',
    contentText: 'คำพูดที่น้องเลือกนั้นเป็น ความคิด หรือ ความรู้สึก คะ',
    choices: [
      {
        choiceText: 'ความคิด',
      },
      {
        choiceText: 'ความรู้สึก',
      }
    ],
    answerIdRef: '4'
  },
  {
    contentId: '6',
    contentType: 'QuestionValidateAfterGame',
    contentTextPass: 'ถูกต้องค่ะ',
    contentTextFail: 'ยังผิดอยู่ค่ะ ลองตอบใหม่นะคะ',
    minScore: 1,
    answerIdRef: '5',
    /*
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
    */
  },
  {
    contentId: '7',
    contentType: 'TextInputAfterGame',
    contentText: '',
    answerIdRef: '4',
    otherIdRef: '5'
  },
]