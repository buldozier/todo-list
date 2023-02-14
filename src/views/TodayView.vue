<template>
  <div class="header">
    <h1>Задачи сегодня</h1>
  </div>
  <div class="container">
    <div class="today">
      <div v-if="allOverdueTasks.length !== 0">
        <h2>Просроченные</h2>
        <tasks-list :taskArray="allOverdueTasks" />
      </div>
      <div v-if="allTodayTasks.length !== 0">
        <h2>Сегодняшние</h2>
        <tasks-list :taskArray="allTodayTasks" />
      </div>
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
  computed: mapGetters(["allOverdueTasks", "allTodayTasks"]),
};
</script>
