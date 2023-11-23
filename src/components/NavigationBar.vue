<template>
  <div>
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-dark px-3"
      style="background-color: #0a0908"
    >
      <router-link class="navbar-brand alt-font" to="/" v-if="innerWidth <= navCollapseValue">UF.</router-link>
      <router-link class="navbar-brand alt-font" to="/" v-else>UFood.</router-link>
      <user-search :is-small="true" v-if="innerWidth <= navCollapseValue"></user-search>
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

<script setup>
import { onMounted, onBeforeUnmount, computed, watch, ref } from "vue";
import UserSearch from "./UserSearch.vue";
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  ref,
} from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { logout } from "../api/user";
import UserSearch from "./UserSearch.vue";

const props = defineProps({
  isLoggedIn: Boolean,
});

const emit = defineEmits(["asLoggedOut"]);

const loggedIn = ref(props.isLoggedIn);
const innerWidth = ref(window.innerWidth);
const navCollapseValue = 990;

const user = computed(() => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return userData;
});

watch(
  () => props.isLoggedIn,
  (newValue) => {
    loggedIn.value = newValue;
  }
);

watch(
  () => innerWidth.value,
  (newValue) => {
    innerWidth.value = newValue;
  }
);

const logout = () => {
  loggedIn.value = false;
  emit("asLoggedOut", {
    isLoggedIn: false,
  });
};

const handleWindowResize = () => {
  innerWidth.value = window.innerWidth;
};

onMounted(() => {
  if (localStorage.getItem("user")) {
    loggedIn.value = true;
  }

  window.addEventListener("resize", handleWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleWindowResize);
});
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
