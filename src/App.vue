<template>
  <top-bar />
  <div class="main-content">
    <side-bar />
    <router-view />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
export default {
  components: { TopBar, SideBar },
};
</script>

<style lang="scss">
.main-content {
  display: flex;
}
</style>
