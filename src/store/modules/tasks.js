export default {
  state: {
    tasks: [
      {
        id: 1,
        title: "Do something nice for someone I care about",
        body: "Take cat on a walk",
        date: new Date("2023-02-15"),
        priority: "p2",
        marks: ["Сходить", "Посмотреть", "Сделать"],
      },
      {
        id: 2,
        title: "Memorize the fifty states and their capitals",
        body: "Go to the gym",
        date: new Date("2023-02-16"),
        priority: "p3",
        marks: ["Сделать"],
      },
      {
        id: 3,
        title: "Watch a classic movie",
        body: "",
        date: new Date("2023-02-17"),
        priority: "p1",
        marks: ["Сделать"],
      },
      {
        id: 4,
        title:
          "Contribute code or a monetary donation to an open-source software project",
        body: "Create a cookbook with favorite recipes",
        date: new Date("2023-02-18"),
        priority: "",
        marks: ["Сделать"],
      },
      {
        id: 5,
        title: "Solve a Rubik's cube",
        body: "",
        date: new Date("2023-02-19"),
        priority: "",
        marks: ["Сделать"],
      },
      {
        id: 6,
        title: "Bake pastries for me and neighbor",
        body: "Go see a Broadway production",
        date: "",
        priority: "",
        marks: ["Сделать"],
      },
    ],
    marks: ["Сделать", "Прочитать", "Сходить", "Посмотреть"],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
    allTasksFilteredByName: (state) => (name, order) => {
      const newAarray = state.tasks.map((t) => {
        if (t.date !== "") {
          t.date = +t.date;
        }
        return JSON.parse(JSON.stringify(t));
      });

      newAarray.forEach((t) => {
        if (t.date !== "") {
          t.date = new Date(t.date);
        }
      });

      if (name === "Имя") {
        newAarray.sort((a, b) => {
          return a.title > b.title ? 1 : -1;
        });
      }

      if (name === "Срок выполнения") {
        newAarray.sort((a, b) => {
          if (a.date !== "") {
            return a.date > b.date ? 1 : -1;
          }
        });
      }

      if (name === "Приоритет") {
        newAarray
          .sort((a, b) => {
            if (a.priority !== "") {
              return a.priority > b.priority ? 1 : -1;
            }
          })
          .reverse();
      }

      if (name === "Default") {
        newAarray.sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
      }

      if (order === "По убыванию") {
        newAarray.reverse();
      }

      return newAarray;
    },
    allMarks(state) {
      return state.marks;
    },
    allOverdueTasks(state) {
      return state.tasks.filter(
        (t) =>
          t.date !== "" &&
          +t.date + new Date(t.date).getTimezoneOffset() * 60000 - new Date() <
            -86400000
      );
    },
    allTodayTasks(state) {
      return state.tasks.filter(
        (t) =>
          t.date !== "" &&
          +t.date + new Date(t.date).getTimezoneOffset() * 60000 - new Date() <
            0 &&
          +t.date + new Date(t.date).getTimezoneOffset() * 60000 - new Date() >
            -86400000
      );
    },
    allFutureTasks(state) {
      return state.tasks.filter(
        (t) =>
          t.date !== "" &&
          +t.date + new Date(t.date).getTimezoneOffset() * 60000 - new Date() >
            0
      );
    },
    tasksByMark: (state) => (mark) => {
      return state.tasks.filter((t) => t.marks.includes(mark));
    },
    taskById: (state) => (id) => {
      return state.tasks.find((t) => t.id === id);
    },
  },
  mutations: {
    addNewTask(state, newTask) {
      state.tasks.unshift(newTask);
    },
    editTask(state, task) {
      state.tasks.splice(
        state.tasks.findIndex((i) => i.id === task.id),
        1,
        task
      );
    },
    completeTask(state, id) {
      const currentIndex = state.tasks.findIndex((el) => el.id === id);
      state.tasks.splice(currentIndex, 1);
    },
    addNewMark(state, newMark) {
      state.marks.push(newMark);
    },
  },
  actions: {},
};
