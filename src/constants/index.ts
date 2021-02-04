interface ObjectLiteral {
  [key: string]: any;
}

export const QUESTION_TYPE: ObjectLiteral = {
  SINGLE_MATCH: {
    text: "SINGLE_MATCH",
    value: "SINGLE_MATCH",
  },
  SINGLE_ANY: {
    text: "SINGLE_ANY",
    value: "SINGLE_ANY",
  },
  MULTIPLE_MATCH: {
    text: "MULTIPLE_MATCH",
    value: "MULTIPLE_MATCH",
  },
  MULTIPLE_ANY: {
    text: "MULTIPLE_ANY",
    value: "MULTIPLE_ANY",
  },
};

export const QUESTION_TIMER: ObjectLiteral = {
  T_15: {
    text: "15 seconds",
    value: "15",
  },
  T_30: {
    text: "30 seconds",
    value: "30",
  },
  T_45: {
    text: "45 seconds",
    value: "45",
  },
  T_60: {
    text: "60 seconds",
    value: "60",
  },
};

export const QUESTION_SCORE: ObjectLiteral = {
  P_100: {
    text: "100 points",
    value: "100",
  },
  P_150: {
    text: "150 points",
    value: "150",
  },
  P_200: {
    text: "200 points",
    value: "200",
  },
  P_250: {
    text: "250 points",
    value: "250",
  },
};
