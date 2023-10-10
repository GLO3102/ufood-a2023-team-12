<script>

  export default{
    name: "Navigation",
    props: {
        isLoggedIn: Boolean,
    },
    watch: { 
        isLoggedIn: function(newVal, oldVal) {

          this.loggedIn = newVal;
        },
        innerWidth: function(newVal, oldVal) {

          this.innerWidth = newVal;
        },
    },
    data() {
      return {
        loggedIn: false,
        innerWidth: window.innerWidth,
        txt_user: "John Doe",
        navCollapseValue: 990,
      }
    },
    methods: {
      logout(){
        this.$emit('asLoggedOut', {
            isLoggedIn :false,
        })
      },
      handleWindowResize(){
        this.innerWidth = window.innerWidth;
      }
    },
    created() {
      window.addEventListener("resize", this.handleWindowResize);
    },
  }
</script>

<template>
<div>
<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark px-3">
  <router-link class="navbar-brand" to="/">UFood</router-link>

  <form v-if="innerWidth <= navCollapseValue" class="form-inline col justify-content-center me-1">
    <div class="input-group m-auto w-85">
      <input class="form-control nav_searchbar" type="search" placeholder="Search" aria-label="Search">
    </div>
  </form>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <input class="form-control mr-sm-2 nav_searchbar" type="search" placeholder="Search" aria-label="Search">
      </div>
    </form>
    <ul class="col justify-content-end navbar-nav">
      <li v-if="loggedIn" class="nav-item" id="username">
        <router-link class="nav-link text-warning" to="/user">{{txt_user}}</router-link>
      </li>
      <li v-if="!loggedIn" class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li v-if="loggedIn" class="nav-item" id="btn_logout">
        <router-link class="nav-link" to="/" @click="logout">Logout</router-link>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<style>
    .nav_searchbar{
        border-radius: 45px;
        height: 30px;
    }
    .w-85{
      width: 85%;
    }
    .start-25{
        left: 40%;
    }
</style>
