<template>
  <top-bar />
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
    return {};
  },
  methods: {
    ...mapMutations(["changeModalShow"]),
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
