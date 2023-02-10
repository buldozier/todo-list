import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodayView from "@/views/TodayView";
import PlanningVue from "@/views/PlanningVue";
import MarksLayout from "@/views/MarksLayout";
import MarksVue from "@/views/MarksVue";
import MarkVue from "@/views/MarkVue";

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
    name: "marksLayout",
    component: MarksLayout,
    children: [
      {
        path: "",
        name: "marks",
        component: MarksVue,
      },
      {
        path: ":id",
        name: "mark",
        component: MarkVue,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
