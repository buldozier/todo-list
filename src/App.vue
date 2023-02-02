<template>
  <top-bar @showModal="showModal" />
  <div class="main-content">
    <side-bar :taskCount="tasks.length" />
    <div v-for="(task, index) in tasks" :key="index">
      <ul>
        <li>{{ task.title }}</li>
        <li>{{ task.body }}</li>
      </ul>
    </div>
    <router-view />
  </div>
  <modal-vue
    v-if="isShowModal"
    @modalHidden="modalHidden"
    @addTask="addTask"
  ></modal-vue>
</template>

<script>
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import ModalVue from "@/components/ModalVue";
export default {
  components: { TopBar, SideBar, ModalVue },
  data() {
    return {
      isShowModal: false,
      tasks: [],
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    modalHidden() {
      this.isShowModal = false;
    },
    addTask(el) {
      this.tasks.push(el);
    },
  },
};
</script>

<style lang="scss">
.main-content {
  display: flex;
}
</style>
