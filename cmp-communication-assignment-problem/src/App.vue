<template>
  <section>
    <div class="parent">
      <div class="child">
        <active-user :username="user.name" :userAge="user.age"></active-user>
      </div>

      <div class="child">
        <user-data @set-data="setUserData"></user-data>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Billy Zimmerman",
        age: 35,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age,
      };
    },
  },
};
</script>

<style scoped>
.parent {
  border: 1px solid black;
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
}
.child {
  display: inline-block;
  border: 1px solid rgb(10, 24, 49);
  padding: 1rem 1rem;
  vertical-align: middle;
  width: 10rem;
}
</style>
