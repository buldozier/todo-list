<template>
  <div class="sorting">
    <div @click.stop="changePopperView(1)" class="sort-by">
      <div class="sort-by__name">
        <img src="../assets/icons/arrow-down-up.svg" alt="Сортировка" />
        <span>Сортировка</span>
      </div>
      <div class="sort-by__target">
        <span>{{ this.sortingValue }}</span>
        <img src="../assets/icons/chevron-down.svg" alt="Выпадающий список" />
      </div>
      <div class="popper sort-by-popper" @click.stop v-if="isSortingPopperShow">
        <ul>
          <li
            v-for="(sort, index) in sortingList"
            :key="index"
            @click="setSortingValue(sort)"
            :class="selectedList(sort)"
          >
            {{ sort }}
          </li>
        </ul>
      </div>
    </div>

    <div @click.stop="changePopperView(2)" class="order">
      <div class="order__name">
        <img src="../assets/icons/arrow-down.svg" alt="Сортировка" />
        <span>Порядок</span>
      </div>
      <div class="order__target">
        <span>{{ this.orderValue }}</span>
        <img src="../assets/icons/chevron-down.svg" alt="Выпадающий список" />
      </div>
      <div class="popper order-popper" @click.stop v-if="isOrderPopperShow">
        <ul>
          <li
            v-for="(order, index) in oderList"
            :key="index"
            @click="setOrderValue(order)"
            :class="selectedOrder(order)"
          >
            {{ order }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "SortingVue",
  data() {
    return {
      sortingValue: "Дата добавления",
      orderValue: "По возрастанию",
      isSortingPopperShow: false,
      isOrderPopperShow: false,
      sortingList: ["Дата добавления", "Имя", "Срок выполнения", "Приоритет"],
      oderList: ["По возрастанию", "По убыванию"],
    };
  },
  methods: {
    ...mapMutations(["changeSortingValue", "changeOrderValue"]),
    changePopperView(active) {
      if (active === 1) {
        this.isSortingPopperShow = !this.isSortingPopperShow;
        this.isOrderPopperShow = false;
      }
      if (active === 2) {
        this.isOrderPopperShow = !this.isOrderPopperShow;
        this.isSortingPopperShow = false;
      }
    },
    clickListener() {
      if (this.isSortingPopperShow === true) {
        this.changePopperView(1);
      }
      if (this.isOrderPopperShow === true) {
        this.changePopperView(2);
      }
    },
    setSortingValue(value) {
      this.sortingValue = value;
      this.changeSortingValue(value);
      this.changePopperView(1);
    },

    setOrderValue(value) {
      this.orderValue = value;
      this.changeOrderValue(value);
      this.changePopperView(2);
    },
    selectedList(value) {
      return this.sortingValue === value ? "selected-list" : "";
    },
    selectedOrder(value) {
      return this.orderValue === value ? "selected-list" : "";
    },
  },
  mounted() {
    document.addEventListener("click", this.clickListener);
  },
};
</script>

<style lang="scss" scoped>
.sort-by,
.order {
  display: flex;
  margin-bottom: 10px;
  font-size: $fz;
  width: 270px;
  justify-content: space-between;
  padding: $pg;
  border-radius: 5px;
  position: relative;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  &__name {
    display: flex;
    gap: 10px;
  }
  &__target {
    display: flex;
    gap: 10px;
  }
}

.popper {
  position: absolute;
  font-size: $fz;
  right: 0;
  top: 95%;
  min-width: 200px;
  border: 1px solid rgba(128, 128, 128, 0.7);
  background-color: $background-color;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  z-index: 10;
  & ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  & li {
    padding: $pg;
    list-style: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}

.selected-list {
  background: url("../assets/icons/check-lg.svg") no-repeat 95% 50%;
}
</style>
