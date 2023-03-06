const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel Lorenz",
          phone: "512-888-2765",
          email: "Manuel@testing.com",
        },
        {
          id: "Kelsey",
          name: "Kelsey Zimmerman",
          phone: "512-845-2725",
          email: "kelsey@testing.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
  <h2>{{friend.name}}</h2>
  <button @click="toggleDetails">
    {{ detailsAreVisible ? "Hide Details" : "Show Details"}}
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
  </ul>
</li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "512-888-2765",
        email: "Manuel@testing.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
