<template>
  <li class="task">
    <button class="task__complete" @click="taskDone(task.id)"></button>
    <div class="task__content">
      <div class="task__title">{{ task.title }}</div>
      <div class="task__body">{{ task.body }}</div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TaskItem",
  emits: ["completeTask"],
  props: {
    task: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    ...mapMutations(["completeTask"]),
    taskDone(id) {
      this.completeTask(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  gap: 10px;
  padding: $pg * 3;
  border: 1px solid $main-color;
  border-radius: 10px;
  &__complete {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    border-radius: 50%;
    border: 1px solid $main-color;
    background-color: $additional-color;
  }
  &__body {
    font-size: $fz;
  }
}
</style>
