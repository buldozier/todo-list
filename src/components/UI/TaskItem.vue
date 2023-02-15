<template>
  <li class="task" ref="task" :class="setPriorityColor">
    <button
      class="task__complete"
      @click="taskDone(task.id)"
      :style="{
        borderColor: setPriorityColor,
      }"
    >
      <svg width="24" height="24">
        <path
          :fill="setPriorityColor"
          d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
        ></path>
      </svg>
    </button>
    <div class="task__content">
      <div class="task__title">{{ task.title }}</div>
      <div class="task__body">{{ task.body }}</div>
      <div class="task__bottom">
        <div
          class="task__date"
          v-if="task.date"
          :style="{ color: setDateColor }"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" fill-rule="nonzero">
              <path
                d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
                opacity="0"
              ></path>
              <path
                d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"
              ></path>
            </g>
          </svg>
          <span>{{ taskDate }}</span>
        </div>
        <div class="task__marks">
          <div v-for="(mark, index) in task.marks" :key="index">
            <router-link
              class="task__marks_link"
              :to="{ path: `/marks/${mark}` }"
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.828 2H12a2 2 0 012 2v4.172a2 2 0 01-.586 1.414l-4 4a2 2 0 01-2.828 0L2.414 9.414a2 2 0 010-2.828l4-4A2 2 0 017.828 2zm0 1a1 1 0 00-.707.293l-4 4a1 1 0 000 1.414l4.172 4.172a1 1 0 001.414 0l4-4A1 1 0 0013 8.172V4a1 1 0 00-1-1H7.828zM10 7a1 1 0 100-2 1 1 0 000 2z"
                  fill="currentColor"
                ></path>
              </svg>
              <span> {{ mark }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="edit-btn">
      <button class="edit-btn__img" @click="editTask(task.id)">
        <img src="@/assets/icons/edit.svg" alt="Редактировать" />
      </button>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TaskItem",
  data() {
    return {
      priorityColor: "",
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
    setPriorityColor() {
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
    taskDate() {
      const oneDay = 86400000;
      const date =
        +this.task.date +
        new Date(this.task.date).getTimezoneOffset() * 60000 -
        new Date();
      let message;
      if (date < -oneDay) {
        message = `Просрочено (${this.task.date.toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
        })})`;
      }
      if (date < 0 && date >= -oneDay) {
        message = "Сегодня";
      }
      if (date >= 0 && date <= oneDay) {
        message = "Завтра";
      }
      if (date > oneDay) {
        message = this.task.date.toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
        });
      }
      return message;
    },
    setDateColor() {
      const oneDay = 86400000;
      const date =
        +this.task.date +
        new Date(this.task.date).getTimezoneOffset() * 60000 -
        new Date();
      let color = "";
      if (date < -oneDay) {
        color = "red";
      }
      if (date < 0 && date >= -oneDay) {
        color = "green";
      }
      if (date >= 0 && date <= oneDay) {
        color = "blue";
      }
      return color;
    },
  },
  methods: {
    ...mapMutations(["completeTask", "changeModalShow"]),
    taskDone(id) {
      this.$refs.task.classList.add("task-unmounted");
      setTimeout(() => {
        this.completeTask(id);
        this.$refs.task.classList.remove("task-unmounted");
      }, 120);
    },
    editTask(id) {
      this.changeModalShow(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  gap: 10px;
  padding: $pg * 3;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fafafa;
  transition: all 0.2s ease-in-out;
  &__content {
    width: calc(100% - 70px);
  }
  &__title {
    width: 100%;
    font-weight: 500;
    text-overflow: ellipsis;

    overflow-wrap: break-word;
  }
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
    width: 100%;
    font-size: $fz;
    text-overflow: ellipsis;

    overflow-wrap: break-word;
  }
  &__bottom {
    font-size: $fz;
    display: flex;
    align-items: center;
    margin-top: $mn;
  }
  &__date {
    display: flex;
    align-items: center;
    margin-right: $mn * 3;
  }
  &__marks {
    display: flex;
    gap: 10px;
    & div {
    }
    &_link {
      display: flex;
      align-items: center;
      gap: 3px;
      text-decoration: none;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.task-unmounted {
  opacity: 0;
  transform: scale(0.95);
}

.edit-btn {
  display: flex;
  margin-left: auto;
  margin-bottom: auto;
  &__img {
    width: 28px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  & img {
    width: 18px;
    height: 18px;
    padding: $pg;
  }
}

.red {
  box-shadow: 0 0 5px 1px red;
}

.orange {
  box-shadow: 0 0 5px 1px orange;
}

.blue {
  box-shadow: 0 0 5px 1px blue;
}
</style>
