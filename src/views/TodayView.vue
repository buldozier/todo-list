<template>
  <div class="header">
    <h1>Задачи сегодня</h1>
    <p></p>
  </div>
  <div class="container">
    <div class="today">
      <tasks-list
        v-if="allTodayTasks.length !== 0"
        :taskArray="allTodayTasks"
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
  computed: mapGetters(["allTodayTasks"]),
};
</script>
