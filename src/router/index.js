import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodayView from "@/views/TodayView";
import PlanningVue from "@/views/PlanningVue";
import MarksVue from "@/views/MarksVue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/today",
    name: "today",
    component: TodayView,
  },
  {
    path: "/planning",
    name: "planning",
    component: PlanningVue,
  },
  {
    path: "/marks",
    name: "marks",
    component: MarksVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
