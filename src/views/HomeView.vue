<template>
  <div class="home">
    <h1>Домашняя страница</h1>
    <tasks-list />
  </div>
</template>

<script>
import TasksList from "@/components/UI/TasksList";
export default {
  name: "HomeView",
  components: { TasksList },
};
</script>

<style lang="scss" scoped>
.home {
  padding: $pg * 5;
}
</style>
