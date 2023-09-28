<script>

  export default{
    name: "Navigation",
    props: {
        isLoggedIn: Boolean,
    },
    watch: { 
        isLoggedIn: function(newVal, oldVal) {

            this.loggedIn = newVal;
        }
    },
    data() {
      return {
        loggedIn: false,
        txt_user: "Admin",
      }
    },
    methods: {
      logout(){
        this.$emit('asLoggedOut', {
            isLoggedIn :false,
        })
      }
    },
  }
</script>

<template>
<div>
<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark px-3">
  <router-link class="navbar-brand" to="/">UFood</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="col navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
    </ul>
    <form class="col form-inline my-2 my-lg-0">
      <div class="input-group">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
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
        max-width: 40%;
        border-radius: 25px;
    }
    .start-25{
        left: 40%;
    }
</style>
