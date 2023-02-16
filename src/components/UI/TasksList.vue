<template>
  <ul class="task-list">
    <task-item v-for="task in taskArray" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskItem from "@/components/UI/TaskItem";
export default {
  name: "TasksList",
  components: { TaskItem },
  props: {
    taskArray: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
ul.task-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: $mn * 5 !important;
  margin-bottom: $mn * 5 !important;
}
</style>
