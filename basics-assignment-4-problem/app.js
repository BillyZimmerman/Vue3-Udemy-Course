const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragraphIsVisible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.toggleParagraphIsVisible = !this.toggleParagraphIsVisible;
    },
  },
});

app.mount("#assignment");
