<template>
  <div id="app">
    <Header />
    <div v-if="!isEditing">
      <AddTodo />
    </div>
    <div v-else>
      <EditTodo v-on:cancel-edit="cancelEdit" v-bind:todo="updateTodo" />
    </div>
    <Todos v-on:edit_todo="edit" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Header from "./components/Header.vue";
import AddTodo from "./components/AddTodo.vue";
import EditTodo from "./components/EditTodo.vue";

export default {
  name: "App",
  data() {
    return {
      updateTodo: {},
      isEditing: false,
    };
  },
  components: {
    Todos,
    Header,
    AddTodo,
    EditTodo,
  },
  methods: {
    edit(todo) {
      this.updateTodo = todo;
      this.isEditing = true;
    },
    cancelEdit(val) {
      this.isEditing = val;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pointer {
  cursor: pointer;
}
.btn {
  display: inline-block;
  background: #555;
  color: #fff;
  padding: 10px 30px;
}
.btn:hover {
  background: #666;
}
</style>
