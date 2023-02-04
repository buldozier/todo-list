<template>
  <div class="top-bar">
    <div class="top-bar-inner">
      <div class="top-bar-inner__left">
        <div class="top-bar-inner__main-menu" @click="showSidebar">
          <div class="top-bar-inner__main-menu_btn"></div>
        </div>
        <router-link class="top-bar-inner__home-btn" to="/">
          <img class="home-icon" src="../assets/icons/home.svg" alt="Домой" />
        </router-link>
        <div class="top-bar-inner__search">
          <input class="fast-search" placeholder="Поиск задач..." />
          <div class="search-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              aria-hidden="true"
              class="search-icon"
            >
              <path
                d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="top-bar-inner__right">
        <div class="top-bar-inner__add-task" @click="showModal">
          <img
            class="top-bar-inner__add-task_btn"
            src="../assets/icons/plus.svg"
            alt="Добавить задачу"
          />
        </div>
        <div class="top-bar-inner__settings">
          <img src="../assets/icons/gear.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  components: {},
  data() {
    return {};
  },
  methods: {
    showModal() {
      this.$emit("showModal");
    },
    showSidebar() {
      this.$emit("showSidebar");
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  height: 50px;
  background-color: $main-color;
}

.top-bar-inner {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 $pg * 5;
  &__left,
  &__right {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  & img {
    width: 25px;
    height: 25px;
  }
  &__main-menu {
    display: flex;
    align-items: center;

    height: 25px;
    cursor: pointer;
    padding: $pg;
    border-radius: 5px;
    &:hover {
      background-color: $main-color-2;
    }
    &_btn {
      width: 25px;
      height: 3px;
      position: relative;
      background-color: $background-color;
      &:after {
        content: "";
        width: 25px;
        height: 3px;
        position: absolute;
        top: -8px;
        left: 0;
        background-color: $background-color;
      }
      &:before {
        content: "";
        width: 25px;
        height: 3px;
        position: absolute;
        top: 8px;
        left: 0;
        background-color: $background-color;
      }
    }
  }
  &__home-btn,
  &__add-task,
  &__settings {
    padding: $pg;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: $main-color-2;
    }
  }
  &__search {
    position: relative;
    cursor: text;
    &:hover .fast-search {
      color: black;
      background-color: white;
      &::placeholder {
        color: black;
      }
    }
    &:hover .search-icon {
      color: black;
    }
    & .fast-search:focus {
      color: black;
      background-color: white;
      width: 300px;

      &::placeholder {
        color: black;
      }
      & ~ .search-img .search-icon {
        color: black;
      }
    }
  }
}

.search-icon {
  position: absolute;
  top: 4px;
  left: 8px;
  z-index: 2;
  color: white;
  & img {
    width: 20px;
    height: 20px;
  }
  &:hover {
    color: black;
  }
}

.fast-search {
  border: none;
  outline: none;
  position: relative;
  font-size: 14px;
  padding-left: $pg * 8;
  height: 30px;
  color: $text-color;
  background-color: $main-color-2;
  border-radius: 7px;
  transition: all 0.25s ease-out;
  &::placeholder {
    color: white;
  }
}
</style>
