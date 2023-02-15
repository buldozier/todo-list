<template>
  <div class="header">
    <h1>Все задачи</h1>
    <sorting-vue
      @sortingValue="editSortingValue"
      @orderValue="editOrderValue"
    />
  </div>
  <div class="container">
    <div class="home">
      <tasks-list v-if="allTasks.length !== 0" :taskArray="tasksArray" />
      <h2 v-else>Новых задач нет, попробуйте добавить одну</h2>
    </div>
  </div>
</template>

<script>
import TasksList from "@/components/UI/TasksList";
import SortingVue from "@/components/SortingVue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: { TasksList, SortingVue },
  data() {
    return {
      sortingValue: "Дата добавления",
      orderValue: "По возрастанию",
    };
  },
  methods: {
    editSortingValue(data) {
      this.sortingValue = data;
    },
    editOrderValue(data) {
      this.orderValue = data;
    },
  },
  computed: {
    ...mapGetters(["allTasks", "allTasksFilteredByName"]),
    tasksArray() {
      switch (this.sortingValue) {
        case "Дата добавления":
          return this.allTasks;
        case "Имя":
          return this.allTasksFilteredByName;
        default:
          return this.allTasks;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  max-width: $max-width;
}
</style>
