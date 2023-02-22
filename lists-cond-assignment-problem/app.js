const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      taskListVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListVisible ? "HideList" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTaskList() {
      this.taskListVisible = !this.taskListVisible;
    },
  },
});

app.mount("#assignment");
