const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learn this shit",
      courseGoalB: "<h2>Master Vue and land your next job!</h2>",
      vueLink: "https://vuejs.org/guide/quick-start.html",
    };
  },
  // Using randomNumber to possibly provide a different outputGoal on refresh
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
