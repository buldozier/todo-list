<template>
  <div>
    <div class="header mark-header">
      <router-link to="/marks">
        <img src="@/assets/icons/arrow.svg" alt="Назад" />
      </router-link>
      <h1>
        {{ this.mark }}
      </h1>
    </div>

    <div class="container">
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

<style lang="scss" scoped>
.mark-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  & img {
    width: 25px;
    height: 25px;
    padding: $pg;
    border-radius: 5px;
    opacity: 0.6;
    transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      opacity: 1;
    }
  }
}
</style>
