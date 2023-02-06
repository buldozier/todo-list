<template>
  <li class="task" ref="task" :style="{ borderColor: priorityColor }">
    <button
      class="task__complete"
      @click="taskDone(task.id)"
      :style="{
        borderColor: priorityColor,
      }"
    >
      <svg width="24" height="24">
        <path
          :fill="priorityColor"
          d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
        ></path>
      </svg>
    </button>
    <div class="task__content">
      <div class="task__title">{{ task.title }}</div>
      <div class="task__body">{{ task.body }}</div>
      <div v-if="task.date">
        {{
          task.date.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "short",
          })
        }}
      </div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TaskItem",
  emits: ["completeTask"],
  data() {
    return {
      color: "",
    };
  },
  props: {
    task: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    priorityColor() {
      switch (this.task.priority) {
        case "p1":
          return "red";
        case "p2":
          return "orange";
        case "p3":
          return "blue";
        default:
          return "";
      }
    },
  },
  methods: {
    ...mapMutations(["completeTask"]),
    taskDone(id) {
      this.$refs.task.classList.add("task-unmounted");
      setTimeout(() => {
        this.completeTask(id);
        this.$refs.task.classList.remove("task-unmounted");
      }, 120);
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  gap: 10px;
  padding: $pg * 3;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fafafa;
  transition: all 0.2s ease-in-out;
  &__complete {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    border-radius: 50%;
    border: 1px solid black;
    & svg {
      opacity: 0;
      margin-left: -3px;
      margin-top: -2px;
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
  &__body {
    font-size: $fz;
  }
}

.task-unmounted {
  opacity: 0;
  transform: scale(0.95);
}
</style>
