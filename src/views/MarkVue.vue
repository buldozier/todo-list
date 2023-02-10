<template>
  <div>
    <h1 class="header">{{ this.mark }}</h1>

    <div class="container">
      <router-link to="/marks">Назад</router-link>
      <tasks-list
        v-if="tasksByMark(this.mark).length !== 0"
        :taskArray="tasksByMark(this.mark)"
      />
      <h2 v-else>Попробуйте назначить эту метку каким-нибудь задачам</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TasksList from "@/components/UI/TasksList";

export default {
  name: "MarkVue",
  components: { TasksList },
  data() {
    return {
      mark: "",
    };
  },
  computed: mapGetters(["tasksByMark"]),
  methods: {},
  mounted() {
    this.mark = this.$route.params.id;
  },
  updated() {
    this.mark = this.$route.params.id;
  },
};
</script>

<style scoped></style>
