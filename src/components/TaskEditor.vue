<template>
  <div class="task">
    <div class="task-editor">
      <div class="task-editor__content">
        <div class="task-editor__task-header">
          <input
            placeholder="Название задачи"
            type="text"
            v-model="task.title"
          />
        </div>
        <div class="task-editor__task-body">
          <input placeholder="Описание" type="text" v-model="task.body" />
        </div>
      </div>
    </div>
    <div class="task-buttons">
      <button class="close" @click="closeTask"><span>Отмена</span></button>
      <button
        @click="addTask"
        class="submit"
        ref="submit"
        :class="isSubmiteActive"
      >
        <span>Добавить задачу</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TaskEditor",
  emits: ["closeTask", "addTask"],
  data() {
    return {
      task: {
        title: "",
        body: "",
        date: null,
        priority: null,
        mark: null,
      },
      isSubmitActive: false,
    };
  },
  methods: {
    ...mapMutations(["addNewTask"]),
    closeTask() {
      this.$emit("closeTask");
    },
    addTask() {
      this.addNewTask({
        id: Date.now(),
        title: this.task.title,
        body: this.task.body,
        date: this.task.date,
        priority: this.task.priority,
        mark: this.task.mark,
      });
      if (this.task.title !== "") {
        this.$emit("addTask", this.task);
        this.closeTask();
      }
    },
  },
  computed: {
    isSubmiteActive() {
      return this.task.title !== "" ? "active-submit" : "";
    },
  },
  mounted() {
    document.addEventListener("keyup", (e) => {
      if (this.task.title !== "" && e.code === "Enter") {
        this.addTask();
      }
      if (e.code === "Escape") {
        this.closeTask();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.task-editor {
  padding: $pg * 5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  & input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
  }
}

.task-buttons {
  font-size: $fz;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin: $mn * 3;
  & button {
    outline: none;
    border-radius: 5px;
    padding: $pg $pg * 2;
    background-color: transparent;
    border: none;
    transition: background-color 0.1s ease-in-out;
  }
  & .close {
    background-color: #e1e1e1;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    &:hover {
      background-color: #c9c9c9;
      cursor: pointer;
    }
  }
  & .submit {
    color: white;
    background-color: $additional-color;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: not-allowed;
  }
  & .active-submit {
    background-color: $main-color-2;
    &:hover {
      background-color: $main-color;
      cursor: pointer;
    }
  }
}
</style>
