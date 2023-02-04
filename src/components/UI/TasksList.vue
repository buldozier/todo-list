<template>
  <ul class="task-list">
    <task-item
      v-for="(task, index) in allTasks"
      :key="index"
      :task="task"
      @completeTask="completeTask"
    />
  </ul>
</template>

<script>
import TaskItem from "@/components/UI/TaskItem";
import { mapGetters } from "vuex";
export default {
  name: "TasksList",
  components: { TaskItem },
  emits: ["completeTask"],
  methods: {
    completeTask(index) {
      this.$emit("completeTask", index);
    },
  },
  computed: mapGetters(["allTasks"]),
};
</script>

<style lang="scss" scoped>
ul.task-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: $mn * 5 !important;
}
</style>
