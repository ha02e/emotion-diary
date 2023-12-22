const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: "행복해",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: "기분 좋아",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: "설레어",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: "그럭저럭",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: "피곤해",
  },
  {
    emotion_id: 6,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion6.png`,
    emotion_descript: "우울해",
  },
  {
    emotion_id: 7,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion7.png`,
    emotion_descript: "화나",
  },
  {
    emotion_id: 8,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion8.png`,
    emotion_descript: "아파",
  },
];
