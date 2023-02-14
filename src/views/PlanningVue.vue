<template>
  <div class="header">
    <h1>Планируемые задачи</h1>
  </div>
  <div class="container">
    <div class="planning">
      <tasks-list
        v-if="allFutureTasks.length !== 0"
        :taskArray="allFutureTasks"
      />
      <h2 v-else>Новых задач нет, попробуйте добавить одну</h2>
    </div>
  </div>
</template>

<script>
import TasksList from "@/components/UI/TasksList";
import { mapGetters } from "vuex";

export default {
  name: "PlanningVue",
  components: { TasksList },
  computed: mapGetters(["allFutureTasks"]),
};
</script>

<style scoped></style>
