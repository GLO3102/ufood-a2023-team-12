<template>
<div class="d-flex flex-column h-75 justify-content-center align-items-center">
    <h2 class="text-dark">Login</h2>
  <form class="p-5 border border-dark rounded bg-dark">
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-light">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="text-light">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
    
    <button @click="submit" class="btn btn-light mt-4" >Login</button>
  </form>
</div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  methods: {
    submit() {
        this.$emit('asLoggedIn', {
            isLoggedIn :true,
        }),
        this.$router.push("/");
    }
  }
}
</script>

<style>
    .h-75 {
        margin-top: 200px;
    }
</style>
