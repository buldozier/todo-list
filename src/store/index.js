import { createStore } from "vuex";
import tasks from "@/store/modules/tasks";

export default createStore({
  state: {
    isModalShow: false,
    taskId: "",
    isSidebarShow: true,
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
  },
  mutations: {
    changeModalShow(state, id) {
      state.isModalShow = !state.isModalShow;
      state.taskId = id;
      if (state.isModalShow === false) state.taskId = "";
    },
    changeSidebarShow(state) {
      state.isSidebarShow = !state.isSidebarShow;
    },
  },
  actions: {},
  modules: { tasks },
});
