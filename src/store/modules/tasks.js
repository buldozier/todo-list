export default {
  state: {
    tasks: [
      {
        id: 1,
        title: "Сходить в кино",
        body: "Друзья позвали в кино завтра",
        date: new Date("2023-02-11"),
        priority: "p2",
        marks: ["Сходить", "Посмотреть", "Сделать"],
      },
      {
        id: 2,
        title: "Доделать представление задач",
        body: "Добавить отображение даты и метки",
        date: new Date("2023-02-12"),
        priority: "p3",
        marks: ["Сделать"],
      },
      {
        id: 3,
        title: "Сделать отображение других страниц",
        body: "",
        date: new Date("2023-02-13"),
        priority: "p1",
        marks: ["Сделать"],
      },
      {
        id: 4,
        title: "Сделать поиск по задачам",
        body: "По заголовкам",
        date: new Date("2023-02-14"),
        priority: "",
        marks: ["Сделать"],
      },
      {
        id: 5,
        title: "Если останется желание, сделать адаптив для мобилки",
        body: "",
        date: new Date("2023-02-15"),
        priority: "",
        marks: ["Сделать"],
      },
      {
        id: 6,
        title: "JIJA EZ",
        body: "EZ EZ EZ",
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
    allTasksFilteredByName(state) {
      return state.tasks.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
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
      console.log(newTask);
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
