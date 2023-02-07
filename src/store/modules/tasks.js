export default {
  state: {
    tasks: [
      {
        id: 1,
        title: "Сходить в кино",
        body: "Друзья позвали в кино завтра",
        date: new Date("2023-02-06"),
        priority: "p2",
        marks: ["Сходить", "Посмотреть"],
      },
      {
        id: 2,
        title: "Доделать представление задач",
        body: "Добавить отображение даты и метки",
        date: new Date("2023-02-07"),
        priority: "p3",
        marks: ["Сделать"],
      },
      {
        id: 3,
        title: "Сделать отображение других страниц",
        body: "",
        date: new Date("2023-02-08"),
        priority: "p1",
        marks: ["Сделать"],
      },
      {
        id: 4,
        title: "Сделать поиск по задачам",
        body: "По заголовкам",
        date: new Date("2023-02-09"),
        priority: "",
        marks: ["Сделать"],
      },
      {
        id: 5,
        title: "Если останется желание, сделать адаптив для мобилки",
        body: "",
        date: new Date("2023-02-10"),
        priority: "",
        marks: ["Сделать"],
      },
      {
        id: 6,
        title: "Завернуть все стейты в бекенд",
        body: "MEVN",
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
    allMarks(state) {
      return state.marks;
    },
    allTasksLength(state, getters) {
      let tasksLength = getters.allTasks.length;
      if (tasksLength > 0) {
        return getters.allTasks.length;
      }
    },
    searchTask(state, req) {
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(req.toLowerCase())
      );
    },
  },
  mutations: {
    addNewTask(state, newTask) {
      state.tasks.unshift(newTask);
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
