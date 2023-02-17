const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName() {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullName() {
      if (this.firstName === "" || this.lastName === "") {
        return "";
      }
      return this.firstName + " " + this.lastName;
    },
  },

  methods: {
    outputFullName() {
      if (this.firstName === "") {
        return "";
      }
      return this.firstName + " " + "Zimmerman";
    },
    setName(event) {
      this.firstName = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    // resetInput() {
    //   if (this.firstName && this.lastName === "") return "";
    // },
  },
});

app.mount("#events");
