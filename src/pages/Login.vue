<!-- components/SignupForm.vue -->

<template>
  <div
    class="d-flex flex-column h-75 justify-content-center align-items-center"
  >
    <div>
      <h2 class="text-light">Login</h2>
      <form
        @submit.prevent="handleSubmit"
        class="p-5 border border-dark rounded bg-dark d-flex flex-column"
        style="gap: 1rem; min-width: 350px"
      >
        <div class="form-group">
          <label for="email" class="text-light">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" />
        </div>

        <div class="form-group">
          <label for="password" class="text-light">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
          />
        </div>

        <button type="submit" class="btn button-yellow mt-3">Login</button>
      </form>
      <router-link class="nav-link text-light" to="/signUp">
        <p>
          Don't have an account?
          <span style="text-decoration: underline; font-weight: 600"
            >Sign Up</span
          >
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LoginForm",
  setup(props, { emit }) {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const handleSubmit = async () => {
      const userData = {
        name: "John Doe",
        email: email.value,
        password: password.value,
      };
      try {
        // const result = await createNewUser(userData);
        const result = userData;
        localStorage.setItem("userData", JSON.stringify(result));
        router.push("/");
        emit("asLoggedIn", {
          isLoggedIn: true,
        });
      } catch (error) {
        console.error("Error creating user:", error.message);
      }
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>

<style>
.h-75 {
  margin-top: 200px;
}

.btn.button-yellow {
  background-color: #daa00f;
  color: #fff;
}
</style>
