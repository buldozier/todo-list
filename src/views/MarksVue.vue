<template>
  <div class="header">
    <h1>Метки</h1>
  </div>
  <div class="container">
    <div class="marks">
      <ul>
        <li class="mark" v-for="(mark, index) in allMarks" :key="index">
          <router-link class="mark-link" :to="{ path: `/marks/${mark}` }">
            <svg width="24" height="24" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.828 2H12a2 2 0 012 2v4.172a2 2 0 01-.586 1.414l-4 4a2 2 0 01-2.828 0L2.414 9.414a2 2 0 010-2.828l4-4A2 2 0 017.828 2zm0 1a1 1 0 00-.707.293l-4 4a1 1 0 000 1.414l4.172 4.172a1 1 0 001.414 0l4-4A1 1 0 0013 8.172V4a1 1 0 00-1-1H7.828zM10 7a1 1 0 100-2 1 1 0 000 2z"
                fill="currentColor"
              ></path>
            </svg>
            <h2>
              {{ mark }}
            </h2>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MarksVue",
  computed: mapGetters(["allMarks", "tasksByMark"]),
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & li {
  }
}

.mark {
}

.mark-link {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
}
</style>
