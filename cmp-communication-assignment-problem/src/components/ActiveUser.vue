<template>
  <!-- <h1>Active User</h1> -->
  <div>
    <h2>{{ username }}</h2>
    <h3>{{ userAge }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
};
</script>
