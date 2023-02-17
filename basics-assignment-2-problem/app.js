const app = Vue.createApp({
  data() {
    return {
      input: "",
      inputTwo: "",
    };
  },

  //using 'this' to reference data 'counter'
  methods: {
    alertText() {
      alert("Submitted!");
    },
    setInput(event) {
      this.input = event.target.value;
    },
    setInputTwo(event) {
      this.inputTwo = event.target.value;
    },
  },
});

app.mount("#assignment");
