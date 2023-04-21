import { createStore } from "vuex";
import tasks from "@/store/modules/tasks";

export default createStore({
  state: {
    isModalShow: false,
    taskId: "",
    isSidebarShow: true,
    sortingValue: "Дата добавления",
    orderValue: "По возрастанию",
  },
  getters: {
    showModal(state) {
      return state.isModalShow;
    },
    showSidebar(state) {
      return state.isSidebarShow;
    },
    getTaskId(state) {
      return state.taskId;
    },
    getSortingValue(state) {
      return state.sortingValue;
    },
    getOrderValue(state) {
      return state.orderValue;
    },
  },
  mutations: {
    changeModalShow(state, id) {
      state.isModalShow = !state.isModalShow;
      state.taskId = id;
      if (state.isModalShow === false) state.taskId = "";
    },
    changeSortingValue(state, value) {
      state.sortingValue = value;
    },
    changeOrderValue(state, value) {
      state.orderValue = value;
    },
    changeSidebarShow(state) {
      state.isSidebarShow = !state.isSidebarShow;
    },
  },
  actions: {},
  modules: { tasks },
});
