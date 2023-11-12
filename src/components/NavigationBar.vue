<template>
  <div>
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-dark px-5"
      style="background-color: #0a0908"
    >
      <router-link class="navbar-brand alt-font" to="/">UFood</router-link>

      <form
        v-if="innerWidth <= navCollapseValue"
        class="form-inline col justify-content-center me-1"
      >
        <div class="input-group m-auto w-85">
          <input
            class="form-control nav_searchbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </form>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="col navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </ul>
        <form v-if="innerWidth >= navCollapseValue" class="col form-inline">
          <div class="input-group">
            <input
              class="form-control mr-sm-2 nav_searchbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form>
        <ul class="col justify-content-end navbar-nav">
          <li v-if="loggedIn" class="nav-item" id="username">
            <router-link class="nav-link text-warning" to="/user">{{
              user.name
            }}</router-link>
          </li>
          <li v-if="!loggedIn" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li v-if="loggedIn" class="nav-item" id="btn_logout">
            <router-link class="nav-link" to="/" @click="logout"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
} from "vue";
import { onBeforeRouteUpdate } from "vue-router";

export default {
  name: "NavigationBar",
  props: {
    isLoggedIn: Boolean,
  },
  setup(props, { emit }) {
    const state = reactive({
      loggedIn: props.isLoggedIn,
      innerWidth: window.innerWidth,
      navCollapseValue: 990,
    });

    const user = computed(() => {
      const userData = JSON.parse(localStorage.getItem("user"));
      return userData;
    });

    watch(
      () => props.isLoggedIn,
      (newValue) => {
        state.loggedIn = newValue;
      },
    );

    watch(
      () => state.innerWidth,
      (newValue) => {
        state.innerWidth = newValue;
      },
    );

    const logout = () => {
      localStorage.removeItem("user");
      state.loggedIn = false;
      emit("asLoggedOut", {
        isLoggedIn: false,
      });
    };

    const handleWindowResize = () => {
      state.innerWidth = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", handleWindowResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleWindowResize);
    });

    return {
      ...toRefs(state),
      user,
      logout,
    };
  },
};
</script>

<style>
.nav_searchbar {
  border-radius: 45px;
  height: auto;
}
.w-85 {
  width: 85%;
}
.start-25 {
  left: 40%;
}
.navbar-brand {
  font-size: 30px;
}
.nav-link {
  font-size: 20px;
}
.navbar {
  height: auto;
}
.nav_searchbar {
  border-radius: 45px;
  height: 30px;
}
.w-85 {
  width: 85%;
}
.start-25 {
  left: 40%;
}
</style>
