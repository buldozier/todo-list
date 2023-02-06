<template>
  <ul class="task-list">
    <task-item v-for="(task, index) in allTasks" :key="index" :task="task" />
  </ul>
</template>

<script>
import TaskItem from "@/components/UI/TaskItem";
import { mapGetters } from "vuex";
export default {
  name: "TasksList",
  components: { TaskItem },
  methods: {},
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
