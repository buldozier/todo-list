<template>
  <div class="top-bar">
    <div class="top-bar-inner">
      <div class="top-bar-inner__left">
        <div class="top-bar-inner__main-menu">
          <div class="top-bar-inner__main-menu_btn"></div>
        </div>
        <div class="top-bar-inner__home-btn">
          <router-link to="/">
            <img class="home-icon" src="../assets/icons/home.svg" alt="Домой" />
          </router-link>
        </div>
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
      <div class="top-bar-inner__right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
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
  &__left {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  &__main-menu {
    display: flex;
    align-items: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
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
      &::placeholder {
        color: black;
      }
      & ~ .search-img .search-icon {
        color: black;
      }
    }
  }
}

.home-icon {
  width: 25px;
  height: 25px;
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
  color: white;
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
