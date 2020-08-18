<template>
  <div id="app">
    <SurveyQuestions></SurveyQuestions>
  </div>
</template>

<script>
import SurveyQuestions from "@/components/SurveyQuestions";

export default {
  name: "App",
  components: {
    SurveyQuestions
  },
  data: function() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
