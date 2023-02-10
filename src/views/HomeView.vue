<template>
  <div class="header">
    <h1>Все задачи</h1>
    <p></p>
  </div>
  <div class="container">
    <div class="home">
      <tasks-list v-if="allTasks.length !== 0" :taskArray="allTasks" />
      <h2 v-else>Новых задач нет, попробуйте добавить одну</h2>
    </div>
  </div>
</template>

<script>
import TasksList from "@/components/UI/TasksList";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: { TasksList },
  computed: mapGetters(["allTasks"]),
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  max-width: $max-width;
}
</style>
