<template>
  <div class="todo-container">
    <div class="todos mt-3">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        <div class="d-flex">
          <h5 class="mt-2">
            {{ todo.title }}
          </h5>
          <div class="ms-auto">
            <i
              class="fa fa-pencil-alt text-primary pointer"
              @click="$emit('edit_todo', todo)"
            ></i>
            <br />
            <i
              class="fa fa-trash text-danger pointer"
              @click="deleteTodo(todo.id)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["deleteTodo"]),
  },
};
</script>

<style scoped>
.todo-container {
  justify-content: center;
  margin: auto;
  width: 50%;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
</style>
