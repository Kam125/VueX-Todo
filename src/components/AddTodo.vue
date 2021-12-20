<template>
  <div class="input-container">
    <form class="d-flex" @submit="onSubmit">
      <input placeholder="AddTodo" v-model="title" class="w-100" required />
      <button class="btn pointer" type="submit">Add</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      let obj = {
        id: Date.now(),
        title: this.title,
      };
      this.addTodo(obj);
      this.title = "";
    },
  },
};
</script>
<style scoped>
.input-container {
  width: 50%;
  margin: auto;
}
</style>
