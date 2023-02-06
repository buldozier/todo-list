<template>
  <top-bar @showSidebar="showSidebar" />
  <div class="main-content">
    <side-bar />
    <router-view />
  </div>
  <modal-vue v-if="showModal"></modal-vue>
</template>

<script>
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import ModalVue from "@/components/ModalVue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { TopBar, SideBar, ModalVue },
  data() {
    return {
      isShowSidebar: true,
    };
  },
  methods: {
    ...mapMutations(["changeModalShow"]),
    showSidebar() {
      this.isShowSidebar = !this.isShowSidebar;
    },
    modalHidden() {
      this.changeModalShow();
    },
  },
  computed: mapGetters(["showModal"]),
};
</script>

<style lang="scss">
.main-content {
}
</style>
