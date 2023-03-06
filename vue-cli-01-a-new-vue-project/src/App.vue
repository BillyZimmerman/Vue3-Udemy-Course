<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
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
