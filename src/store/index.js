import { createStore } from "vuex";
import tasks from "@/store/modules/tasks";

export default createStore({
  state: {
    isModalShow: false,
    isSidebarShow: true,
  },
  getters: {
    showModal(state) {
      return state.isModalShow;
    },
    showSidebar(state) {
      return state.isSidebarShow;
    },
  },
  mutations: {
    changeModalShow(state) {
      state.isModalShow = !state.isModalShow;
    },
    changeSidebarShow(state) {
      state.isSidebarShow = !state.isSidebarShow;
    },
  },
  actions: {},
  modules: { tasks },
});
