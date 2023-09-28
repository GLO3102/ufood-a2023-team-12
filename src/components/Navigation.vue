<script>

  export default{
    name: "Navigation",
    props: {
        isLoggedIn: Boolean,
    },
    watch: { 
        isLoggedIn: function(newVal, oldVal) {

            newVal == true ? this.loggedIn() : this.loggedOut();
        }
    },
    data() {
      return {
        txt_user: "",
        txt_logout: "",
        txt_login: "Login",
      }
    },
    methods: {
      loggedIn(){
        this.txt_user = "Admin"
        this.txt_login = ""
        this.txt_logout = "Logout"
      },
      loggedOut(){
        this.txt_user = ""
        this.txt_login = "Login"
        this.txt_logout = ""
      },
      logout(){
        this.$emit('asLoggedOut', {
            isLoggedIn :false,
        })
      }
    },
  }
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
  <router-link class="navbar-brand" to="/">UFood</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/restaurant">Restaurants</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/user">User Profile</router-link>
      </li>
    </ul>
    <input type="text" class="form-control nav_searchbar" placeholder="Search..." />
     
    <ul class="navbar-nav">
      <li class="nav-item" id="username">
        <router-link class="nav-link text-warning" to="/user">{{txt_user}}</router-link>
      </li>
      <li class="nav-item" id="btn_login">
        <router-link class="nav-link" to="/login">{{txt_login}}</router-link>
      </li>
      <li class="nav-item" id="btn_logout">
        <router-link class="nav-link" to="/" @click="logout">{{txt_logout}}</router-link>
      </li>
    </ul>
  </div>
</nav>
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
