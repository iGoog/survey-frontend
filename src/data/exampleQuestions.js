import {QUESTION_BOOL, QUESTION_MULT_AT_LEAST, QUESTION_MULT_EXACT, QUESTION_NUMERIC} from "@/model/Question";

export const exampleJSONLikeQuestions = [
  {
    id: 1,
    parentId: null,
    text: "Is this true?",
    type: QUESTION_BOOL,
    choices: []
  },
  {
    id: 2,
    parentId:  1 ,
    text: "Is this also true 1?",
    type: QUESTION_BOOL,
    choices: []
  },
  {
    id: 3,
    parentId:  1 ,
    text: "Is this also true 2?",
    type: QUESTION_BOOL,
    choices: []
  },
  {
    id: 4,
    parentId:  3 ,
    text: "Is this deep true?",
    type: QUESTION_BOOL,
    choices: []
  },
  {
    id: 5,
    parentId:  4 ,
    text: "Is this deeper true?",
    type: QUESTION_BOOL,
    choices: []
  },
  {
    id: 6,
    parentId:  5 ,
    text: "Is this deeper also true 1?",
    type: QUESTION_BOOL,
    choices: []
  },
  {
    id: 7,
    parentId:  5 ,
    text: "Is this deeper also true 2?",
    type: QUESTION_BOOL,
    choices: []
  },
  {
    id: 1 + 7,
    parentId:  null ,
    text: "Numeric - Is this true?",
    type: QUESTION_NUMERIC,
    choices: []
  },
  {
    id: 2 + 7,
    parentId:  1 + 7 ,
    text: "Numeric - Is this also true 1?",
    type: QUESTION_NUMERIC,
    choices: []
  },
  {
    id: 3 + 7,
    parentId:  1 + 7 ,
    text: "Numeric - Is this also true 2?",
    type: QUESTION_NUMERIC,
    choices: []
  },
  {
    id: 4 + 7,
    parentId:  3 + 7 ,
    text: "Numeric - Is this deep true?",
    type: QUESTION_NUMERIC,
    choices: []
  },
  {
    id: 5 + 7,
    parentId:  4 + 7 ,
    text: "Numeric - Is this deeper true?",
    type: QUESTION_NUMERIC,
    choices: []
  },
  {
    id: 6 + 7,
    parentId:  5 + 7 ,
    text: "Numeric - Is this deeper also true 1?",
    type: QUESTION_NUMERIC,
    choices: []
  },
  {
    id: 7 + 7,
    parentId:  6 + 7 ,
    text: "Numeric - Is this deeper also true 2?",
    type: QUESTION_NUMERIC,
    choices: []
  },
  {
    id: 15,
    parentId: null,
    text: "What's for dinner?",
    type: QUESTION_MULT_EXACT,
    choices: [
        "Gumbo", "Jambalaya", "Crawfish Pie", "Oyster Poboys"
    ]
  },
  {
    id: 16,
    parentId: 15,
    text: "What's for dinner 2?",
    type: QUESTION_MULT_EXACT,
    choices: [
      "Gumbo", "Jambalaya", "Crawfish Pie", "Oyster Poboys"
    ]
  },
  {
    id: 17,
    parentId: null,
    text: "Pick exactly two options?",
    type: QUESTION_MULT_EXACT,
    choices: [
      "Gumbo", "Jambalaya", "Crawfish Pie", "Oyster Poboys"
    ],
    multOpt: 2
  },
  {
    id: 18,
    parentId: 17,
    text: "You picked two, and can pick two more",
    type: QUESTION_MULT_EXACT,
    choices: [
      "Gumbo", "Jambalaya", "Crawfish Pie", "Oyster Poboys"
    ],
    multOpt: 2
  },
  {
    id: 19,
    parentId: null,
    text: "Pick at least 2",
    type: QUESTION_MULT_AT_LEAST,
    choices: [
      "Gumbo", "Jambalaya", "Crawfish Pie", "Oyster Poboys"
    ],
    multOpt: 2
  },
  {
    id: 20,
    parentId: 19,
    text: "Woohoo!",
    type: QUESTION_MULT_AT_LEAST,
    choices: [
      "foo", "bar", "baz", "fizz", "buzz"
    ],
    multOpt: 2
  }
];
