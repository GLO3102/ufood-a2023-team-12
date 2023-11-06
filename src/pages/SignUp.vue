<!-- components/SignupForm.vue -->

<template>
  <div
    class="d-flex flex-column h-75 justify-content-center align-items-center"
  >
    <h2 class="text-light">Sign Up</h2>
    <form
      @submit.prevent="handleSubmit"
      class="p-5 border border-dark rounded bg-dark"
    >
      <div>
        <label for="name" class="text-light">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>

      <div class="mt-3">
        <label for="email" class="text-light">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div class="mt-3">
        <label for="password" class="text-light">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { createNewUser } from "../api/user.js";

export default {
  name: "SignupForm",
  setup(props, { emit }) {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const handleSubmit = async () => {
      const userData = {
        name: name.value,
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
      name,
      email,
      password,
      handleSubmit,
    };
  },
};
</script>
