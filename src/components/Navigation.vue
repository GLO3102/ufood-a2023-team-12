<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
  <router-link class="navbar-brand" to="/">UFood</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/restaurant">Restaurants</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/user">User Profile</router-link>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/logout">Logout</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
</script>

<style>
</style>
