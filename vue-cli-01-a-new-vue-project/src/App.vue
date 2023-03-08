<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";

export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "kelsey",
          name: "kelsey zimmerman",
          phone: "123-432-9768",
          email: "kelsey@aol.com",
        },
        {
          id: "luis",
          name: "Luis Torres",
          phone: "393-382-9768",
          email: "luis@aol.com",
        },
      ],
    };
  },
};
</script>
