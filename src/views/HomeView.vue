<template>
  <div class="home-view" :class="isSidebarShow">
    <div class="header">
      <h1>Все задачи</h1>
      <p></p>
    </div>
    <div class="container">
      <div class="home">
        <tasks-list class="tasks-list" />
      </div>
    </div>
  </div>
</template>

<script>
import TasksList from "@/components/UI/TasksList";
export default {
  name: "HomeView",
  props: {
    isShowSidebar: {
      type: Boolean,
      required: true,
    },
  },
  components: { TasksList },
  computed: {
    isSidebarShow() {
      return this.isShowSidebar ? "" : "sidebar-hidden";
    },
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  margin-left: 350px;
  overflow-y: scroll;
  height: calc(100vh - 50px);
  transition: margin 0.3s ease-in-out;
}

.sidebar-hidden {
  margin-left: 0;
}

.header {
  padding: $pg * 10 $pg * 5 $pg * 2;
  margin: 0 auto;
  max-width: $max-width;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: $background-color;
}
.home {
  display: flex;
  flex-direction: column;
  max-width: $max-width;
}

.tasks-list {
}
</style>
