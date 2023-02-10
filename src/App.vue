<template>
  <top-bar />
  <div class="main-content">
    <side-bar />
    <div class="main-view" :class="isSidebarShow">
      <router-view />
    </div>
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
    return {};
  },
  methods: {
    ...mapMutations(["changeModalShow"]),
    modalHidden() {
      this.changeModalShow();
    },
  },
  computed: {
    ...mapGetters(["showModal", "showSidebar"]),
    isSidebarShow() {
      return this.showSidebar ? "" : "sidebar-hidden";
    },
  },
};
</script>

<style lang="scss">
.main-content {
}

.main-view {
  margin-left: 350px;
  overflow-y: scroll;
  height: calc(100vh - 50px);
  transition: margin 0.3s ease-in-out;
}

.sidebar-hidden {
  margin-left: 0;
}
</style>
