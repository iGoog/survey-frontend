<template>
  <div class="survey">
    <div
        v-for="question in survey"
        :key="question.id"
        class="question"
        v-show="question.display"
    >
      <p class="question__text">{{ question.text }}</p>
      <span
          v-if="question.isBool()"
          class="question__option"
      >
        <input
          type="radio"
          :id="'theTrue' + question.id"
          value="true"
          v-model="question.answer"
        />
        <label :for="'theTrue' + question.id">True</label>
        <br />
        <input
          type="radio"
          :id="'theFalse' + question.id"
          value="false"
          v-model="question.answer"
        />
        <label :for="'theFalse' + question.id">False</label>
      </span>
      <span
          v-else-if="question.isNumeric()"
          class="question__numeric"
      >
        <input type="number" v-model="question.answer" />
      </span>
      <span
          v-else-if="question.isMulti()"
          class="question__multiple"
      >
        <select v-model="question.answer" multiple>
          <option
              v-for="(choice, i) in question.choices"
              :key="i"
          >{{choice}}
          </option>
        </select>
      </span>
    </div>
  </div>
</template>

<script>
import  { loadQuestions } from "@/model/Question";
import { exampleJSONLikeQuestions } from "@/data/exampleQuestions";

export default {
  name: "SurveyQuestions",
  props: {
    surveyKey: {
      type: String,
      default: "demo"
    }
  },
  data: function() {
    return {
      survey: []
    };
  },
  computed: {},
  mounted: function() {
    const survey = this.survey;
    if (this.$props.surveyKey === "demo") {
      setTimeout(
        () =>
          survey.splice(
            0,
            survey.length,
            ...loadQuestions(exampleJSONLikeQuestions)
          ),
        0
      );
    }
  }
};
</script>

<style scoped></style>
