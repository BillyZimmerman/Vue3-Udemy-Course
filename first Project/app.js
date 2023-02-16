// JS Code
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// // Adding a function that will listen for the click to occur
// function addGoal(){
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = " "
// }

// // Adding a click listener
// buttonEl.addEventListener('click', addGoal);
//==============================================================================

// Vue version of JS code above
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
