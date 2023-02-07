<template>
  <div class="task">
    <div class="task-editor">
      <div class="task-editor__content">
        <div class="task-editor__task-header">
          <input
            autofocus
            placeholder="Название задачи"
            type="text"
            v-model="task.title"
            class="task-title"
          />
        </div>
        <div class="task-editor__task-body">
          <input
            placeholder="Описание"
            type="text"
            v-model="task.body"
            class="task-body"
          />
        </div>
      </div>
      <div class="task-editor__additional">
        <div class="date">
          <input type="date" v-model="task.date" placeholder="Выбор даты" />
        </div>
        <div class="priority" ref="priority" :style="{ color: priorityColor }">
          <svg class="priority__svg" width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M2 3a.5.5 0 01.276-.447C3.025 2.179 4.096 2 5.5 2c.901 0 1.485.135 2.658.526C9.235 2.885 9.735 3 10.5 3c1.263 0 2.192-.155 2.776-.447A.5.5 0 0114 3v6.5a.5.5 0 01-.276.447c-.749.375-1.82.553-3.224.553-.901 0-1.485-.135-2.658-.526C6.765 9.615 6.265 9.5 5.5 9.5c-1.08 0-1.915.113-2.5.329V13.5a.5.5 0 01-1 0V3zm1 5.779v-5.45C3.585 3.113 4.42 3 5.5 3c.765 0 1.265.115 2.342.474C9.015 3.865 9.599 4 10.5 4c1.002 0 1.834-.09 2.5-.279v5.45c-.585.216-1.42.329-2.5.329-.765 0-1.265-.115-2.342-.474C6.985 8.635 6.401 8.5 5.5 8.5c-1.001 0-1.834.09-2.5.279z"
              fill="currentColor"
            ></path>
          </svg>
          <select
            class="priority__select"
            v-model="task.priority"
            :class="isValueSelected"
            :style="{ color: priorityColor }"
          >
            <option value="p1" label="P1"></option>
            <option value="p2" label="P2"></option>
            <option value="p3" label="P3"></option>
            <option
              disabled
              value=""
              style="display: none"
              selected
              label="Приоритет"
            ></option>
          </select>
          <button v-if="isValueSelected" @click="setDefaultSelect">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="inherit"
                d="M11.854 11.854a.5.5 0 000-.708L8.707 8l3.147-3.146a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708 0z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mark" @click.stop="popperChangeView">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.828 2H12a2 2 0 012 2v4.172a2 2 0 01-.586 1.414l-4 4a2 2 0 01-2.828 0L2.414 9.414a2 2 0 010-2.828l4-4A2 2 0 017.828 2zm0 1a1 1 0 00-.707.293l-4 4a1 1 0 000 1.414l4.172 4.172a1 1 0 001.414 0l4-4A1 1 0 0013 8.172V4a1 1 0 00-1-1H7.828zM10 7a1 1 0 100-2 1 1 0 000 2z"
              fill="currentColor"
            ></path>
          </svg>
          <div>{{ markTitle }}</div>
        </div>
        <div class="popper" @click.stop v-if="popperView">
          <input
            type="text"
            placeholder="Введите название метки"
            v-model="markValue"
          />
          <ul v-if="allFilteredMarks.length !== 0">
            <li v-for="(mark, index) in allFilteredMarks" :key="index">
              <div class="popper__mark">
                <label :for="mark">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="gray"
                      fill-rule="nonzero"
                      d="M5.914 11.086l4.5-4.5A2 2 0 0 1 11.828 6H16a2 2 0 0 1 2 2v4.172a2 2 0 0 1-.586 1.414l-4.5 4.5a2 2 0 0 1-2.828 0l-4.172-4.172a2 2 0 0 1 0-2.828zM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    ></path>
                  </svg>
                  <div>{{ mark }}</div>
                </label>
                <input
                  :id="mark"
                  :value="mark"
                  type="checkbox"
                  v-model="task.marks"
                />
              </div>
            </li>
          </ul>
          <div class="no-filtered-marks" v-else>Метка не найдена</div>
          <button
            class="popper__add-mark"
            v-if="isMarkAvailable"
            @click="addMark(markValue)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M12.5 6a.5.5 0 0 1 .5.5V12h5.5a.5.5 0 1 1 0 1H13v5.5a.5.5 0 1 1-1 0V13H6.5a.5.5 0 1 1 0-1H12V6.5a.5.5 0 0 1 .5-.5z"
              ></path>
            </svg>
            <button>Создать "{{ markValue }}"</button>
          </button>
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
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "TaskEditor",
  emits: ["closeTask"],
  data() {
    return {
      task: {
        title: "",
        body: "",
        date: "",
        priority: "",
        marks: [],
      },
      isSubmitActive: false,
      priorityColor: "black",
      popperView: false,
      markTitle: "Марки",
      markValue: "",
    };
  },
  methods: {
    ...mapMutations(["addNewTask", "addNewMark"]),
    closeTask() {
      this.task.date = "";
      this.$emit("closeTask");
    },
    addTask() {
      if (this.task.title !== "") {
        this.addNewTask({
          id: Date.now(),
          title: this.task.title,
          body: this.task.body,
          date: this.task.date ? new Date(this.task.date) : "",
          priority: this.task.priority,
          marks: this.task.marks,
        });
        this.closeTask();
      }
    },
    setDefaultSelect() {
      this.task.priority = "";
    },
    popperChangeView() {
      this.popperView = !this.popperView;
      this.markValue = "";
    },
    addMark(val) {
      this.addNewMark(val);
    },
  },
  computed: {
    ...mapGetters(["allMarks"]),
    allFilteredMarks() {
      return this.allMarks.filter((mark) =>
        mark.toLowerCase().includes(this.markValue.toLowerCase())
      );
    },
    isSubmiteActive() {
      return this.task.title !== "" ? "active-submit" : "";
    },
    isValueSelected() {
      return this.task.priority !== "" ? "value-selected" : "";
    },
    isMarkAvailable() {
      const isMarkExist = this.allMarks.filter(
        (t) => t === this.markValue
      ).length;
      console.log(isMarkExist);

      return this.markValue !== "" && !isMarkExist;
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
    document.addEventListener("click", () => {
      if (this.popperView === true) {
        this.popperChangeView();
      }
    });
  },
  watch: {
    task: {
      handler(val) {
        switch (val.priority) {
          case "p1":
            console.log(this.priorityColor);
            this.priorityColor = "red";
            break;
          case "p2":
            console.log(this.priorityColor);
            this.priorityColor = "orange";
            break;
          case "p3":
            console.log(this.priorityColor);
            this.priorityColor = "blue";
            break;
          default:
            this.priorityColor = "black";
            break;
        }
        let length = this.task.marks.length;
        if (length === 0) {
          this.markTitle = "Марки";
        } else if (length === 1) {
          this.markTitle = length + " марка";
        } else if (length > 1 && length < 5) {
          this.markTitle = length + " марки";
        } else if (length >= 5 && length < 10) {
          this.markTitle = length + " марок";
        } else {
          this.markTitle = length;
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.task-editor {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  & input {
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
  }
  &__additional {
    display: flex;
    gap: 10px;
    padding: 0 $pg * 5;
    font-size: $fz;
    margin-bottom: $mn * 2;
    position: relative;
    & .date,
    .priority,
    .mark {
      display: flex;
      position: relative;
      align-items: center;
      height: 25px;
      line-height: 1;
      gap: 5px;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 0 $pg;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      &:hover {
        opacity: 1;
        background-color: #e1e1e1;
      }
    }
    & svg {
      margin-top: -2px;
    }
  }
}
input[type="date"] {
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.priority {
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 0 !important;
  &__svg {
    position: absolute;
    left: 5px;
    top: 7px;
  }
  &__select {
    height: 25px;
    padding-left: $pg * 5;
    width: 80px;
    outline: none;
    border: none;
    background: transparent;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    & option {
      color: $text-color;
    }
  }
  & button {
    position: absolute;
    top: 3px;
    right: 0;
    display: flex;
    align-items: center;
    padding: $pg/2;
    margin: 0 $mn;
    border-radius: 30%;
    &:hover {
      background: #bebebe;
    }
  }
}

.mark {
  position: relative;
}

.popper {
  position: absolute;
  top: 100%;
  right: 130px;
  min-width: 200px;
  border: 1px solid rgba(128, 128, 128, 0.7);
  background-color: $background-color;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  &__mark {
    display: flex;
    & label {
      display: flex;
      flex-grow: 1;
    }
    & input {
      width: 16px;
    }
  }
  & input {
    padding: $pg * 2;
    border-bottom: 1px solid rgba(128, 128, 128, 0.7);
  }
  &__add-mark {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    gap: 10px;
    padding: $pg;
    &:hover {
      background-color: rgba(128, 128, 128, 0.4);
    }
  }
  & ul {
    margin: 0;
    //max-height: 76px;
    overflow-y: scroll;
    padding: $pg $pg * 2;
    border-bottom: 1px solid rgba(128, 128, 128, 0.7);
  }
  & li {
    margin-bottom: $mn;
    list-style: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.popper-hidden {
  display: none;
}

.no-filtered-marks {
  padding: $pg * 2;
  border-bottom: 1px solid rgba(128, 128, 128, 0.7);
}

.task-title {
  padding: $pg * 5 $pg * 5 $pg;
}

.task-body {
  padding: $pg $pg * 5 $pg * 3;
}

.value-selected {
  width: 50px;
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
