const QUESTION_BOOL = "bool",
  QUESTION_NUMERIC = "number",
  QUESTION_MULT_EXACT = "multExact",
  QUESTION_MULT_AT_LEAST = "multAtLeast";
export {
  QUESTION_BOOL,
  QUESTION_NUMERIC,
  QUESTION_MULT_EXACT,
  QUESTION_MULT_AT_LEAST
};

export default class Question {
  constructor({ id, parentId, text, type = QUESTION_BOOL, choices = [], multOpt = 1 } = {}) {
    this.id = id;
    this.parentId = parentId;
    this.text = text;
    this.type = type;
    this.choices = choices;
    this.multOpt = multOpt;

    this.children = [];

    this.parent = null;
    this._answer = null;
    if (type == QUESTION_MULT_EXACT
        || type == QUESTION_MULT_AT_LEAST) {
      this._answer = [];
    }
    this._display = true;
  }

  isPositive(answer=this._answer) {
    if (answer == null) return false;
    switch (this.type) {
      case QUESTION_BOOL:
        return answer == 'true';
      case QUESTION_NUMERIC:
        return answer != 0;
      case QUESTION_MULT_EXACT:
        return answer.length == this.multOpt;
      case QUESTION_MULT_AT_LEAST:
        return answer.length >= this.multOpt;
    }

    return false;
  }

  get answer() {
    return this._answer;
  }
  set answer(val) {
    if (this._answer != val) {
      const wasPositive = this.isPositive(this._answer);
      const toPositive = this.isPositive(val);
      const updateChildren = //XOR
          (wasPositive || toPositive) && !(wasPositive && toPositive);
      this._answer = val;
      if (updateChildren) this.children.forEach((child)=> {
        child.display = toPositive; // display is reactive too
      });
    }

  }

  get display() {
    return this._display;
  }

  set display(val) {
    this._display = val;
    if (!val) { // hide all children if hiding
      this.children.forEach((child)=>child.display = false);
    } else if (this.isPositive()){ // if showing, and positive show children.
      this.children.forEach((child)=>child.display = true);
    }
  }

  /**
   * link a child to this parent and vice versa
   * @param child
   */
  attachChild(child) {
    this.children.push(child);
    child.parent = this;
  }

  isBool() {
    return this.type === QUESTION_BOOL;
  }
  isNumeric() {
    return this.type === QUESTION_NUMERIC;
  }
  isMulti() {
    return this.type === QUESTION_MULT_EXACT
        || this.type === QUESTION_MULT_AT_LEAST;
  }
}

export const loadQuestions = (rawQuestions = []) => {
  const resultQuestions = [];
  const lookupQuestionByIdMap = new Map();
  for (let i = 0; i < rawQuestions.length; i++) {
    const q = new Question(rawQuestions[i]);
    resultQuestions.push(q);
    lookupQuestionByIdMap.set(q.id, q);
  }
  resultQuestions.forEach(question => {
    if (lookupQuestionByIdMap.has(question.parentId)) {
      lookupQuestionByIdMap.get(question.parentId).attachChild(question);
      question.display = false;
    } else {
      question.display = true;
    }
  });

  return resultQuestions;
};
