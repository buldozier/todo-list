<template>
  <div class="sidebar" :class="isSidebarShow">
    <ul class="sidebar__links">
      <router-link to="/" class="router-link sidebar__link">
        <div class="sidebar__link-items">
          <div class="sidebar__items-left">
            <img src="../assets/icons/inbox.svg" alt="Inbox" />
            <span>Все задачи</span>
          </div>
          <span>{{ this.allTasks.length ? this.allTasks.length : "" }}</span>
        </div>
      </router-link>
      <router-link to="/today" class="router-link sidebar__link">
        <div class="sidebar__link-items">
          <div class="sidebar__items-left">
            <img src="../assets/icons/today.svg" alt="Inbox" />
            <span>Сегодня</span>
          </div>
          <span>{{
            this.allOverdueTasks.length + this.allTodayTasks.length
              ? this.allOverdueTasks.length + this.allTodayTasks.length
              : ""
          }}</span>
        </div>
      </router-link>
      <router-link to="/planning" class="router-link sidebar__link">
        <div class="sidebar__link-items">
          <div class="sidebar__items-left">
            <img src="../assets/icons/future.svg" alt="Inbox" />
            <span>Планируемые</span>
          </div>
          <span>{{
            this.allFutureTasks.length ? this.allFutureTasks.length : ""
          }}</span>
        </div>
      </router-link>
      <router-link to="/marks" class="router-link sidebar__link">
        <div class="sidebar__link-items">
          <div class="sidebar__items-left">
            <img src="../assets/icons/bookmarks.svg" alt="Inbox" />
            <span>Метки</span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  computed: {
    ...mapGetters([
      "allTasks",
      "allOverdueTasks",
      "allTodayTasks",
      "allFutureTasks",
      "showSidebar",
    ]),
    isSidebarShow() {
      return this.showSidebar ? "" : "sidebar-hidden";
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  width: 300px;
  height: calc(100vh - 100px);
  background-color: #f1f1f1;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.3);
  padding: $pg * 5;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  &__links {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__link {
    cursor: pointer;
    border-radius: 10px;
    background-color: transparent;
    transition: background-color 0.1s ease-in-out;
    & img {
      width: 24px;
      height: 24px;
    }
    &:hover {
      background-color: $sidebar-link;
    }
  }
  &__link-items {
    display: flex;
    padding: $pg * 2;
    text-decoration: none;
    justify-content: space-between;
  }
  &__items-left {
    display: flex;
    gap: 10px;
  }
}

.sidebar-hidden {
  transform: translateX(-350px);
}

.router-link {
  text-decoration: none;
  color: black;
}

.router-link-active {
  background-color: $sidebar-link;
}
</style>
