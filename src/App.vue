<template>
  <top-bar @showModal="showModal" />
  <div class="main-content">
    <side-bar />
    <router-view />
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
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    modalHidden() {
      this.isShowModal = false;
    },
  },
};
</script>

<style lang="scss">
.main-content {
  display: flex;
}
</style>
