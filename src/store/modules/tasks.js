export default {
  state: {
    tasks: [
      { id: 1, title: "Первая задача", body: "Первая задача" },
      { id: 2, title: "Вторая задача", body: "Вторая задача" },
      { id: 3, title: "Третья задача", body: "Третья задача" },
      { id: 4, title: "Четвертая задача", body: "Четвертая задача" },
      { id: 5, title: "Пятая задача", body: "Пятая задача" },
    ],
    marks: ["Прочитать", "Сходить", "Посмотреть"],
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
