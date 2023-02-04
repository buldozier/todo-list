<template>
  <top-bar @showModal="showModal" @showSidebar="showSidebar" />
  <div class="main-content">
    <side-bar :isShowSidebar="isShowSidebar" />
    <router-view :isShowSidebar="isShowSidebar" />
  </div>
  <modal-vue v-if="isShowModal" @modalHidden="modalHidden"></modal-vue>
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
      isShowSidebar: true,
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    showSidebar() {
      this.isShowSidebar = !this.isShowSidebar;
    },
    modalHidden() {
      this.isShowModal = false;
    },
  },
};
</script>

<style lang="scss">
.main-content {
}
</style>
